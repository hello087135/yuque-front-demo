const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports={
    entry:{
        main:'./src/index.js'
    },
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'[name].js',
    },
    mode:'development',
    module:{
        rules:[
            {
                test:/\.less$/,
                use:[MiniCssExtractPlugin.loader,'css-loader','less-loader']
            },
            {
                test:/\.(scss|sass)$/,
                use:[MiniCssExtractPlugin.loader,'css-loader','sass-loader']
            },
            {
                test:/\.styl$/,
                use:[MiniCssExtractPlugin.loader,'css-loader','stylus-loader']
            }
        ]
    },
    devServer: {
        open: true,
        hot: true,
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./public/index.html'
        }),
        new MiniCssExtractPlugin({
            filename:'style/[name].css'
        })
        ]
}