const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    entry:path.resolve(__dirname,'./index.js'),
    output:{
        path: path.resolve(__dirname,'dist'),
        filename:'bundle.js',
        publicPath: './dist/'
    },
    module:{
     rules:[ 
        {
            test:/\.js$/,
            use:{
                loader:'babel-loader',
                options:{
                    presets:['es2015','react']
                }
            }
        },
        {
           test:/\.json$/,
           use: 'json-loader'
        },
        {
            test:/\.(mp4|webm)$/,
            use:{
                loader:'url-loader',
                options:{
                    limit:100000,
                    name:'videos/[name].[hash].[ext]'
                }
            }
        },
        {
               test:/\.css$/,
               use:ExtractTextPlugin.extract({
                fallback: "style-loader",
                   use:"css-loader"
               }) 
           }
        ]
    },
    plugins:[
         new ExtractTextPlugin("css/estilos.css")
    ]
}