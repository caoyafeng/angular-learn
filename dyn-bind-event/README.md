# 动态加DOM元素事件的绑定
动态添加的DOM元素，在添加到页面之前，要先compile下，如
```
$scope.add = function(){
    $wrap.append($compile(btnHTML)($scope));
};
```