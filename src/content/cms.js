import getSessionStorage from "../shared/sessionStorage";

const config = require("./config");
const contentful = require("contentful");
let client = null;
let siteConfig = null;

for (let key of Object.keys(config)) {
	if (global.window && global.window.location) {
		if (window.location.hostname.indexOf(key) > -1) {
			siteConfig = config[key];
			siteConfig.languageDictionary = Object.assign(config.languageDictionary, siteConfig.languageDictionary);
			client = contentful.createClient({
				...siteConfig,
			});
		}
	}
}

if (!client) {
	siteConfig = config[Object.keys(config)[0]];
	client = contentful.createClient({
		...siteConfig,
	});
}

function listCountries(language = "en") {
	let { languageDictionary } = config;
	if (siteConfig) {
		languageDictionary = Object.assign(languageDictionary, siteConfig.languageDictionary);
	}

	return client.getEntries({
		content_type: "country",
		locale: languageDictionary[language] || language,
	});
}

function loadCountry(slug, language = "en") {
	let { languageDictionary } = config;

	if (siteConfig) {
		languageDictionary = Object.assign(languageDictionary, siteConfig.languageDictionary);
	}

	return client
		.getEntries({
			content_type: "country",
			"fields.slug": slug,
			include: 10,
			locale: languageDictionary[language] || language,
			resolveLinks: false,
		})
		.then((e, r) => {
			let toStore = e.stringifySafe();

			const sessionStorage = getSessionStorage();
			if (sessionStorage) {
				sessionStorage.country = toStore;
			}

			let entities = client.parseEntries(e);
			let { items } = entities;

			if (items.length === 0) {
				if (global.document && global.document.location) {
					global.document.location = "/";
				} else {
					throw Error("No Country Found");
				}
			}

			return items[0];
		});
}

export default {
	client,
	loadCountry,
	siteConfig,
	listCountries,
};
