# 控制器
我们在控制器里写业务逻辑。    

控制器让我们有机会在scope上定义我们的业务逻辑，具体说，可以使用控制器：

1. 对scope对象进行初始化
1. 向scope对象添加方法

## 使用
1. 在需要控制的元素添加`ng-controller="控制名"`来指定控制器，如
```
<div ng-controller="TestCtrl">
{{name}}
</div>
```

2. 在js中定义控制器
```
angular.module("app", []);
angular.module("app")
    .controller("TestCtrl", ['$scope', function($scope) {
        $scope.name = '海贼王';
    );
```