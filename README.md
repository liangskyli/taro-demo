# taro-demo

基于 Taro 的 小程序 脚手架(react版)

> Taro-cli version: Taro v3.6.35

## 主要功能

- Typescript
- mock服务
- 基于 redux 的数据流方案
- NutUI-React 组件库

## 预览项目

```bash
# 安装依赖
pnpm i

# 小程序 预览模式 => 用 小程序开发工具 打开 ./dist 文件夹 即可预览
pnpm dev:weapp
```

## mock服务
- 开发环境默认启动mock服务
  - mock服务端口9001，在这里修改：config/mock-server.ts

## 打包项目

```bash
# 打包完成的小程序 文件在 ./dist 文件夹内
pnpm build:weapp
```

## 目录结构

- 目录和文件名都用小写英文，单词间用中横线分隔)

```
    ├── .husky                          // 提交钩子配置
    ├── __tests__                       // 单元测试
    ├── dist/                           // 微信小程序编译结果目录
    ├── config/                         // Taro 配置目录
    │   ├── dev.ts                      // 开发时配置
    │   ├── index.ts                    // 默认配置
    │   ├── mock-server.ts              // mock服务，端口配置
    │   └── prod.ts                     // 打包时配置
    ├── mock/                           // mock目录
    ├── src/                            // 源码目录
    │   ├── assets/                     // 资源文件
    │   ├── components/                 // 公共组件
    │   ├── config/                     // 配置文件
    │   │   └── index.ts
    │   ├── pages/                      // 页面文件目录
    │   │   └── index
    │   │       ├── components/         // 页面组件
    │   │       ├── index.tsx           // 页面逻辑
    │   │       ├── index.config.ts     // 页面配置
    │   │       └── index.module.less   // 页面样式
    │   ├── services/                   // 全局模块请求
    │   ├── store/                      // redux 存储
    │   ├── style/                      // 全局样式通用函数功能集合
    │   ├── subpackages/                // 分包页面文件目录  
    │   │   ├── package1/               // 分包1
    │   │   │   ├── components/         // 分包公共组件   
    │   │   │   └── pages/              // 分包页面文件目录  
    │   ├── utils/                      // 常用工具类
    │   ├── app.less                    // 全局样式
    │   ├── app.tsx                     // 入口文件
    │   └── index.html    
    ├── types/                          // 类型目录
    │   └── global.d.ts                 // 全局类型配置    
    ├── .commitlintrc.js                // 提交内容格式配置
    ├── .editorconfig                   // 编辑器代码风格配置
    ├── .eslintignore                   // eslint忽略文件
    ├── .eslintrc.js                    // eslint规则
    ├── .gitignore                      // git忽略文件
    ├── .npmrc                          // npm配置文件
    ├── .prettierignore                 // 代码风格配置忽略文件
    ├── .prettierrc.js                  // 代码风格配置文件
    ├── .stylelintignore                // 样式风格配置忽略文件
    ├── .stylelintrc.js                 // 样式风格配置文件
    ├── babel.config.js                 // babel配置文件
    ├── package.json                    // 项目依赖
    ├── pnpm-lock.yaml                  // pnpm-lock.yaml 锁定文件 
    ├── project.config.json             // 微信小程序项目配置
    ├── project.tt.json                 // 头条小程序项目配置
    ├── README.md
    ├── tsconfig.json                   // typescript配置文件
    ├── vitest.config.ts                // 单元测试配置文件
    └── vitest.setup.ts                 // 单元测试启动setup配置文件
```

## 项目版本升级

```bash
# 1. 更新 Taro CLI 工具:
npm i -g @tarojs/cli@latest

# 2. 更新项目中 Taro 相关的依赖:
taro update project

# 3. 删除原来的node_modules后重新安装依赖(注意):
pnpm i
```

## 已配置的依赖

| 名称                      | 库名称                                                                                     | 用途                                                                                   |
|-------------------------|-----------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------|
| Taro                    | [@tarojs/taro](https://taro-docs.jd.com/docs/)                                          | 基础库                                                                                  |
| taro-hooks              | [taro-hooks](https://next-taro-hooks.pages.dev/site/)                                   | 一款对标 Taro API 开发的 Hooks Library. 覆盖几乎所有 Taro API 以及方法. 并且结合 ahooks 扩展了多端共用的 hooks 库. |
| @reduxjs/toolkit        | [@reduxjs/toolkit](https://redux-toolkit.js.org/)                                       | 基于 redux 的数据流方案                                                                      |
| @nutui/nutui-react-taro | [@nutui/nutui-react-taro](https://nutui.jd.com/taro/react/2x/#/zh-CN/guide/intro-react) | 基于 Taro，使用 React 技术栈开发小程序应用                                                          |


## 开发环境的依赖

| 名称               | 库名称                                                                | 用途             |
|------------------|--------------------------------------------------------------------|----------------|
| Typescript       | [typescript](https://www.typescriptlang.org/docs)                  | JS 超集语言        |
| ESLint           | [eslint](https://eslint.org/docs/user-guide/getting-started)       | 规范检查           |
| stylelint        | [stylelint](https://stylelint.io/)                                 | 规范检查           |
| Prettier         | [prettier](https://prettier.io/docs/en/index.html)                 | 代码格式化          |
| commitlint       | [commitlint](https://github.com/conventional-changelog/commitlint) | Git commit 规范化 |
| @liangskyli/mock | [@liangskyli/mock](https://github.com/liangskyli/mock)             | http mock服务    |
