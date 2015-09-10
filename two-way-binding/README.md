# 双向绑定
## 概念
* Dirty Checking – AngularJS内部比较value现在的值和之前的值，如果发生了改变，就触发change事件。
* Digest – 执行Dirty Checking的机制，由$scope.$digest()触发。每间隔一段时间自动调用
* Apply – 当dom事件在AngularJS机制外被触发时，需要通知AngularJS进行Digest。由$apply()触发。

有时调用 $scope.$apply();会报 `$digest already in progress`。解决方案,用
```
$scope.$$phase || $scope.$apply();
```
详细见 http://stackoverflow.com/questions/14838184/error-digest-already-in-progress

## 拓展阅读
* [[AngularJS系列(3)] View-Model双向绑定背后的故事~](http://hellobug.github.io/blog/angularjs-two-ways-binding/)