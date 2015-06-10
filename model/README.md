# 模型
用于双向绑定
```
<input ng-model="name" type="text">
<h1>Hi {{name}}</h1>
```
不管是修改作用域中name的值，还是修改输入框的值，作用域中name的值和输入框的值都同时变。