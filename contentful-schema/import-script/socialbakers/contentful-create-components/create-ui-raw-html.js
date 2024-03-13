
async function createContentfulUIPRawHtmlEntry(environment, html) {
	let newRawHtml = { fields: {
		internalName: {
			'en': "MIGRATE -- UI Raw HTML Image"
		},
		rawHtml: {
			'en': html
		}
	}};

	try {
		return await environment.createEntry('uiRawHtml', newRawHtml);
	} catch(e) {
		throw (Error(e))
	}
}

module.exports = { createContentfulUIPRawHtmlEntry };