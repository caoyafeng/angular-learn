# 数据监控
监控到最直接的赋值，包括各种基本类型可以被监控到：
```
$scope.arr = [0];

$scope.$watch("arr", function(newValue) {
    alert("change:" + newValue.join(","));
});

$scope.changeArr = function() {
    $scope.arr = [7, 8];
};
```
但对于数组，对象等非基本类型的内容的变化，不会触发`change`。

如果要监视数组等内容的变化，第三个参数传true
```
$scope.$watch("arr", function(newValue) {
    //...
}, true);
```
