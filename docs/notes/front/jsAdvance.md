# JS高级知识

## 1、深入基础

### 1、1 数据类型

数据类型总体分为：<mark>基本类型</mark>和<mark>对象类型</mark>

| 数据类型  | 值                 | 分类     |
| --------- | ------------------ | -------- |
| String    | 任意字符串         | 基本类型 |
| Number    | 任意的数字         | 基本类型 |
| Boolean   | true/false         | 基本类型 |
| undefined | undefined          | 基本类型 |
| null      | null               | 基本类型 |
| Object    | 对象               | 对象类型 |
| Array     | 数组（特殊的对象） | 对象类型 |
| Function  | 函数（特殊的对象） | 对象类型 |

注意：<mark>JS中对大小写敏感</mark>，null和undefined首字母小写





## 2、闭包

在JS中，作用域会有作用域链，内部函数可以读取外部函数定义的变量，但是反过来就不行。

```js
var n=999;

function f1(){
    alert(n);
}

f1(); // 999

```

那我如果就想让函数外部访问到函数内部的数据呢？看下面例子

```js
function fun1(){
    var n=999;
    function fun2(){
        alert(n);
    }
    return fun2;
}
var result=fun1();
result(); // 999
```

最后，闭包产生的条件：

> 1. 一个函数内部嵌套了函数
> 2. 内部函数使用了外部函数的变量
> 3. 外部函数将内部函数给return出去了

闭包的作用：

> 1. 让函数外部可以访问到函数内部的数据
> 2. 函数内部的数据始终在内存中，不会被销毁







