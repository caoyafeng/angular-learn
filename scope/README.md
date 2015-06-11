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

## 参考
* [AngularJS 作用域与数据绑定机制](https://www.ibm.com/developerworks/cn/opensource/os-cn-AngularJS/)
* [Thoughts on Angular's Controller As Syntax](http://odetocode.com/blogs/scott/archive/2014/08/11/thoughts-on-angular-controller-as-syntax.aspx)