module.exports = function (api) {
    const isProduction = api.env('production');

    return {
        presets: [
            ['@babel/preset-env'],
            ['@babel/preset-react', {
                runtime: 'automatic',
                development: !isProduction
            }]
        ]
    };
};