// time.js
const fs = require('fs');
const contentful = require('contentful-management')
const util = require('util')

const contentfulRateReuestDelayms = 300;
const spaceId = "cpumif18y1gd";
const environmentName = "moga-test-refactor-script";
const managementApiKey = 'CFPAT-Rns-W58YdGy4hUTODkFpq6sYMCI7zYyJ9fALPEI7bwc';

let rawArticleData = fs.readFileSync('article.json');
let rawArticles = JSON.parse(rawArticleData);
let articles = rawArticles.entries;

let rawUIPArticleData = fs.readFileSync('uiArticle.json');
let rawUIArticles = JSON.parse(rawUIPArticleData);
let uiArticles = rawUIArticles.entries;

let rawUIPPageContentData = fs.readFileSync('uiPageContent.json');
let rawUIPageContents = JSON.parse(rawUIPPageContentData);
let uiPageContents = rawUIPageContents.entries;

let rawUIPageData = fs.readFileSync('uiPage.json');
let rawUIPages = JSON.parse(rawUIPageData);
let entries = rawUIPages.entries;


const client = contentful.createClient({
  accessToken: managementApiKey
})

function blockIsUIArticle(block){
    let found = false;
    uiArticles.forEach(uiArticle => {

        if(block.sys.id === uiArticle.sys.id){
            // console.log(util.inspect(uiArticle, {showHidden: false, depth: null, colors: true}))
            found = uiArticle.fields.article.en.sys.id;
        }
    });

    return found;
}

function blockIsUIPageContent(block){
    let found = false;
    uiPageContents.forEach(uiPageContent => {

        if(block.sys.id === uiPageContent.sys.id){
            found = uiPageContent.fields.article.en.sys.id;
        }
    });

    return found;
}

function doesArticleHaveAuthor(articleId){
    let hasAuthor = false;
    articles.forEach(article => {

        if(articleId === article.sys.id){
            hasAuthor = article.fields.author != null;
        }
    });

    return hasAuthor;
}

client.getSpace(spaceId)
.then((space) => space.getEnvironment(environmentName))
.then((environment) => {

    var entriesToDelete = [];

    // only run an update every 2 seconds to avoid rate limits
    function continueEntryUpdateLoop(index) {
        setTimeout(function(){
            environment.getEntry(entries[index].sys.id).then((entry) => {
                let isArticle = false;

                for (var lang in entry.fields.blocks) {
                    console.log("importing UI Page '" + entry.fields.title["en"] + "' for language: '" + lang + "'");
                    entry.fields.blocks[lang].forEach(function(block) {
                        let uiArticle = blockIsUIArticle(block);
                        let originalBlockID = block.sys.id;
                        let uiPageContent = blockIsUIPageContent(block);

                        if(uiArticle) {
                            console.log("*******Found UI Article*********: " + block.sys.id);
                            // this is actually the article ID that the uiArticle references
                            block.sys.id = uiArticle;
                            isArticle = doesArticleHaveAuthor(uiArticle);
                        }

                        if(uiPageContent) {
                            console.log("*******Found UI Page Content*********: " + block.sys.id);
                            // this is actually the article ID that the uiArticle references
                            block.sys.id = uiPageContent;
                            isArticle = doesArticleHaveAuthor(uiPageContent);
                        }

                        if(uiArticle || uiPageContent && entriesToDelete.indexOf(originalBlockID) === -1) {
                            entriesToDelete.push(originalBlockID);
                        }
                    })
                }
                
                entry.fields.isArticle = {"en": isArticle};
                return entry.update()
            })
            .then((entry) => console.log(`Entry ${entry.sys.id} updated.`))
            .catch(console.error)

            if(index < entries.length - 1)  {
                continueEntryUpdateLoop(index+1)
            } else {
                if(entriesToDelete.length > 0) {
                    continueEntryDeleteLoop(0);
                }
            }
        }, contentfulRateReuestDelayms);
    }

    function continueEntryDeleteLoop(index) {
        setTimeout(function(){
            environment.getEntry(entriesToDelete[index]).then((entry) => {

                entry.unpublish().then(() => {
                    console.log(`Entry ${entry.sys.id} unpublished.`)
                    entry.delete();
                })

                return entry;
            })
            .then((entry) => console.log(`Entry ${entry.sys.id} deleted.`))
            .catch(console.error)

            if(index < entriesToDelete.length - 1)  {
                continueEntryDeleteLoop(index+1)
            }
        }, contentfulRateReuestDelayms * 2);
    }

    continueEntryUpdateLoop(0);
}).catch(console.error)

