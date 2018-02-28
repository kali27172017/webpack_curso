const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')


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
               test:/\.css$/,
               use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: "css-loader"
              })
           },
           {
            test:/\.scss$/,
            use: ExtractTextPlugin.extract({
             //instalo sass-loader y node-sass 
             use: ["css-loader","sass-loader"]
             })
           }  
        ]
    },
    plugins: [
        // new ExtractTextPlugin("styles.css")
        new ExtractTextPlugin("css/[name].css")
      ]
}