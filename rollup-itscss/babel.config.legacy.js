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
				exclude: [
					'@babel/plugin-transform-async-to-generator',
					'@babel/plugin-transform-regenerator',
				],
				targets: {
					browsers,
				},
			},
		],
	],
	plugins: [
		'babel-plugin-transform-async-to-promises',
	],
};
