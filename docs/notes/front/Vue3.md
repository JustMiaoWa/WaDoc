---
sidebar: auto
sidebarDepth: 2
---



# Vue3学习笔记

> 此笔记使用Vite搭建Vue3、结合TS使用

## 1、使用Vite创建Vue3工程

对node的版本有要求，好像是node>18

```shell
npm create vite@latest
```

后面的选项就看个人需求了

![image-20231224185341099](Vue3.assets/image-20231224185341099.png)

这样vite就给你创建了一个<mark>默认的Vue3模版</mark>

## 2、默认Vue3模版介绍

![image-20231224222411219](Vue3.assets/image-20231224222411219.png)

![image-20231224222714088](Vue3.assets/image-20231224222714088.png)

- .vscode 文件夹：表示为vscode默认安装两个插件
- public 文件夹：项目的静态文件夹目录
- src 文件夹：就是我们写源代码的地方
- .gitignore：git的忽略文件
- env.d.ts：为ts声明不认识的文件，比如jpg，css等后缀名文件
- index.html：程序的入口文件
- tsconfig开头文件：所有关于ts的配置
- vite.config.ts：vite的配置，也是整个项目的配置

## 3、setup语法

首先要清晰的明白<mark>setup是一个函数</mark>，与<mark>Vue2中的data、methods、watch是同级的</mark>

1、setup里面可以写的内容跟js一样，<mark>直接声明变量和方法</mark>

```vue
<template>
    <div>{{name}}</div>
</template>
<script lang="ts">
    export default {
        name:'Person',
        setup(){
            let name = 'zhangsan'
            return {name}
        }
    }
</script>
```

2、这里setup<mark>返回了一个对象</mark>，<mark>其实也可以返回一个函数</mark>，我们称这个函数为<mark>渲染函数</mark>，因为返回的函数内容会直接呈现在页面上，这个时候你写的template和script里面的数据都没有用了。

```vue
<template>
    <div>{{ name }}</div>
</template>
<script lang="ts">
    export default {
        name:'Person',
        setup(){
            let name = 'zhangsan'
            return function(){
                return "hh"
            }
        }
    }
</script>
```

3、setup生命周期甚至在beforeCreate之前

```vue
<template>
    <div>{{ name }}</div>
</template>
<script lang="ts">
    export default {
        name:'Person',
        beforeCreate() {
            console.log('beforeCreate')
        },
        setup(){
            console.log('setup')
            let name = 'zhangsan'
            return {name}
        }
    }
</script>
// 控制台打印
// setup
// beforeCreate
```

总结：

- **setup是一个函数，与vue2中的data、methods同级**
- **setup可以返回一个对象（对象可以在模版中使用），也可以返回函数（渲染函数）**
- **setup中没有this指向**
- **setup生命周期甚至在beforeCreated之前，所以当setup与data同时存在时，data能读取到setup的数据，但是setup不能读取data里面的数据**

## 4、setup语法糖

原来的setup中，我们必须写在export default中，还必须写return 返回值，那有没有简便的写法呢，有了，就是setup的语法糖

```vue
<template>
    <div>{{ name }}</div>
</template>
<script lang="ts">
    export default {
        name:'Person',
    }
</script>
<script lang="ts" setup>
    let name = "zhangsan"
</script>
```

<mark>在script标签内直接写上setup</mark>，就相当于原来setup函数中写的内容，他会自动给你return返回值。

但是这样有个缺点，就是组件的名字name，还必须另外写一个script标签，当然这里有一些解决办法

1. 就是像上方代码一样，写两个script标签
2. 也可以直接不写组件的name，那么默认组件的文件名就是它的name
3. 利用vite-plugin-vue-setup-extend插件实现

下面讲解第三种方式如何实现：

1、首先安装依赖：

```shell
npm i vite-plugin-vue-setup-extend -D
```

2、配置vite文件，引入这个插件，并调用

```shell
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueSetupExtend from 'vite-plugin-vue-setup-extend'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueSetupExtend()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
```

3、如何使用，直接在script标签上写name

```vue
<template>
    <div>{{ name }}</div>
</template>
<script lang="ts" setup name="Person1234">
    let name = "zhangsan"
</script>
```

## 5、ref函数

