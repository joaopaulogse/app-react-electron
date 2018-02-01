const webpack = require("webpack")
const ExtractTextPlugin = require("extract-text-webpack-plugin")

const path = require("path")
module.exports = {
    entry: './src/index.js',
    output:{
        path: __dirname + '/public',
        filename:'bundle.js'
    },
    devServer:{
        port:8888,
        contentBase:"./public"
    },
    plugins:[
        new ExtractTextPlugin('app.css'),
        new webpack.HotModuleReplacementPlugin()
    ],
    resolve:{
        extensions:['.js', '.jsx'],
        alias:{
            modules:path.resolve(__dirname, 'node_modules'),
            static:path.resolve(__dirname, 'static')
        }
    },
    module:{
        loaders:[{
            test:/.js[x]?$/,
            exclude:/node_modules/,
            loader:'babel-loader',
            query:{
                presets:['latest', 'react']
            }
        },{
            test:/.css?$/,
            loader: ExtractTextPlugin.extract({
                fallback:'style-loader',
                use:'css-loader'
            })
        },{
            test:/\.(woff|woff2|svg|png|gif|eot|ttf|jpg|jpeg)$/,
            loader:'file-loader'
        }]
    }
}