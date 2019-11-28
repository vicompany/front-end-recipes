import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';

const isProduction = process.env.NODE_ENV === 'production';

const buildTarget = {
	MODERN: 'modern',
	LEGACY: 'legacy',
};

const INPUT_DIR = 'src/scripts';
const OUTPUT_DIR = 'dist/js';

function basePlugins(target = '') {
	const plugins = [
		resolve(),
		commonjs(),
	];

	if (isProduction) {
		plugins.push(terser({
			ecma: target === buildTarget.LEGACY ? 5 : 8,
		}));
	}

	return plugins;
}

const moduleConfig = () => ({
	input: `${INPUT_DIR}/main-module.mjs`,

	output: {
		dir: OUTPUT_DIR,
		format: 'esm',
		entryFileNames: '[name].mjs',
		chunkFileNames: '[name]-[hash].mjs',
		dynamicImportFunction: '__import__',
		sourcemap: true,
	},

	plugins: [
		...basePlugins(),
		babel({
			envName: buildTarget.MODERN,
			exclude: 'node_modules/**',
		}),
	],
});

const noModuleConfig = () => {
	process.env.BROWSERSLIST_ENV = buildTarget.LEGACY;

	return {
		input: `${INPUT_DIR}/main-nomodule.mjs`,

		output: {
			dir: OUTPUT_DIR,
			format: 'iife',
			entryFileNames: '[name].js',
			sourcemap: true,
		},

		plugins: [
			...basePlugins(buildTarget.LEGACY),
			babel({
				envName: buildTarget.LEGACY,
				exclude: 'node_modules/**',
			}),
		],

		inlineDynamicImports: true,
	};
};

export default [
	moduleConfig(),
	noModuleConfig(),
];
