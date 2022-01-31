let path = require('path');
let HtmlWebpackPlugin =  require('html-webpack-plugin');

module.exports = {
    entry : './src/index.js',
    devServer: {
        port: 9000,
    },
    output : {
        path : path.resolve(__dirname , 'dist'),
        filename: 'index_bundle.js'
    },
    module : {
        rules : [            {
                test: /\.s[ac]ss$/i,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test : /\.(js)|\.(jsx)$/, 
                use:'babel-loader'
            },
            {
                test : /\.css$/, 
                use:['style-loader', 'css-loader']
            }
        ]
    },
    mode:'development',
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins : [
        new HtmlWebpackPlugin ({
            template : 'public/index.html'
        })
    ]

}
