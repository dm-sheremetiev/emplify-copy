const path = require('path')

module.exports = {
  process(src, filename) {
    if (!/\.svg$/.test(filename)) {
      return src
    }
    const id = path.basename(filename)
    const svgModule = { id, viewBox: '', content: '' }
    return 'module.exports = ' + JSON.stringify(svgModule) + ';'
  },
}
