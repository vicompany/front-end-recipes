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
					debug: true,
				}],
			],
		},

		legacy: {
			presets: [
				['@babel/preset-env', {
					useBuiltIns: 'usage',
					corejs: 3,
					exclude: [
						'@babel/plugin-transform-async-to-generator',
						'@babel/plugin-transform-regenerator',
					],
					targets: {
						browsers: [
							'ie 11',
						],
					},
					debug: true,
				}],
			],
			plugins: [
				'babel-plugin-transform-async-to-promises',
			],
		},
	},
};
