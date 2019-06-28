// Export a 'modern/esmodules' config and
// override this in the rollup.config.js for the legacy build.

// const config = require('./babel.config');

// delete config.targets;

// config.presets[0][0].debug = true;

module.exports = {
	presets: [
		[
			'@babel/preset-env',
			{
				// Uses .browserslistrc for targets
				useBuiltIns: 'usage',
				corejs: 3,
				debug: true,
			},
		],
	],
};
