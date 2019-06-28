module.exports = {
	presets: [
		['@babel/preset-env', {
			useBuiltIns: 'usage',
			corejs: 3,
			exclude: [
				// Edge does not pass the Promise test and thus includes
				// this polyfill: https://github.com/zloirock/core-js/issues/579#issuecomment-504325213
				'es.promise',
			],
		}],
	],
};
