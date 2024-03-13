#!/bin/bash
# This script is meant to be invoked by TeamCity as part of the CI/CD pipeline for the emplifi.io website.
# Usage: deploy-emplifi-io.sh AWSAccountID ecsClusterName serviceName taskName imageName

# Simple check to make sure all arguments are set.
if [ $# -ne 5 ]; then
    echo "Arguments wrongs. Got $#, expected 5."
    exit 1
else 
    awsAccountID=$1
    ecsClusterName=$2
    serviceName=$3
    taskName=$4
    imageName=$5
fi

taskRoleArn="arn:aws:iam::$awsAccountID:role/ecsTaskExecutionRole"
executionRoleArn="arn:aws:iam::$awsAccountID:role/ecsTaskExecutionRole"

#
# Generate Task Configuration by replacing the template's place-holder with the passed values, received from TeamCity.
#
echo "Generating task-definitions.json from the template..."
jq '
.containerDefinitions[0].name = "'$ecsClusterName'" | 
.containerDefinitions[0].image = "'$imageName'"  |
.family = "'$taskName'" |
.taskRoleArn = "'$taskRoleArn'" |
.executionRoleArn = "'$executionRoleArn'"
' task-definitions.json.template > task-definitions.json
if [ $? -ne 0 ]; then 
    echo "Unable to generate the task-definitions.json file from the template."
    exit 1
fi

#
# Task Configuration Syntax Check
#
jq . task-definitions.json > /dev/null
if [ $? -ne 0 ]; then 
    echo "jq was unable to parse the task-definitions.json file. Please investigate."
    exit 1
fi
echo "Done !"

#
# Register Task Configuration with ECS
#
echo "Registering the new Task Definition with ECS..."
aws ecs register-task-definition --cli-input-json file://task-definitions.json --region us-east-1 > taskRegistration.json
if [ $? -ne 0 ]; then 
    echo "Unable to register the task definition. Please investigate."
    exit 1
fi
taskArn=$(jq -r ".taskDefinition.taskDefinitionArn" taskRegistration.json)
echo "New Task ARN: $taskArn"
echo "Done !"

#
# Update the Service with the New Task Configuration.
#
echo "Pushing updated Task Definition to ECS Service $ecsClusterName/$serviceName"
aws ecs update-service --cluster $ecsClusterName --service $serviceName --task-definition $taskName --force-new-deployment --region us-east-1 > updateService.json
if [ $? -ne 0 ]; then 
    echo "Unable to update the service with the task definition revision. Please investigate."
    exit 1
fi
echo "Done !"

#
# Deployment Verification Loop
#
retrySleep=5

echo "Stating Deployment verification loop... Deployment Status to be queried every $retrySleep seconds."
deployStatus=""
while [ "$deployStatus" != "COMPLETED" ]; do
    sleep $retrySleep
    describeInstance=$(aws ecs describe-services --cluster $ecsClusterName --services $serviceName --region us-east-1 | tee describeServices.json)
    deployStatus=$(jq -r ".services[0].deployments[0].rolloutState" describeServices.json)
    deployReason=$(jq -r ".services[0].deployments[0].rolloutStateReason" describeServices.json)
    
    # Continue loop, unless a status other than IN_PROGRESS or COMPLETED is received.
    if [ "$deployStatus" != "IN_PROGRESS" ] && [ "$deployStatus" != "COMPLETED" ]; then
        echo "Deployment Status Unexpected: $deployStatus | $deployReason. Aborting deployment, please investigate."
        exit 1
    else
        echo "Current Deployment Status: $deployStatus | $deployReason"
    fi
done
echo "Deployment Completed"