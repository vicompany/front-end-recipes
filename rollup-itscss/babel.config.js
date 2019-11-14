const LEGACY_BROWSERS = [
	'ie 11',
];

module.exports = {
	env: {
		modern: {
			presets: [
				['@babel/preset-env', {
					useBuiltIns: 'usage',
					corejs: 3,
					exclude: [
						// Edge does not pass the Promise test and thus includes
						// this polyfill: https://github.com/zloirock/core-js/issues/579#issuecomment-504325213
						// Therefor we have to exclude it.
						'es.promise',
					],
				}],
			],
		},

		legacy: {
			presets: [
				['@babel/preset-env', {
					useBuiltIns: 'usage',
					corejs: 3,
					exclude: [
						// Don't convert async functions to generators.
						'@babel/plugin-transform-async-to-generator',
						'@babel/plugin-transform-regenerator',
					],
					targets: {
						browsers: LEGACY_BROWSERS,
					},
				}],
			],
			plugins: [
				'babel-plugin-transform-async-to-promises',
			],
		},
	},
};
