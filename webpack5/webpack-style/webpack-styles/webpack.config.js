const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
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
                use:['style-loader','css-loader','less-loader']
            },
            {
                test:/\.(scss|sass)$/,
                use:['style-loader','css-loader','sass-loader']
            },
            {
                test:/\.styl$/,
                use:['style-loader','css-loader','stylus-loader']
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
        })
        ]
}