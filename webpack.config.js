const HtmlWebpackPlugin = require('html-webpack-plugin')
const path  = require('path')
module.exports = (env, argv) => {
    const {mode}  = argv
    const isProduction = mode === 'production'
    return {
        output: {
            filename: isProduction? '[name].[contenthash].js': 'main.js',
            path: path.resolve(__dirname, 'build')  
        },
        plugins:[
            new HtmlWebpackPlugin({
                template: 'src/index.html',
                favicon: "./src/assets/zoo.ico"
            })
        ],
        module:{
            rules: [
                {
                    test: /\.js$/,
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [ '@babel/preset-react',
                            {
                                runtime: 'automatic'
                            }]
                        ]
                    }
                },
                {
                    test:   /\.css$/,
                    use: ['style-loader', 'css-loader']
                },
                {
                    test: /\.png$/,
                    use: 'file-loader'
                  },
                  {
                    test: /\.jpg$/,
                    use: 'file-loader'
                  },
                  {
                    test: /\.jpeg$/,
                    use: 'file-loader'
                  },
                  {
                    test: /\.svg$/,
                    use: 'file-loader'
                  }

            ]
        },
        devServer:{
            open: true,
            port: 3500,
            compress: true
        },
        devtool: 'source-map'
    }
}