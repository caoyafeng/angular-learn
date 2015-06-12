# 最佳实践
1. 用ng-bind 替代 {{}}来防止页面加载时候的闪烁
1. 对于不会改变的值，用单次绑定(one time binding)。可以提高性能。在值前面加`::`。如`ng-bind="::name"` [详细](http://toddmotto.com/angular-one-time-binding-syntax/)


## 拓展阅读
* [Angular风格指南](https://github.com/johnpapa/angular-styleguide/blob/master/i18n/zh-CN.md)