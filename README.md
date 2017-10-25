# markdown

本项目引用`marked`作为对markdown的解析。

## 运行

    npm start
    # 产生files.json
    npm run prebuild
    # 编译打包
    npm run build

## 访问

[http://localhost:3002](http://localhost:3002)

## 书写博客

    在`posts`文件夹下写md文件即可。子文件可以任意层。

## 自定义页面和样式

如果对页面上的排版和样式需要定制化的，请注意需要修改的文件或文件夹地址。

所有静态页面放置在`views`目录下，其引用的静态js和css放置在`assets`目录下。

整个博客系统运行的流程是

1. 获取files.json文件。
2. 解析数据，解析为文章列表、标签列表、归档列表等。
3. 静态js中将获取的数据，显示到dom上。

如果你对排版和页面显示的数据需要调整的，可以修改相关静态页面和静态js文件。

如果你对显示的样式需要调整的，可以修改相关静态页面和静态js文件。

## 新增页面

如果对需要新增页面的，请先了解`similar-server`。

需要修改的文件包括：

1. router.js文件中添加页面路由。
2. controller目录下，添加对应Controller。
3. views目录下，添加对应html文件。

## 联系方式

- Email: [liuhong1.happy@163.com](mailto:liuhong1.happy@163.com)