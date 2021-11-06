module.exports = {
    env: {
        browser: true,
        node: true,
        es2021: true
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/vue3-recommended',
        'prettier',
        'plugin:vue/recommended',
        'plugin:prettier/recommended'
    ],
    plugins: ['vue', 'prettier'],
    rules: {
        'prettier/prettier': ['error'],
        indent: ['error', 4],
        'linebreak-style': ['error', 'unix'],
        quotes: ['error', 'single'],
        semi: ['error', 'never'],
        'prettier/prettier': ['error'],
        'vue/no-multiple-template-root': 'off',
        'vue/multi-word-component-names': 'off'
    }
}
