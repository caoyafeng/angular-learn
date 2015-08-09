# 服务
与视图(View)无关的业务逻辑，可以移到服务中。

angular有3个方式来创建服务。
* factory 用return的方式暴露api
* service 在this上暴露api
* provide $get的方式暴露api

## 创建服务
```
angular.module('tool', [])
        .factory('array', function() {
            return {
                getMax: getMax
            };

            function getMax(arr) {
                if (arr.length === 0) {
                    return NaN;
                }
                var max = arr[0];
                arr.forEach(function(each) {
                    if (each > max) {
                        max = each;
                    }
                });
                return max;
            }
        });
```

## 使用服务
```
angular.module("app", ['tool']);// 服务所在模块
angular.module("app")
        .controller("getMaxCtrl", ['array', '$scope', function(array, $scope) {
            // 使用服务
            var numbers = [1, 2, 3, 4, 5];
            $scope.max = array.getMax(numbers);
        }]);
```


## 拓展阅读
* [[AngularJs]淺談Angular.js的Provider機制](http://kirkchen.logdown.com/posts/245678-angularjs-talking-about-the-angularjs-provider-mechanisms)