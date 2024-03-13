cd ..
cd ..
npm run migrate --envir='moga-test-refactor-script' --migration=migrations/4-new-article-infra.js
cd exports
cd article-content
contentful space export --skip-roles --skip-content-model --skip-webhooks --space-id cpumif18y1gd --environment-id moga-test-refactor-script --query-entries content_type=article --content-file article.json --max-allowed-limit 100
contentful space export --skip-roles --skip-content-model --skip-webhooks --space-id cpumif18y1gd --environment-id moga-test-refactor-script --query-entries content_type=uiPage --content-file uiPage.json
contentful space export --skip-roles --skip-content-model --skip-webhooks --space-id cpumif18y1gd --environment-id moga-test-refactor-script --query-entries content_type=uiArticle --content-file uiArticle.json
contentful space export --skip-roles --skip-content-model --skip-webhooks --space-id cpumif18y1gd --environment-id moga-test-refactor-script --query-entries content_type=uiPageContent --content-file uiPageContent.json
node article-content-fix.js