import path from 'path';

import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';

const isProduction = process.env.NODE_ENV === 'production';

const INPUT_DIR = 'src/scripts';
const OUTPUT_DIR = 'dist/js';
const DEFAULT_PLUGINS = [
	resolve(),
	commonjs(),
	isProduction && terser(),
];

export default [
	{
		input: `${INPUT_DIR}/main-module.mjs`,

		plugins: [
			...DEFAULT_PLUGINS,
			babel({
				// Uses the default `babel.config.js` file
				exclude: 'node_modules/**',
			}),
		],

		output: {
			dir: OUTPUT_DIR,
			format: 'es',
			entryFileNames: '[name].mjs',
			chunkFileNames: '[name]-[hash].mjs',
			dynamicImportFunction: '__import__',
			sourcemap: true,
		},
	},
	{
		input: {
			nomodule: `${INPUT_DIR}/main-nomodule.mjs`,
		},

		inlineDynamicImports: true,

		plugins: [
			...DEFAULT_PLUGINS,
			babel({
				exclude: 'node_modules/**',
				configFile: path.resolve(__dirname, 'babel.config.legacy.js'),
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
