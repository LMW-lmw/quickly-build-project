# Quickly-build-project

## 目前暂未发布到 npm 目前仅供本地下载使用

## 说明

为了减少手动创建项目并且频繁配置路由信息和封装 axios 的频率，因此创建此工具。

本命令行工具目前只能创建 vue3 项目，项目中自动配置了 vue-router、vuex、less 以及封装了 axios，命令行工具会帮助你自动注册路由以及自动在 store 中导入 vuex 的模块

### 本地初始化

```
npm install
```

```
npm link
```

完成上面两步操作后就可以开始使用命令行工具'lmw'啦

### 1、创建项目

```
lmw create demo
```

### 2、vue 项目中创建组件

```
lmw addcpn componentsname -d path(创建组件的路径，如果不加-d + 路径，则默认的路径为src/components)
```

### 3、创建页面

```
lmw addpage pagename -d path(和创建组件的一样，不加-d 则默认路径为 src/views/pagename)
```

使用默认的路径创建页面后会自动注册路由无需手动操作

### 4、创建 vuex 的 modules

```
lmw addstore storename -d path(和创建组件的一样，不加-d 则默认路径为 src/store/modules/storename)
```

使用默认的路径创建 vuex 的 modules 后会自动添加到 vuex 的 modules 中，无需再手动导入添加
