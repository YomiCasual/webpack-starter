const webpack = require('webpack');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: 'cheap-module-source-map',
    devServer: {
        port: 8000,
        hot: true,
        open: true,
        historyApiFallback: true,
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.baseURL': JSON.stringify('name')
        }),
        new ReactRefreshWebpackPlugin()
    ]
    
}