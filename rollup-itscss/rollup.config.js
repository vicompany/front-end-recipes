import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';

const isProduction = process.env.NODE_ENV === 'production';

const INPUT_DIR = 'src/scripts';
const OUTPUT_DIR = 'dist/js';

function basePlugins() {
	const plugins = [
		resolve(),
		commonjs(),
	];

	if (isProduction) {
		plugins.push(terser());
	}

	return plugins;
}

export default [
	{
		input: `${INPUT_DIR}/main-module.mjs`,

		plugins: [
			...basePlugins(),
			babel({
				envName: 'modern',
				exclude: 'node_modules/**',
			}),
		],

		output: {
			dir: OUTPUT_DIR,
			format: 'esm',
			entryFileNames: '[name].mjs',
			chunkFileNames: '[name]-[hash].mjs',
			dynamicImportFunction: '__import__',
			sourcemap: true,
		},
	},
	{
		input: `${INPUT_DIR}/main-nomodule.mjs`,

		inlineDynamicImports: true,

		plugins: [
			...basePlugins(),
			babel({
				envName: 'legacy',
				exclude: 'node_modules/**',
			}),
		],

		output: {
			dir: OUTPUT_DIR,
			format: 'iife',
			entryFileNames: '[name].js',
			sourcemap: true,
		},
	},
];
