// Export a 'modern/esmodules' config for now
// and override this in the rollup.config.js for the legacy build.
// TODO: file bug/create test repo for Rollup(-plugin-babel)
module.exports = {
	presets: [
		['@babel/preset-env', {
			targets: {
				esmodules: true,
			},
			useBuiltIns: 'usage',
		}],
	],
};

// Default options without 'targets' defined,
// so it uses .browserslistrc for that.
// const options = {
// 	useBuiltIns: 'usage',
// };

// const modules = {
// 	...options,
// 	targets: {
// 		esmodules: true,
// 	},
// };

// module.exports = {
// 	presets: [
// 		['@babel/preset-env', options],
// 	],
// 	overrides: [
// 		{
// 			test: /\.mjs$/,
// 			presets: [
// 				['@babel/preset-env', modules],
// 			],
// 		},
// 	],
// };
