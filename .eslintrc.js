module.exports = {
	env: {
		browser: true,
		node: true,
	},
	extends: [
		// add more generic rulesets here, such as:
		// 'eslint:recommended',
		'plugin:vue/vue3-recommended',
		// 'plugin:vue/recommended' // Use this if you are using Vue.js 2.x.

		//js
		'eslint: recommended',
	],
	parserOptions: {
		parser: 'babel-eslint',
		sourceType: 'module',
		// allowImportExportEverywhere: false,
		// ecmaFeatures: {
		// 	globalReturn: false,
		// },
		// babelOptions: {
		// 	configFile: 'path/to/config.js',
		// },
	},
	rules: {
		// override/add rules settings here, such as:
		// 'vue/no-unused-vars': 'error'
		'vue/html-closing-bracket-newline': [
			'error',
			{
				singleline: 'never',
				multiline: 'always',
			},
		],
		'vue/html-self-closing': [
			'error',
			{
				html: { void: 'always', normal: 'never', component: 'always' },
				svg: 'always',
				math: 'always',
			},
		],
		'vue/no-multiple-template-root': 'off',
	},
};
