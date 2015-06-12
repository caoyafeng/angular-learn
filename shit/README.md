# 一些坑
### 修改了变量怎么界面没反应
首先你当然要检查有没有错误以及是否确实是scope变量，如果这些都没问题，那么多半儿是$apply导致的。对于大多数操作，$apply都会自动执行，所以你不用担心，但是如果你使用了angular之外的功能，比如直接调用了setTimeout函数、挂接了jquery的事件、使用了jquery的ajax操作等等，那么系统就没有机会帮你调用$apply，界面也就没有机会刷新了，但是你如果之后又做了其他会导致$apply的操作，你会发现以前“欠下”的那次界面刷新被正常执行了了 …… 迟到的刷新仍然是bug。

典型代码如下：
```
setTimeout(function() {
  $scope.time = new Date()
}, 1000);
```

应该使用
```
$timeout(function() {
  $scope.time = new Date();
});
```

或者
```
setTimeout(function() {
    $scope.$apply(function() {// 通知更新
        $scope.val2 = Math.random();
    });
}, 300);
```

### 当数组中有重复的基本元素时会报错
用`track by $index`。如
```
<li ng-repeat="item in [1,5,6,1] track by $index">
    {{item}}
</li>
```
