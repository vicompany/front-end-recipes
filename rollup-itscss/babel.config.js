const LEGACY_BROWSERS = [
	'ie 11',
];

module.exports = {
	env: {
		modern: {
			presets: [
				['@babel/preset-modules'],
			],
			plugins: [
				'@babel/plugin-syntax-dynamic-import',
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
