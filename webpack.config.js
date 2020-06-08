const path=require("path");

module.exports={
  entry:"./src/index.js",
  output:{
    filename:"main2.js",
    path:path.resolve(__dirname,"dist")
  },
  optimization: {
        minimize: false
    },
  module:{
    rules:[
    {
      test:/\.js$/,
      exclude:/(node_modules)/,
      use:{
        loader:'babel-loader',
        options:{
          presets:['@babel/preset-env','@babel/preset-react']
        }
      }
    }

  ]
}
}
