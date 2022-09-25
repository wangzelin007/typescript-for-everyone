生成 package.json 管理项目依赖
npm init -y
安装开发环境
cnpm i -D webpack webpack-cli typescript ts-loader
webpack 配置文件
webpack.config.js
tsconfig.json

add `"build": "webpack"` in package.json["scripts"]

打包
npm run build

进阶
cnpm i -D html-webpack-plugin
add `const HTMLWebpackPlugin = require('html-webpack-plugin');` in webpack.config.js
配置 webpack 插件 in webpack.config.js
```
    plugins: [
        new HTMLWebpackPlugin({
            // title: "xxx"
            template: "./src/index.html"
        }),
    ]
```

服务器 实时监听编译
cnpm i -D webpack-dev-server 
add `"start": "webpack serve --open chrome.exe"` in package.json["scripts"]
npm start

编译前清空dist
cnpm i -D clean-webpack-plugin
add `const { CleanWebpackPlugin } = require('clean-webpack-plugin');` in webpack.config.js
```
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            // title: "xxx"
            template: "./src/index.html"
        }),
    ]
```

设置引用模块
```
    resolve: {
        extensions: ['.ts', '.js']
    }
```

兼容性
cnpm i -D @babel/core @babel/preset-env babel-loader core-js

repo:
https://github.com/isra-fel/test-typescript.git
https://github.com/isra-fel/push-demo.git
https://probot.github.io/docs/README/
https://probot.github.io/docs/development/
