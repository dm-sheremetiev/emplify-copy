const util = require('util')

async function createContentfulSEOEntry(environment, data, metaImageId) {
	let seoMetaTitle = getSeoMetaStringValue(data, "metaTitle");
	let seoMetaDescription = getSeoMetaStringValue(data, "metaDescription");
	let seoOGTitle = getSeoMetaStringValue(data, "ogTitle");
	let seoOGDescription = getSeoMetaStringValue(data, "ogDescription");
	let seoNoIndex = getSeoNoIndex(data);

	let newSEO = { fields: {
		internalName: {
			'en': "MIGRATE -- SEO Metadata - Blog: " + data.title._text
		},
		metaTitle: {
			'en': seoMetaTitle
		},
		metaDescription: {
			'en': seoMetaDescription
		},
		noIndex: {
			'en': seoNoIndex
		},
		noFollow: {
			'en': seoNoIndex
		},
		ogTitle: {
			'en': seoOGTitle
		},
		ogDescription: {
			'en': seoOGDescription
		}
	}};

	if(metaImageId) {
		newSEO.fields.ogimage = {
			'en': {"sys": {
				"id": metaImageId,
				"linkType": "Asset"
			}}
		}

		newSEO.fields.twitterimage = {
			'en': {"sys": {
				"id": metaImageId,
				"linkType": "Asset"
			}}
		}
	}

	try {
		return await environment.createEntry('seoMetadata', newSEO);
	} catch(e) {
		throw (Error(e))
	}
}

function getSeoMetaStringValue(data, metaKey) {
	let seoMetaStringValue = "";
	if(data["wp:postmeta"]){
		data["wp:postmeta"].forEach(meta => {
			if(meta['wp:meta_key']._cdata == metaKey){
				seoMetaStringValue = meta['wp:meta_value']._cdata;
			}
		});
	}
	
	return seoMetaStringValue;
}

function getSeoNoIndex(data) {
	let seoNoIndex = false;
	if(data["wp:postmeta"]){
		data["wp:postmeta"].forEach(meta => {
			if(meta['wp:meta_key']._cdata == "noIndexNoFollow"){
				seoNoIndex = meta['wp:meta_value']._cdata == "true" ? true : false;
			}
		});
	}
	
	return seoNoIndex;
}

module.exports = { createContentfulSEOEntry };