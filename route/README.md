# 路由(route)
路由通过hash来保存应用的状态。

## 定义路由
```
var app = angular.module("app", ['ngRoute']);
app.config(function($routeProvider) {
    $routeProvider.when('/page1', {
        templateUrl: 'views/page1.html',
        controller: 'Page1Ctrl'
    }).when('/page2', {
        template: '我是内联的页面：{{name}}',
        controller: 'InlineCtrl'
    }).when('/page3/:name', {
        template: '参数值：{{name}}',
        controller: 'ParamCtrl'
    });

});
```
从AngularJS 1.2开始，路由放在了ngRoute模块中。如果你需要使用路由的功能的话，必须显式的声明这个模块作为依赖。并且要引入`angular-route.js`。这样也支持第三方路由模块，如[ui router](https://github.com/angular-ui/ui-router)。

## 进行路由
```
$location.path('...');
```

## ng-view
输出在生成在`ng-view`的元素中

## 获取路径参数
用`$routeParams`来获取
```
// 路径 /page3/:name
app.controller("ParamCtrl", ['$scope', '$routeParams', function($scope, $routeParams) {
   $scope.name = $routeParams.name;
}]);
```


## 参考
* [理解AngularJS指令 -- ng-view](http://www.html-js.com/article/Understanding-the-AngularJS-command--ngview-with-Angular-development-web-application)
