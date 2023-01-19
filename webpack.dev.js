const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");


module.exports = {
    mode: 'development',
    
    devServer: {
        watchFiles: ["src/*.html"],
        hot: true,
      },

    output:{
        clean:true
    },

    module:{
        rules:[
        {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                      presets: ['@babel/preset-env']
                    }
                  }
      },
        {
                test:/\.html$/,                
                loader: 'html-loader'
        },
        {
            test: /\.css$/,
            exclude: /globalStyles.css$/,            
            use: ['style-loader','css-loader']
        },
        {
            test: /globalStyles.css$/,
            use: [ MiniCssExtractPlugin.loader, 'css-loader' ]

        },
        {
            test: /\.(png|jpe?g|gif)$/,
            use: [{ 
                    loader: 'file-loader'
        }]
        },
    ],
        
    },
    plugins: [
        new HtmlWebpackPlugin({
            title:'webpack-client',
            filename:'index.html',
            template:'./src/index.html'
        }),
        new MiniCssExtractPlugin({
         filename:'[name].css'
         }),
        new CopyPlugin({
            patterns: [
            { from: "src/assets/", to: "assets/" },         
            ],
        }),
],
  };