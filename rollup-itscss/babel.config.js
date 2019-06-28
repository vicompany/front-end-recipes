module.exports = {
	presets: [
		['@babel/preset-env', {
			useBuiltIns: 'usage',
			corejs: 3,
			exclude: [
				'es.promise', // Edge does not pass the Promise test: https://github.com/zloirock/core-js/issues/579#issuecomment-504325213
			],
		}],
	],
};
