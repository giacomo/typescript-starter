module.exports = {
    root: true,
    parser: '@typescript-eslint/parser', // Specifies the ESLint parser
    plugins: [
        '@typescript-eslint',
    ],
    env: {
        browser: true,
        jest: true,
    },
    extends: [
        'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    ],
    parserOptions: {
        ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
        sourceType: 'module', // Allows for the use of imports
        ecmaFeatures: {
            jsx: true, // Allows for the parsing of JSX
        },
    },
    rules: {
        'no-console': 'warn',
        'no-debugger': 'warn',
        'require-atomic-updates': 'off',
        'quotes': ['warn', 'single'],
        'indent': ['warn', 4],
        'prefer-const': 'warn',
        'no-multiple-empty-lines': ['warn', {max: 2, maxBOF: 0, maxEOF: 1}],
        'max-len': ['warn', 140],
        'comma-dangle': ['warn', 'always-multiline'],
        'arrow-parens': ['warn', 'always'],
        'object-shorthand': ['warn', 'always'],
        'object-curly-spacing': ['warn', 'never'],
        'no-empty': ['warn', {allowEmptyCatch: true}],
        'brace-style': 'warn',
        'curly': 'warn',
        'keyword-spacing': ['warn', {before: true, after: true}],
        'object-property-newline': ['warn', {allowAllPropertiesOnSameLine: true}],
        'space-before-blocks': 'warn',
        '@typescript-eslint/no-empty-function': ['warn'],
        '@typescript-eslint/ban-types': ['warn'],
        '@typescript-eslint/no-inferrable-types': ['warn'],
    },
    settings: {
        react: {
            version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
        },
    },
};
