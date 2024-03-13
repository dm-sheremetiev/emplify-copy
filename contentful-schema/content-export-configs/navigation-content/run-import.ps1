cd ..
cd ..
npm run migrate --envir='moga-dev-nav' --migration=migrations/2-create-navigation-schema.js
cd content-export-configs/navigation-content
contentful space import --config import-ui-mega-menu.json
contentful space import --config import-ui-mega-menu-columns.json
contentful space import --config import-ui-mega-menu-sub-menus.json