const fs = require('fs')
const {resolve} = require('path')
// XXX: Resolve relative to cwd because: https://github.com/vercel/next.js/issues/8251
const files = fs.readdirSync(resolve( './config/industry-reports/quarters/'))
const output = {}
for (const file of files) {
	if (!file.endsWith('.json')) {
		continue
	}
	const quarterConfig = require('./quarters/' + file)
	const {quarter} = quarterConfig
	const key = `${quarter.y}/${quarter.q}`
  output[key] = quarterConfig
}
fs.writeFileSync('./config/industry-reports/all-quarters.json', JSON.stringify(output, undefined, 2))
