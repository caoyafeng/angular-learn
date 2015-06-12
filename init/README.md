## 初始化
### 自动初始化
在应用的作用域元素上必须要设置`ng-app`属性。如果应用的作用域是在整个页面，则在`html`上设置。如
```
<!DOCTYPE html>
<html ng-app="optionalModuleName">
    <body>
        I can add: {{ 1+2 }}.
        <script src="/path/to/angular.js"></script>
    </body>
</html>
```
[demo](auto-init.html)

AngularJS会在DOMContentLoaded事件触发时初始化项目

### 手动初始化
用js来初始化。    
`angular.bootstrap(elem, [appName]);`,如
```
<!DOCTYPE html>
<html>
	<body>
	    Hello {{'World'}}!
	    <script src="/path/to/angular.js"></script>
	    <script>
	    angular.element(document).ready(function() {
	        angular.bootstrap(document);
	    });
	    </script>
	</body>
</html>
```
[demo](man-init.html) [demo2](multi-app.html)


### 参考
* [AngularJS开发指南02：引导程序](http://angularjs.cn/A00o)
