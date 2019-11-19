import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';

const isProduction = process.env.NODE_ENV === 'production';

const INPUT_DIR = 'src/scripts';
const OUTPUT_DIR = 'dist/js';

function basePlugins(legacy = false) {
	const plugins = [
		resolve(),
		commonjs(),
	];

	if (isProduction) {
		plugins.push(terser({
			ecma: legacy ? 5 : 8,
		}));
	}

	return plugins;
}

export default [
	{
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
				envName: 'modern',
				exclude: 'node_modules/**',
			}),
		],
	},
	{
		input: `${INPUT_DIR}/main-nomodule.mjs`,

		output: {
			dir: OUTPUT_DIR,
			format: 'iife',
			entryFileNames: '[name].js',
			sourcemap: true,
		},

		plugins: [
			...basePlugins(true),
			babel({
				envName: 'legacy',
				exclude: 'node_modules/**',
			}),
		],

		inlineDynamicImports: true,
	},
];
