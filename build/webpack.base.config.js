const path  = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const intputDirectory = path.resolve(__dirname, '../src');
const outputDirectory = path.resolve(__dirname, '../dist');
 
module.exports = {
    entry: './src/index.ts',
    output: { 
        filename: 'js/[name].js'
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx'], //后缀自动补全 
    },
    module: {
        rules: [
            {
                test: /\.(tsx|ts)?$/i,
                use: {
                    loader: 'ts-loader'
                },
                exclude: /node_modules/,
            },

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/tpl/index.html',
            filename: path.resolve(__dirname, '../dist/index.html')
        }), 
    ]
};