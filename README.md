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
* [双向绑定](two-way-binding)
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
* 国际化
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

## 常见问题
### $digest already in progress
有时调用 $scope.$apply();会报 `$digest already in progress`。解决方案,用
```
$scope.$$phase || $scope.$apply();
```
详细见 http://stackoverflow.com/questions/14838184/error-digest-already-in-progress

### 修改了变量怎么界面没反应
一些异步代码回调中要加
```
$scope.$apply()
```




## 资源
* [AngularJS 学习 中文版](https://github.com/justjavac/AngularJS-Learning-zh_CN) 迷渡(justjavac)
* [AngularJS学习笔记](http://www.zouyesheng.com/angular.htm) 比较深入浅出的感觉
* [Angular Guide中文版](http://docs.ngnice.com/guide)
* [angularjs-cn](https://github.com/peiransun/angularjs-cn) "AngularJS"中译本 -《AngularJS》
* [AngularJs入门教程](http://angularjs.cn/T006)AngularJs AngularJs中文社区提供
* [Angular指令及组件的全面范例](https://github.com/angular-cn/ng-showcase)
* [Angular路由深入浅出](http://div.io/topic/1096)
* [Angular2的一堆资源](https://github.com/timjacobi/angular2-education)
* [Angular风格指南](https://github.com/johnpapa/angular-styleguide/blob/master/i18n/zh-CN.md)
* [awesome-angularjs](https://github.com/gianarb/awesome-angularjs)
* [angular ui](http://angular-ui.github.io/) 一些基于angular的组件

## 博客
* [破狼](http://www.cnblogs.com/whitewolf/category/404298.html)

## 好文
* [Angular2 简介](http://zhuanlan.zhihu.com/FrontendMagazine/20058966)
