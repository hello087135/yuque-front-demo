const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports={
    entry: './src/index.js',
    output: {
        filename: 'js/bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(jpg|png|gif)$/,
                type: 'asset',
                // parser: {
                //     dataUrlCondition: {
                //         maxSize: 15 * 1024 // 15kb
                //     }
                // },
                generator: {
                    filename: 'img/[name]_[hash:6][ext]'
                }
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test:/\.(woff2|woff|ttf)/,
                type: 'asset/resource',
                generator: {
                    filename: './media/[name]_[hash:6][ext]'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ],
    devServer: {
        hot:true,
        open:true,
    }
}