module.exports = {
    root: true,
    env: {
        'browser': true,
        'es6': true,
        'node': true,
        'jest/globals': true,
    },
    parserOptions: {
        parser: '@babel/eslint-parser',
        requireConfigFile: false,
    },
    extends: [
        'airbnb-base',
        'plugin:vue/recommended',
    ],
    ignorePatterns: ['dist/'],
    plugins: [
        'jest',
    ],
    rules: {
        'indent': ['error', 4, {
            ignoredNodes: ['TemplateLiteral'],
            SwitchCase: 1,
        }],
        'no-plusplus': ['error', {allowForLoopAfterthoughts: true}],
        'object-curly-spacing': [2, 'never'],
        'vue/html-indent': ['error', 4],
        'no-underscore-dangle': 0,
        'arrow-parens': ['error', 'always'],
        'import/extensions': 0,
        'import/no-unresolved': 0,
        'prettier/prettier': 0,
        'comma-dangle': ['error', 'always-multiline'],
        'quotes': ['error', 'single'],
        'semi': ['error', 'always'],
        'quote-props': ['error', 'consistent-as-needed'],
        'key-spacing': ['error', {mode: 'strict'}],
        'max-len': 0,
        'vue/singleline-html-element-content-newline': 0,
        'vue/max-attributes-per-line': ['error', {singleline: 4}],
        'no-multiple-empty-lines': ['error', {max: 2}],
        'vue/multi-word-component-names': 0,
        'vue/html-self-closing': ['error', {
            html: {
                void: 'always',
                normal: 'always',
                component: 'always',
            },
            svg: 'always',
            math: 'always',
        }],
    },
};

