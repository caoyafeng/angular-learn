# 作用域
AngularJS 中，作用域是一个指向应用模型的对象，它是表达式的执行环境。    

`{{变量或方法}}`首先在当前作用域中找，如果没找到，沿着DOM结构，去其祖先元素中找。

一旦一个 ng-app 指令被定义，那么一个作用域就产生了，由 ng-app 所生成的作用域比较特殊，它是一个根作用域（$rootScope），它是其他所有$Scope 的最顶层。    

一些 AngularJS 指令会创建新的子作用域，并且进行原型继承： ng-repeat、ng-include、ng-switch、ng-view、ng-controller, 用 scope: true 和 transclude: true 创建的 directive。

`$parent`可拿到父级作用域

## 使用`as`
```
<div ng-controller="AsCtrl as ctrl">
    {{ctrl.name}}
</div>

```
```
.controller("AsCtrl", [function() {
    this.name = '如果使用as，则不需要注入$scope,在controller中直接在this上绑属性和方法即可';
}]);
```
如果使用as，则不需要注入$scope,在controller中直接在this上绑属性和方法即可

## 事件
使用事件的主要作用是消除模块间的耦合，发送方是不需要知道接收方的状况的，接收方也不需要知道发送方的状况，双方只需要传送必要的业务数据即可。    

从作用域往上发送事件，使用scope.$emit
```
$scope.$emit("someEvent", {});
```
从作用域往下发送事件，使用scope.$broadcast
```
$scope.$broadcast("someEvent", {});
```
这两个方法的第二个参数是要随事件带出的数据。

注意，这两种方式传播事件，事件的发送方自己也会收到一份。
。


## 参考
* [AngularJS实例教程（二）——作用域与事件](https://github.com/xufei/blog/issues/18)
* [AngularJS 作用域与数据绑定机制](https://www.ibm.com/developerworks/cn/opensource/os-cn-AngularJS/)
* [Thoughts on Angular's Controller As Syntax](http://odetocode.com/blogs/scott/archive/2014/08/11/thoughts-on-angular-controller-as-syntax.aspx)
