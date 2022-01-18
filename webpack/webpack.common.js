const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

let isDevMode = process.env.NODE_ENV === 'development' ? 'development': 'production';



module.exports = {


    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack',
            inject: true,
            template:  path.resolve(__dirname, '..', './public/index.html'),
          }),
        new MiniCssExtractPlugin()
    ],

    entry: path.resolve(__dirname, '..', './src/index.tsx'),
    resolve: {
        extensions: ['.tsx', '.ts', '.js' ]
    },
    devtool: 'inline-source-map',
    output: {
        path: path.resolve(__dirname, '..', './dist'),
        filename: '[name].[fullhash].js'
    },
 
    module: {
        rules: [
            {
                test: /\.(ts|js)x$/,  
                exclude: /node_modules/,
                use: [
                    'babel-loader'
                ]  
            },
            {
                test: /\.(sa|sc|c)ss$/, 
                exclude: /node_modules/,
                use: [
                    // 'style-loader',
                    isDevMode ? 'style-loader': MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|jp(e*)g|svg|gif)$/i,
                type: 'asset/resource',
                // use: ['file-loader'],
            },
            {

                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
        
              },
        ]
    },
    optimization: {
        splitChunks: { chunks: "all" }
      },
    
};