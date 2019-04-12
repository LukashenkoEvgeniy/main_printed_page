const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: './src/index.js',
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    module: {
        rules: [{
            rules: [
                {
                    test: /\.scss$/,
                    use: [{
                        loader: "style-loader", options: {
                            sourceMap: true
                        }
                    }, {
                        loader: "css-loader", options: {
                            sourceMap: true
                        }
                    }, {
                        loader: "sass-loader", options: {
                            sourceMap: true
                        }
                    }]
                },
                {test: /\.(woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000'},
                {test: /\.(png|jpg|gif)$/, loader: 'file-loader?name=i/[hash].[ext]'}
            ],
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: './index.html',
            chunksSortMode: 'none',
            inlineSource: '.(styles)$'
        }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
        // new webpack.HotModuleReplacementPlugin()
    ],
    devtool: 'source-map',
    devServer: {
        hot: true,
        inline: true,
        contentBase: path.join(__dirname, 'dist'),
        historyApiFallback: true,
        watchOptions: {
            ignored: /\/node_modules\/.*/
        },
    }

};