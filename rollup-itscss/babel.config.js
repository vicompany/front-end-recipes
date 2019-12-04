module.exports = {
	presets: [
		['@babel/preset-modules'],
	],
	plugins: [
		'@babel/plugin-syntax-dynamic-import',
	],

	env: {
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
				}],
			],
			plugins: [
				// But convert async functions to promises.
				'babel-plugin-transform-async-to-promises',
			],
		},
	},
};
