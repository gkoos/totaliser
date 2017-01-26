var webpack = require('webpack');

module.exports = {
    entry: [
        './app/app.jsx'
    ],
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        root: __dirname,
        alias: {
            calc: 'app/helpers/calc.js',
            Main: 'app/components/Main.jsx',
            Nav: 'app/components/Nav.jsx',
            Calculator: 'app/components/Calculator.jsx',
            ProfitBreakdown: 'app/components/ProfitBreakdown.jsx',
            Profit: 'app/components/Profit.jsx',
            About: 'app/components/About.jsx',
            Help: 'app/components/Help.jsx',
            applicationStyles: 'app/styles/app.scss'
        },
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query : {
                    presets: ['react', 'es2015']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url',
            }
        ]
    },
    devtool: 'cheap-module-eval-source-map',
    plugins: [
        new webpack.DefinePlugin({
            VERSION: JSON.stringify(require("./package.json").version)
        })
    ]
};