module.exports = function (migration) {

     // add new validation rule to UI Page
     const uiPage = migration.editContentType('footerConfiguration');
     
     uiPage.editField('copyright').type("RichText").validations(
      [
        {
          "enabledMarks": [
            "bold",
            "italic",
            "underline",
            "code"
          ],
          "message": "Only bold, italic, underline, and code marks are allowed"
        },
        {
          "enabledNodeTypes": [
            "heading-1",
            "heading-2",
            "heading-3",
            "heading-4",
            "heading-5",
            "heading-6",
            "ordered-list",
            "unordered-list",
            "hr",
            "blockquote",
            "table",
            "hyperlink",
            "entry-hyperlink"
          ],
          "message": "Only heading 1, heading 2, heading 3, heading 4, heading 5, heading 6, ordered list, unordered list, horizontal rule, quote, table, link to Url, and link to entry nodes are allowed"
        },
        {
          "nodes": {}
        }
      ]
     )
}