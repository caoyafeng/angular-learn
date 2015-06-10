# 模板
看起来很像标准的HTML，只是带了一些新的标记。在Angular中，像这样的文件叫做“模板(template)”,如下所示
```
<div ng-app>
	<div ng-init="qty=1;cost=2">
	  <b>订单:</b>
	  <div>
	    数量: <input type="number" ng-model="qty" required >
	  </div>
	  <div>
	    单价: <input type="number" ng-model="cost" required >
	  </div>
	  <div>
	    <b>总价:</b>
	  </div>
	</div>
</div>
```

当Angular启动你的应用时，它通过“编译器(compiler)”来解析并处理模板中的这些新标记。

## 新标记
第一类新标记叫做“指令(directive)”。    
它们通过HTML中的属性或元素来为页面添加特定的行为。上面的例子中，我们使用了 ng-app 属性，与此相关的指令(directive)则负责自动初始化我们的应用程序。

第二类新标记是双大括号`{{ expression | filter }}`，其中expression是“表达式”语句，filter是“过滤器”语句。 当编译器遇到这种标记时，它会把这些标记替换为这个表达式的计算结果。 模板中的"表达式"是一种类似于JavaScript的代码片段，它允许你读写变量。注意，表达式中所用的变量并不是全局变量。 就像JavaScript函数定义中的变量都属于某个作用域一样，Angular也为这些能从表达式中访问的变量提供了一个“作用域(scope)”。 这些存储于Angular作用域(Scope)中的变量叫做Scope变量，这些变量所代表的数据叫做“模型(model)”。 在上面的例子中，这些标记告诉Angular：“从这两个input元素中获取数据，并把它们乘在一起。

