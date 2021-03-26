## React 后台管理系统

> [项目预览地址](http://my-admin.lalapkp.cn/)

> [fork](https://github.com/melunar/my-react-admin.git)

基于 `React` 生态系统搭建的后台管理系统模板

如果你想了解项目更为详细的信息，推荐阅读以下文章

- [如何打造 react 后台管理系统](https://github.com/ltadpoles/web-document/blob/master/React/%E5%BF%AB%E9%80%9F%E6%89%93%E9%80%A0react%E5%90%8E%E5%8F%B0%E7%AE%A1%E7%90%86%E7%B3%BB%E7%BB%9F.md)

以下为项目基本信息↓

### 技术栈

`React@16.10.1 + React-Router@5.1.1 + Redux@4.0.4 + Antd@3.23.5 + Axios@0.19.0`

> `Create React App`    脚手架工具快速搭建项目结构

> `react-loadable@5.5.0`    路由懒加载

> `react-redux@7.1.1`     配合 `Redux` 更舒心

> `animate.css@3.7.2`     页面动画展示

> `braft-editor@2.3.8`    富文本插件

> `echarts@4.4.0`   数据可视化

> `nprogress@0.2.0`     顶部加载条

> `screenfull@5.0.0`    全屏插件

> `prettier@1.18.2`    代码风格统一

> `typescript`    代码增强提示

### 基本功能

- [x] 路由懒加载
- [x] 面包屑导航
- [x] 常用 UI 展示
- [x] echarts 全屏展示
- [x] 登陆/注销功能
- [x] axios 封装
- [x] 简单权限管理

### 项目结构

```
├── public                   # 不参与编译的资源文件
├── src                      # 主程序目录
│   ├── api                     # axios 封装
│   ├── assets                  # 资源文件
│   │   ├── font                    # 字体文件
│   │   └── images                  # 图片资源
│   ├── components              # 全局公共组件
│   │   ├── CustomBreadcrumb        # 面包屑导航
│   │   └── CustomMenu              # menu 菜单
│   ├── contatiners             # 页面结构组件
│   ├── routes                  # 路由目录
│   ├── store                   # redux 配置
│   ├── style                   # 样式目录
│   ├── utils                   # 工具类
│   ├── views                   # UI 页面
│   ├── APP.tsx                  # App.tsx
│   └── index.js                # index.js
├── .prettierrc.js           # 代码规范
├── config-overrides.js      # antd 样式按需加载
```

### 使用方法

```npm
git clone https://github.com/melunar/my-react-admin.git 

cd my-react-admin

// 子模块 初始化
git submodule init

// 子模块 更新
git submodule update --remote

// 子模块 提交
// 可进入对应文件 创建分支正常提交即可

// 安装依赖
yarn

// 启动
yarn start

// 打包
yarn build

```