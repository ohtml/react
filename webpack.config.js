let path = require('path');
let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
let isDev = process.env.NODE_ENV === 'development';
let CleanWebapckPlugin = require("clean-webpack-plugin");
let PurifycssWebpack = require("purifycss-webpack");
let glob = require("glob");
let CopyWebpackPlugin = require("copy-webpack-plugin");

console.log(isDev);
//下面这样写是为了less 与 css分着打包
let lessExtract = new ExtractTextWebpackPlugin({
    filename: "css/less.css",
    disable: isDev,
});
let cssExtract = new ExtractTextWebpackPlugin({
    filename: "css/css.css",
    disable: isDev
});
module.exports = {
    entry: {
        index: "./src/index.js",
    },
    mode: 'development',//开发模式
    output: { //出口
        filename: '[name].[hash:8].js',
        path: path.join(__dirname, 'dist')
    },
    // 更新环境变量
    module: {
        rules: [
            {
                test: /\.css$/, use: cssExtract.extract({
                    fallback: "style-loader",
                    use: [
                        { loader: "css-loader" }
                    ]
                })
            },
            {
                test: /\.less$/, use: lessExtract.extract({
                    fallback: "style-loader",
                    use: [
                        { loader: "css-loader" },
                        { loader: "less-loader" },
                        { loader: "postcss-loader" }
                    ]
                })

            },
            {
                test: /\.(png|gif|jpg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 5,
                        outputPath: 'images/'
                    }
                }]
            },
            {
                test: /\.html/,
                // 处理html中的图片loader
                use: 'html-withimg-loader'
            },
            {
                test: /\.jsx?/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ['env', "stage-0", 'react']
                        },

                    },
                ],
                exclude: /node_modules/,
                include: /src/
            },
        
        ]
    },
   optimization:{

   },
    //插件的配置
    plugins: [
        //提供全局变量的插件
        new webpack.ProvidePlugin({
            $:"jquery",
        }),
        //设置环境变量，使用插件注入一个全局的名字
        new webpack.DefinePlugin({
            __DEV__: isDev,
        }),
        //样式抽离
        lessExtract,
        cssExtract,
        //热更新
        new webpack.HotModuleReplacementPlugin(),
        //打包前先删除一下
        new CleanWebapckPlugin(['dist']),
        //打包html的文件
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
            title: "文件标题",
            hash: true,
            chunks: ["index"]
        }),
        //删除没有用的样式，一定要入在htmlwebpackplugin的后面,用的时候注意，有可能是点击事件
        new PurifycssWebpack({
            paths: glob.sync(path.resolve("src/*.html"))
        })
    ],
    //别名
    resolve:{
        // 别名
        alias:{
            'bootstrap':path.resolve(__dirname,'node_modules/bootstrap/dist/css/bootstrap.css'),
            'swiper':"path.resove(__dirname,'./lib/swiper.min.js"
        },
        // 省略后缀名
        extensions:[' ','.js','.json','.css'],
        modules:['node_modules','lib'],
    },
    //服务的配置
    devServer: {
        contentBase: './dist',
        port: 8989,
        hot: true, // 使用热更新
        // compress: true //服务器压缩
        // open: true,
    }
}
// webpack  html 打包到build下可以自动引入js --  html-webpack-plugin