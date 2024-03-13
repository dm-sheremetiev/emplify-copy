# Emplifi website

- https://emplifi.io/

## Industry reports

#### How to generate new quarter 
- To generate new quarter go to Maratonec

- Go to Maratonec "Envio" tab and set current quarter in the QUARTER in format YEARQUARTER e.g. "2022Q2" and save it https://maratonec.ccl/projects/www/periodical-jobs/environments/production/envio

- Then go to "Units" tab in Maratonec and run the cron via "Run now btn" to generate: https://maratonec.ccl/projects/www/periodical-jobs/environments/production/units

- Files will be stored in Emplifi's AWS S3 bucket in emplifi/website/pages/industry-reports

- In repo go in path config/industry-reports/quarters and add new quarterYear_q.json with missing reports generated from previous step

- Run node config/industry-reports/all-quarters.js which creates new all-quarters.json

- Run localhost and check if all is working
