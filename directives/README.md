# 指令()
指令可以增加DOM的能力。在DOM编译期间，和HTML关联着的指令会被检测到，并且被执行。这使得指令可以为DOM指定行为，或者改变它。

## 内置的指令
所有内置指令都以 `ng-`为前缀

### ng-app
[这里](../init)

### ng-model
将表单控件和当前作用域的属性进行绑定
见[这里](../model)

### ng-init
作用域里变量的初始值,多个赋值直接有分号间隔
```
ng-init="name='joel';habbit='coding,eating'"
```

### ng-controller
见[这里](../controller)

## ng-hide/ng-show
元素的隐藏，显示

### ng-if
如果ng-if中的表达式为false，则对应的元素整个会从DOM中移除而非隐藏，但审查元素时你可以看到表达式变成注释了


### ng-href
```
<a href="/avatar/{{hash}}">link1</a>
```
angularjs的执行都是在DOM渲染完成之后，如果我们在angularjs执行这个表达式之前点击了链接，那么就直接访问了/avatar/{{hash}}，一般都会跳转到404页面，用户体验太烂了。

使用了`ng-href`就就可以避免出现这种问题。

### ng-src
```
<img ng-src="{{src}}" alt="">
<img src="{{src}}" alt="">
```
区别是，如果用src，那边它会先去请求地址为{{src}}图标，导致404。因为指令是在dom Loaded后才会转化成html

## ng-include
引入内容。
```
<div ng-include="'path/to/html'"></div>
```
注意:使用ng-include的时候，`path/to/html`相当于一个字符串，不是ng-expression，所以不要忘了加单引号。

## ng-style
样式

## ng-transclude


### 事件
* ng-click
* ng-dblclick
* ng-mousedown
* ng-mouseup
* ng-mouseenter
* ng-mouseleave
* ng-mousemove
* ng-mouseover
* ng-keydown
* ng-keyup
* ng-keypress
* ng-focus
* ng-blur
* ng-change 设置该属性必须设置ng-model,只要ng-model变化，就会触发该事件

### ng-form
表单相关的
* ng-disabled true/false设置表单元素是否启用
* ng-readonly true/false设置表单元素是否可读
* ng-checked
* ng-selected


## 编译过程和指令匹配
1. 首先浏览器会用它的标准API将HTML解析成DOM。 你需要认清这一点，因为我们的模板必须是可被解析的HTML。这是AngularJS和那些“以字符串为基础而非以DOM元素为基础的”模板系统的区别之处。

1. DOM的编译是有$compile方法来执行的。 这个方法会遍历DOM并找到匹配的指令。一旦找到一个，它就会被加入一个指令列表中，这个列表是用来记录所有和当前DOM相关的指令的。 一旦所有的指令都被确定了，会按照优先级被排序，并且他们的compile方法会被调用。 指令的$compile()函数能修改DOM结构，并且要负责生成一个link函数（后面会提到）。$compile方法最后返回一个合并起来的链接函数，这是链接函数是每一个指令的compile函数返回的链接函数的集合。

1. 通过调用一步所说的链接函数来将模板与作用域链接起来。这会轮流调用每一个指令的链接函数，让每一个指令都能对DOM注册监听事件，和建立对作用域的的监听。这样最后就形成了作用域的DOM的动态绑定。任何一个作用域的改变都会在DOM上体现出来。

## 自定义指令



## 参考
* [AngularJS开发指南05：指令](http://www.angularjs.cn/A00r)
* [AngularJS - 指令入门](http://www.cnblogs.com/Kavlez/p/4271057.html)