module.exports = {
	'env': {
		'es2021': true,
		'node': true,
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
	],
	ignorePatterns: ['.eslintrc.*'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		tsconfigRootDir: __dirname,
		project: `tsconfig.json`,
	},
	plugins: [
		'@typescript-eslint',
	],
	rules: {
		'no-var': 'error',
		'no-duplicate-imports': 'error',
		'indent': [
			'error',
			'tab',
		],
		'linebreak-style': [
			'error',
			'unix',
		],
		'quotes': [
			'error',
			'single',
		],
		'semi': [
			'error',
			'always',
		],
		'@typescript-eslint/naming-convention': [
			'error',
			{
				'selector': 'class',
				'format': ['StrictPascalCase'],
			},{
				'selector': 'variableLike',
				'format': ['strictCamelCase'],
			},{
				'selector': 'typeLike',
				'format': ['strictCamelCase'],
				'custom': {
					'regex': 'I',
					'match': false,
				},
			},
		],
		'@typescript-eslint/no-unsafe-return': 'error',
		'@typescript-eslint/explicit-function-return-type': [
			'warn',
			{
				'allowedNames': ['ignoredFunctionName', 'ignoredMethodName'],
			},
		],
		'@typescript-eslint/no-confusing-non-null-assertion': 'warn',
		'@typescript-eslint/non-nullable-type-assertion-style': 'warn',
		'require-jsdoc': ['warn', {
			'require': {
				'FunctionDeclaration': true,
				'MethodDefinition': true,
				'ClassDeclaration': true,
				'ArrowFunctionExpression': true,
				'FunctionExpression': true,
			},
		}],
	},
};
