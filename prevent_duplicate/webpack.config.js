const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpack = require('webpack');



module.exports = {
    entry:{
       home:path.resolve(__dirname,'src/js/index.js'),
       precio:path.resolve(__dirname,'src/js/precios.js'),
       contacto:path.resolve(__dirname,'src/js/contacto.js')
    },
    output:{
        path: path.resolve(__dirname,'dist'),
        filename:'js/[name].js'
    },
    devServer:{
        port:9000
    },
    module:{
        rules:[
           {

               //configurando postcss
               test:/\.css$/,
               use: ExtractTextPlugin.extract({
                //fallback: "style-loader",
                //use: "css-loader"
                use: [
                  {
                    loader: 'css-loader',
                    options: {
                        modules: true, //que permita importar archivos en otros
                        importLoaders:1
                    }
                  },
                  'postcss-loader' 
                ]
              })
           },
           {
            test:/\.scss$/,
            use: ExtractTextPlugin.extract({
             //instalo sass-loader y node-sass 
             use: ["css-loader","sass-loader"]
             })
           },
           {
            test:/\.styl$/,
            use: ExtractTextPlugin.extract({
             //instalo stylus-loader y stylus
             //use: ["css-loader","stylus-loader"]
             use:[
                 "css-loader",
                 {
                     loader: 'stylus-loader',
                     options: {
                       use: [  
                         require('nib'), //para prefijos
                         require('rupture') //mixins para dar soporte a medias queries
                       ],
                       import : [
                           '~nib/lib/nib/index.styl',
                           '~rupture/rupture/index.styl'
                       ]
                     },

                 }
             ] 
            })
           }   
        ]
    },
    plugins: [
        // new ExtractTextPlugin("styles.css")
        new ExtractTextPlugin("css/[name].css"),

        //plugin para prevenir codigo duplicado
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common'
        })
      ]
}