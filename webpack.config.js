const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'development',
    entry:'./src/main.js',
    output:{
        filename:'js/build.js',
        // 打包后资源文件的前缀
        publicPath: './',
        path:path.resolve(__dirname,'dist')
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    {
                        loader:'css-loader',
                        options:{
                            esModule:false,
                            importLoaders:2
                        }
                    },
                    'postcss-loader'
                ]
            },
            {
                test:/\.vue$/,
                use:['vue-loader']
            },
            {
                test:/\.(png|svg|gif|jpe?g)$/,
                use:[
                    {     
                        loader:'file-loader',
                        options:{
                            esModule:false,
                            // [name]:名称
                            // [hash]:hash值，可设置长度
                            // [ext]:扩展名
                            // name:'[name].[ext]', //基础用法
                            name:'[name].[hash:4].[ext]', //添加hash
                            outputPath:'img', //输出的文件夹
                            limit: 20 * 1024 //图片资源大小
                        }
                    }
                ]
            }
        ]
    },
    plugins:[
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            title:'html-webpack',
            template:'./public/index.html',
            templateParameters: {
                BASE_URL: `/` //解决 index.html 中的 BASE_URL
            }
        })
    ]
}
