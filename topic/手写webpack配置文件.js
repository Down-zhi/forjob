// 要点  入口 ，出口文件 ，转换器，插件 ，模块中的规则 

module.exports={
 mode:"",
 entry:'',
 output:{
    path:'',
    filename:''
 },
 module:{
    rules:[
        {
            test:/\.css$/,
            use:['style-loader','css-loader']
          },
          {

          }
    ]
 },
 plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
    ],
    devServer: {
        port: 3000
    }
}