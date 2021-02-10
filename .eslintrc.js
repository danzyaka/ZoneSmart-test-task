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
        'plugin:vue/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
    ],
    plugins: ['import'],
    rules: {
        indent: [0, 4],
        semi: 0,
    },
    settings: {
        'import/extensions': ['error', 'never', { ignorePackages: true }],
        'import/resolver': {
            alias: {
                map: [['@', './src']],
            },
            extensions: ['.js', '.vue'],
        },
    },
};
