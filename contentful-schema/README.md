contentful-schemas

## Initialization

install required packages with 'npm i'

run 'contentful login' to authenticate with the contentful-cli

if you are already logged into the wrong Contetnful instance, you can use 'contentful logout' to logout first.

## EXPORT ALL DEV CONTENT MODELS

npm run export

## TO RUN MIGRATION SCRIPTS

### Shortened Command

npm run migrate --envir='<ENV-ID>' --migration=<PATH-TO-MIGRATION-SCRIPT-NAME>

## When to use migrations

If you are making small updates to content models inside Contentful, for example maybe you want to change a single line text field to be a URL format field, the change for that should be written as a migration so that it can easily be transported from the dev branch to the new master branch without disruption or a chance to make the change incorrectly by hand. It also acts as a way to see the progressive changes that have happened over time to content models (source control)

## When not to use migrations

If you are planning on adding a completely new content model from scratch, the migration API is really not necessary to use. Since all you would need to do is add the new content model to the master branch, then delete your dev branch, create a new dev branch by copying the master branch, and now both branches will have the new content model. It is much faster and easier than writing a long migration file.
