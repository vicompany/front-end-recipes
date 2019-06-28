const browserslist = require('browserslist');

const config = require('./babel.config');

const LEGACY_BROWSERS = [
	'ie 11',
];

const {
	presets: [
		[
			preset,
			settings,
		],
	],
} = config;

const browsers = [
	...browserslist(),
	...LEGACY_BROWSERS,
];

module.exports = {
	presets: [
		[
			preset,
			{
				...settings,
				targets: {
					browsers,
				},
			},
		],
	],
};
