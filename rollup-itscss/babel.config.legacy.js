const config = require('./babel.config');

const {
	presets: [
		[
			preset,
			settings,
		],
	],
} = config;

const browsers = [
	'ie 11',
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
