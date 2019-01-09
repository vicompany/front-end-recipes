import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';

const isProduction = process.env.NODE_ENV === 'production';

const INPUT_DIR = 'source/scripts';
const OUTPUT_DIR = 'dist/js';
const DEFAULT_PLUGINS = [
	resolve(),
	commonjs(),
	isProduction && terser(),
];

export default [
	{
		input: `${INPUT_DIR}/main.mjs`,

		plugins: [
			...DEFAULT_PLUGINS,
			babel({
				exclude: 'node_modules/**',
			}),
		],

		output: {
			file: `${OUTPUT_DIR}/main.mjs`,
			format: 'es',
			sourcemap: true,
		},
	},
	{
		input: `${INPUT_DIR}/main.legacy.js`,
		plugins: [
			...DEFAULT_PLUGINS,
			babel({
				babelrc: false,
				exclude: 'node_modules/**',
				presets: [
					[
						'@babel/preset-env',
						{
							// Uses .browserslistrc for targets
							useBuiltIns: 'usage',
						},
					],
				],
			}),
		],

		output: {
			file: `${OUTPUT_DIR}/main.legacy.js`,
			format: 'iife',
			sourcemap: true,
		},
	},
];
