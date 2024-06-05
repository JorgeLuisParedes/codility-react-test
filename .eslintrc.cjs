module.exports = {
	root: true,
	env: {
		browser: true,
		es2020: true,
		jest: true,
	},
	extends: [
		'standard',
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'plugin:react-hooks/recommended',
		'eslint-config-prettier',
	],
	overrides: [
		{
			env: {
				node: true,
			},
			files: ['.eslintrc.{js,cjs}'],
			parserOptions: {
				sourceType: 'script',
			},
		},
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	settings: {
		react: {
			version: '18.2.0',
		},
	},
	plugins: ['react-refresh'],
	rules: {
		'react/jsx-no-target-blank': 'off',
		'react-refresh/only-export-components': [
			'warn',
			{ allowConstantExport: true },
		],
		'import/export': 0,
		'react/no-unescaped-entities': 'off',
		'react-hooks/exhaustive-deps': 'off',
		'no-unused-vars': 'off',
		'import/no-absolute-path': 'off',
	},
};
