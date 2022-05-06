Layout 布局
===

[![NPM Downloads](https://img.shields.io/npm/dm/@uiw/react-layout.svg?style=flat)](https://www.npmjs.com/package/@uiw/react-layout)
[![Build & Deploy](https://github.com/uiwjs/react-layout/actions/workflows/ci.yml/badge.svg)](https://github.com/uiwjs/react-layout/actions/workflows/ci.yml)
[![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-layout/file/README.md)
[![npm version](https://img.shields.io/npm/v/@uiw/react-layout.svg)](https://www.npmjs.com/package/@uiw/react-layout)
[![Coverage Status](https://uiwjs.github.io/react-layout/badges.svg)](https://uiwjs.github.io/react-layout/coverage/lcov-report/)
[![Open in Gitpod](https://shields.io/badge/Open%20in-Gitpod-green?logo=Gitpod)](https://gitpod.io/#https://github.com/uiwjs/react-layout)

协助进行页面级整体布局。

> ⚠️ 注意：采用 flex 布局实现，请注意[浏览器兼容性](http://caniuse.com/#search=flex)问题。
<!--rehype:style=border-left: 8px solid #ffe564;background-color: #ffe56440;padding: 12px 16px;-->

<!--rehype-->
```jsx
import { Layout } from 'uiw';
// or
import Layout from '@uiw/react-layout';
const { Header, Footer, Sider, Content } = Layout;
// or
import Layout, { LayoutHeader, LayoutContent, LayoutSider, LayoutFooter } from '@uiw/react-layout';
Layout.Header = LayoutHeader
Layout.Content = LayoutContent
Layout.Sider = LayoutSider
Layout.Footer = LayoutFooter
```

## 基本用法

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true&noScroll=true-->
```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import Layout, { LayoutHeader, LayoutContent, LayoutSider, LayoutFooter } from '@uiw/react-layout';
const { Header, Footer, Sider, Content } = Layout;

const stylHeader = { color: '#fff' }
const stylSider = { background: '#484a4e', color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center' }
const stylConten = { background: '#108ee9', minHeight: 120, display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#fff' }

function Demo() {
  const [collapsed, setCollapsed] = React.useState(false)
  return (
    <div>
      <Layout style={{ marginBottom: 20 }}>
        <Header style={stylHeader}>Header</Header>
        <Layout>
          <Sider style={stylSider}>Sider</Sider>
          <Content style={stylConten}>Content</Content>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>

      <Layout>
        <Header style={stylHeader}>Header</Header>
        <Layout>
          <Content style={stylConten}>Content</Content>
          <Sider style={stylSider}>Sider</Sider>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>

      <Layout>
        <LayoutHeader style={stylHeader}>Header</LayoutHeader>
        <Layout>
          <LayoutContent style={stylConten}>Content</LayoutContent>
          <LayoutSider style={stylSider}>Sider</LayoutSider>
        </Layout>
        <LayoutFooter>Footer</LayoutFooter>
      </Layout>
    </div>
  );
}

export default Demo;
```

## 上中下布局

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true&noScroll=true-->
```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import Layout from '@uiw/react-layout';
const { Header, Footer, Sider, Content } = Layout;

const stylHeader = { color: '#fff' }
const stylConten = { background: '#108ee9', minHeight: 120, display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#fff' }

function Demo() {
  const [collapsed, setCollapsed] = React.useState(false)
  return (
    <Layout style={{ marginBottom: 20 }}>
      <Header style={stylHeader}>Header</Header>
      <Content style={stylConten}>Content</Content>
      <Footer>Footer</Footer>
    </Layout>
  );
}

export default Demo;
```

## 左右布局

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true&noScroll=true-->
```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import Layout from '@uiw/react-layout';
const { Header, Footer, Sider, Content } = Layout;

const stylHeader = { color: '#fff' }
const stylSider = { background: '#484a4e', color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center' }
const stylConten = { background: '#108ee9', minHeight: 120, display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#fff' }

function Demo() {
  const [collapsed, setCollapsed] = React.useState(false)
  return (
    <Layout style={{ marginBottom: 20 }}>
      <Sider collapsed={collapsed} style={stylSider}>Sider</Sider>
      <Layout>
        <Header style={stylHeader}>
          <button onClick={() => setCollapsed(!collapsed)}>{collapsed ? '>>' : '<<'}</button>
        </Header>
        <Content style={stylConten}>Content</Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  );
}

export default Demo;
```

## Layout

布局容器，其下可嵌套 `Header` `Sider` `Content` `Footer` 或 `Layout` 本身，可以放在任何父容器中。

* `Header`：顶部布局，自带默认样式，其下可嵌套任何元素，只能放在 `Layout` 中。
* `Sider`：侧边栏，自带默认样式及基本功能，其下可嵌套任何元素，只能放在 `Layout` 中。
* `Content`：内容部分，自带默认样式，其下可嵌套任何元素，只能放在 `Layout` 中。
* `Footer`：底部布局，自带默认样式，其下可嵌套任何元素，只能放在 `Layout` 中。

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| className | 容器 className | string | - |
| style | 指定样式 | CSSProperties | - |
| hasSider | 表示子元素里有 Sider，一般不用指定。可用于服务端渲染时避免样式闪动 | boolean | - |
<!-- | theme | 主题颜色 | `light`、`dark` | `dark` | -->

## Layout.Sider

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| className | 容器 className | string | - |
| style | 指定样式 | CSSProperties | - |
| collapsed | 当前收起状态 | boolean | - |
| collapsedWidth | 收缩宽度，设置为 `0` | boolean | `80` |
| width | 宽度 | number/string | 200 |

## Contributors

As always, thanks to our amazing contributors!

<a href="https://github.com/jaywcjlove/github-action-contributors/graphs/contributors">
  <img src="https://jaywcjlove.github.io/github-action-contributors/CONTRIBUTORS.svg" />
</a>

Made with [github-action-contributors](https://github.com/jaywcjlove/github-action-contributors).

### License

Licensed under the MIT License.
