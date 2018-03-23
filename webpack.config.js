const webpack = require('webpack'); //访问内置的插件
const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// 获取html-webpack-plugin参数的方法 
var getHtmlConfig = function (name, title) {
    return {
        template: './src/view/' + name + '.html',
        filename: 'view/' + name + '.html',
        title: title,
        inject: true,
        hash: true,
        chunks: ['common', name]
    };
};

const config = {
    entry: {
        'common': ['./src/page/common/index.js'],
        'index': ['./src/page/index/index.js'],
        'layout': ['./src/page/layout/index.js'],
    },
    output: {
        filename: 'js/[name].js',
        publicPath: '/dist',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        loaders: [
            {
                test: /\.string$/,
                loader: 'html-loader'
            }
        ],
        rules: [{
                test: /\.css$/,
                use: ExtractTextPlugin.extract({ //use:指需要什么样的loader去编译文件,这里由于源文件是.css所以选择css-loader
                    fallback: "style-loader", //fallback:编译后用什么loader来提取css文件
                    use: "css-loader" //publicfile:用来覆盖项目路径,生成该css文件的文件路径
                })
            },
            {  
                test: /\.(png|jpg|gif|jpeg|woff|svg|eot|ttf)\??.*$/,  
                use: 'url-loader?limit=1024&name=[name].[ext]&outputPath=images/',  
            }
        ]
    },
    resolve : {
        alias : {
            node_modules    : __dirname + '/node_modules',
            util            : __dirname + '/src/util',
            page            : __dirname + '/src/page',
            service         : __dirname + '/src/service',
            image           : __dirname + '/src/image'
        }
    },
    plugins: [
        // 独立通用模块
        new webpack.optimize.CommonsChunkPlugin({
            name: "common", //通用模块
            filename: "js/base.js"
            // filename: "vendor.js"
            // (给 chunk 一个不同的名字)
        }),
        new ExtractTextPlugin("css/[name].css"),
        // html模板的处理
        new HtmlWebpackPlugin(getHtmlConfig('index', '首页')),
        new HtmlWebpackPlugin(getHtmlConfig('layout', '布局')),
    ]
};

module.exports = config;