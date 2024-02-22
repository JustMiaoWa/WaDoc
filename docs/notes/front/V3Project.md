# Vue3的项目配置

## 1、项目安装scss

```shell
npm i sass sass-loader --save-dev
```

你可以在assets/styles/目录下创建scss初始化文件，比如黑夜白天切换主题scss，或者一些全局scss

在vite.config.ts中加入：

```typescript
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve("./src")
    }
  },
  css: {
    // css预处理器
    preprocessorOptions: {
      scss: {
        // 引入初始化scss，这样可以在全局使用
        additionalData: '@import "@/assets/styles/theme.scss";'
      }
    }
  }
})
```

在组件中使用

```vue
<template>
........
</template>

<style lang="scsss" scoped>
div{
	/*就是如此简单*/
	background-color:$color-green;
}
</style>
```

