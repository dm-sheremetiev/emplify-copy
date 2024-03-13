module.exports = function (migration) {
    const author = migration.editContentType('author');

    // create new text field (Symbol means short text field)
    author.createField('website')
        .name('Personal Website')
        .type('Symbol')
        .required(true);

    author.moveField('website').afterField('photo');
}
