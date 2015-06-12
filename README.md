# Angular学习
## 安装
在[Angular官网](https://angularjs.org/) （需翻墙）下载即可。

## 基本的demo
```
<!doctype html>
<html ng-app>
  <head>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.16/angular.min.js"></script>
  </head>
  <body>
    <div>
      <label>Name:</label>
      <input type="text" ng-model="yourName" placeholder="Enter a name here">
      <hr>
      <h1>Hello {{yourName}}!</h1>
    </div>
  </body>
</html>
```

## 概念
* [初始化](init)
* [模板](template)
* [作用域](scope)
  * `$scope`
  * `as`
  * `$parent`
  * 事件： 作用域之间接传递消息
* [指令](directives) (Directives)
  * 系统指令
  * 自定义指令
* [控制器](controller)
* [数据监控](watch)
* [服务](service)
  * factory
  * service
  * provider
* [模型](model)
* [路由](route)
  * ui route
* [动态加DOM元素事件的绑定](dyn-bind-event)
* [一些坑](shit)
* [过滤器](filter)
  * 内置过滤器
  * 自定义过滤器
* [angular自带工具方法](tool)
* 加载器
* [测试](test)
* [最佳实践](best-practice)




## angular的文件
* angular-mocks.js — This file contains an implementation of mocks that makes testing angular apps even easier. Your unit/integration test harness should load this file after angular.js is loaded.
* angular-scenario.js — This file is a very nifty JavaScript file that allows you to write and execute end-to-end tests for angular applications.
* angular-loader.min.js — Module loader for Angular modules. If you are loading multiple script files containing Angular modules, you can load them asynchronously and in any order as long as you load this file first. Often the contents of this file are copy&pasted into the index.html to avoid even the initial request to angular-loader.min.js. See angular-seed for an example of usage.
* angular-animate.js - Enable animation support
* angular-cookies.js - A convenient wrapper for reading and writing browser cookies
* angular-resource.js - Interaction support with RESTful services via the $resource service
* angular-route.js - Routing and deeplinking services and directives for angular apps
* angular-sanitize.js - Functionality to sanitize HTML
* angular-touch.js - Touch events and other helpers for touch-enabled devices




## 资源
* [Angular Guide中文版](http://docs.ngnice.com/guide)
* [AngularJS-Learning-zh_CN](https://github.com/justjavac/AngularJS-Learning-zh_CN)
* [angularjs-cn](https://github.com/peiransun/angularjs-cn) "AngularJS"中译本 -《AngularJS》
* [AngularJs入门教程](http://angularjs.cn/T006)AngularJs AngularJs中文社区提供
* [todo-mvc angular](https://github.com/tastejs/todomvc/tree/master/examples/angularjs)
* [Angular指令及组件的全面范例](https://github.com/angular-cn/ng-showcase)
* [Angular风格指南](https://github.com/johnpapa/angular-styleguide/blob/master/i18n/zh-CN.md)
* [awesome-angularjs](https://github.com/gianarb/awesome-angularjs)

## 博客
* [破狼](http://www.cnblogs.com/whitewolf/category/404298.html)

## 好文
* [Angular2 简介](http://zhuanlan.zhihu.com/FrontendMagazine/20058966)
