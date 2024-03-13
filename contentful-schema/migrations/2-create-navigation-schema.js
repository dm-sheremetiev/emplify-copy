module.exports = function (migration) {

    // add new feild to header configuration
    const headerConfiguration = migration.editContentType('headerConfiguration');
    headerConfiguration.createField('newMainMenu').name('New Main Menu').required(true).type('Link').linkType("Entry").validations([
        {
          "linkContentType": [
            "uiMegaMenu"
          ]
        }
      ])

    // New uiMegaMenu content type.
    const uiMegaMenu = migration.createContentType('uiMegaMenu')
    .name('UI Mega Menu')
    .displayField('internalName');

    uiMegaMenu.createField('internalName').type('Symbol').required(true).name('Internal Name');
    uiMegaMenu.createField('subMenus').type('Array').required(true).name('Sub Menus').items({
        "type": "Link",
        "validations": [
          {
            "linkContentType": [
              "uiMegaMenuSubMenu"
            ]
          }
        ],
        "linkType": "Entry"
      })

    // New uiMegaMenuColumn content type.
    const uiMegaMenuColumn = migration.createContentType('uiMegaMenuColumn')
    .name('UI Mega Menu Column')
    .displayField('columnTitle');

    uiMegaMenuColumn.createField('columnTitle').type('Symbol').required(true).name('Column Title');
    uiMegaMenuColumn.createField('thumbnail').type('Link').linkType("Asset").name('Thumbnail');
    uiMegaMenuColumn.createField('abstract').type('Symbol').name('Abstract');
    uiMegaMenuColumn.createField('columnTitleLink').type('Link').linkType("Entry").name('Column Title Link').validations([
        {
          "linkContentType": [
            "externalNavigationLink",
            "internalNavigationLink"
          ]
        }
      ]);
    uiMegaMenuColumn.createField('backgroundColor').type('Symbol').name('Background Color').validations([
        {
          "in": [
            "Cornflower Dark Blue",
            "Dark Blue",
            "Dark Gray",
            "Light Gray",
            "Purple",
            "Subtle Blue",
            "Subtle Dark Blue",
            "Subtle Purple"
          ]
        }
      ])
    uiMegaMenuColumn.createField('linkList').type('Array').name('Link List').validations([
        {
            "size": {
            "min": 0,
            "max": 10
            },
            "message": "No more than 10 links, or else the design can be thrown off"
        }
    ]).items({
        "type": "Link",
        "validations": [
          {
            "linkContentType": [
              "externalNavigationLink",
              "internalNavigationLink"
            ]
          }
        ],
        "linkType": "Entry"
      })
    uiMegaMenuColumn.createField('date').type('Date').name('Date');

    // New uiuiMegaMenuSubMenu content type.
    const uiMegaMenuSubMenu = migration.createContentType('uiMegaMenuSubMenu')
    .name('UI Mega Menu Sub Menu')
    .displayField('navigationTitle');

    uiMegaMenuSubMenu.createField('navigationTitle').type('Symbol').name('Navigation Title');
    uiMegaMenuSubMenu.createField('title').type('Symbol').name('Title');
    uiMegaMenuSubMenu.createField('abstract').type('Symbol').name('Abstract');
    uiMegaMenuSubMenu.createField('ctaLink').type('Link').linkType("Entry").name('CTA Link').required(true).validations([{ "linkContentType": [
            "externalNavigationLink",
            "internalNavigationLink"
        ] 
    }]);
    uiMegaMenuSubMenu.createField('subMenuColumns').type('Array').required(true).name('Sub Menu Columns').validations([
        {
          "size": {
            "min": 1,
            "max": 3
          },
          "message": "Must have one column, cannot have more than 3"
        }
      ]).items({
        "type": "Link",
        "validations": [
          {
            "linkContentType": [
              "uiMegaMenuColumn"
            ]
          }
        ],
        "linkType": "Entry"
      })
}