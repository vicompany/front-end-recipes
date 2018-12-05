// Export a 'modern/esmodules' config and
// override this in the rollup.config.js for the legacy build.
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
