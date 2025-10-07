const { defineConfig, globalIgnores } = require('eslint/config');

const globals = require('globals');
const tsParser = require('@typescript-eslint/parser');
const typescriptEslint = require('@typescript-eslint/eslint-plugin');
const react = require('eslint-plugin-react');
const reactHooks = require('eslint-plugin-react-hooks');
const reactRefresh = require('eslint-plugin-react-refresh');
const vue = require('eslint-plugin-vue');
const prettier = require('eslint-plugin-prettier');
const js = require('@eslint/js');

const { FlatCompat } = require('@eslint/eslintrc');

const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended,
	allConfig: js.configs.all,
});

module.exports = defineConfig([
	// Global ignores
	globalIgnores([
		'**/coverage',
		'**/public',
		'**/dist',
		'**/node_modules',
		'**/pnpm-lock.yaml',
		'**/pnpm-workspace.yaml',
		'**/build',
		'**/.next',
		'**/out',
	]),

	// Base configuration for all files
	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node,
				...globals.es2021,
			},
			ecmaVersion: 'latest',
			sourceType: 'module',
		},
	},

	// TypeScript files
	{
		files: ['**/*.ts', '**/*.tsx'],
		languageOptions: {
			parser: tsParser,
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
			},
		},
		plugins: {
			'@typescript-eslint': typescriptEslint,
		},
		rules: {
			...typescriptEslint.configs.recommended.rules,
		},
	},

	// React files
	{
		files: ['**/*.tsx', '**/*.jsx'],
		plugins: {
			react,
			'react-hooks': reactHooks,
			'react-refresh': reactRefresh,
		},
		rules: {
			...react.configs.recommended.rules,
			...reactHooks.configs.recommended.rules,
			'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
			'react/react-in-jsx-scope': 'off', // Not needed with React 17+
		},
		settings: {
			react: {
				version: 'detect',
			},
		},
	},

	// Vue files
	{
		files: ['**/*.vue'],
		languageOptions: {
			parser: require('vue-eslint-parser'),
			parserOptions: {
				ecmaVersion: 'latest',
				sourceType: 'module',
				parser: {
					js: 'espree',
					ts: tsParser,
				},
			},
		},
		plugins: {
			vue,
			'@typescript-eslint': typescriptEslint,
		},
		rules: {
			...vue.configs['essential'].rules,
			...typescriptEslint.configs.recommended.rules,
		},
	},

	// Configuration files
	{
		files: [
			'**/.eslintrc.{js,cjs}',
			'**/eslint.config.{js,cjs}',
			'**/vite.config.{js,ts}',
			'**/vitest.config.{js,ts}',
		],
		languageOptions: {
			globals: {
				...globals.node,
			},
			sourceType: 'script',
		},
	},

	// Prettier integration
	{
		files: ['**/*.{js,jsx,ts,tsx,vue}'],
		plugins: {
			prettier,
		},
		rules: {
			'prettier/prettier': 'error',
		},
	},
]);
