const path = require('path')
const webpack = require('webpack')
const vueloaderplugin = require('vue-loader/lib/plugin')
const htmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode:'development',
    entry:path.join(__dirname,'./src/main.js'),
    output:{
        path:path.join(__dirname,'./dist'),
        filename:'bundle.js'
    },
    module:{//这个节点，用于配置所有第三方模块加载器
        rules:[//所有第三方模块的匹配规则
            {test:/\.css$/,use:['style-loader','css-loader']},
            {test:/\.vue$/,use:'vue-loader'},
            {test:/\.js$/,use:'babel-loader',exclude:/node_modules/},
            // {test:/\.scss$/,use:['style-loader','css-loader','sass-loader']},
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
            {test:/\.(jpg|png|bmp|gif|jpeg)$/,use:'url-loader?name=[hash:8]-[name].[ext]'},
            {test:/\.(ttf|eot|svg|woff|woff2)$/,use:'url-loader'}
        ]
    },
    plugins:[
        new htmlWebpackPlugin({
            template:path.join(__dirname,'./src/index.html'),
            filename:'index.html'
        }),
       new vueloaderplugin()
    ],
    resolve:{
        alias:{
            // "vue$":"vue/dist/vue.js"
        }
    }
}