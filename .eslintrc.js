module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    parserOptions: {
        parser: 'babel-eslint',
    },
    extends: [
        'airbnb-base',
        // 'plugin:vue/recommended',
        // 'plugin:import/errors',
        // 'plugin:import/warnings',
    ],
    plugins: ['import'],
    rules: {
        indent: [0, 4],
        semi: 0,
        'no-return-assign': 2,
        'import/extensions': [2, 'never'],
    },
    settings: {
        'import/resolver': {
            alias: {
                map: [['@', './src']],
                extensions: ['.vue', '.js', '.pug', '.sass'],
            },
        },
    },
}
