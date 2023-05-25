<!--rehype:ignore:start-->
Layout
===
<!--rehype:ignore:end-->

[![NPM Downloads](https://img.shields.io/npm/dm/@uiw/react-layout.svg?style=flat)](https://www.npmjs.com/package/@uiw/react-layout)
[![Build & Deploy](https://github.com/uiwjs/react-layout/actions/workflows/ci.yml/badge.svg)](https://github.com/uiwjs/react-layout/actions/workflows/ci.yml)
[![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-layout/file/README.md)
[![npm version](https://img.shields.io/npm/v/@uiw/react-layout.svg)](https://www.npmjs.com/package/@uiw/react-layout)
[![Coverage Status](https://uiwjs.github.io/react-layout/badges.svg)](https://uiwjs.github.io/react-layout/coverage/lcov-report/)
[![Open in Gitpod](https://shields.io/badge/Open%20in-Gitpod-green?logo=Gitpod)](https://gitpod.io/#https://github.com/uiwjs/react-layout)

Handling the overall layout of a page.

> ⚠️ Note: Implemented with flex layout, please pay attention to [browser compatibility](http://caniuse.com/#search=flex) issues.
<!--rehype:style=border-left: 8px solid #ffe564;background-color: #ffe56440;padding: 12px 16px;-->

<!--rehype-->
```jsx
import { Layout } from 'uiw';
// or
import Layout from '@uiw/react-layout';
const { Header, Footer, Sider, Content } = Layout;
// or
import Layout, { LayoutHeader, LayoutContent, LayoutSider, LayoutFooter } from '@uiw/react-layout';

Layout.Header === LayoutHeader
Layout.Content === LayoutContent
Layout.Sider === LayoutSider
Layout.Footer === LayoutFooter
```

## Basic Usage

```jsx mdx:preview
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

## Layout top-middle-bottom

```jsx mdx:preview
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

## Layout left-right

```jsx mdx:preview
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

The layout wrapper, in which `Header` `Sider` `Content` `Footer` or `Layout` itself can be nested, and can be placed in any parent container.

- `Header`: The top layout with the default style, in which any element can be nested, and must be placed in `Layout`.
- `Sider`: The sidebar with default style and basic functions, in which any element can be nested, and must be placed in `Layout`.
- `Content`: The content layout with the default style, in which any element can be nested, and must be placed in `Layout`.
- `Footer`: The bottom layout with the default style, in which any element can be nested, and must be placed in `Layout`.

| Property | Description | Type | Default |
|--------- |-------- |--------- |-------- |
| className | Container className | string | - |
| style | To customize the styles | CSSProperties | - |
| hasSider | hasSider	Whether contain Sider in children, don't have to assign it normally. Useful in ssr avoid style flickering | boolean | - |
<!-- | theme | Color theme of the sidebar | `light`、`dark` | `dark` | -->

## Header

```ts
import Layout, { LayoutHeader } from '@uiw/react-layout';
Layout.Header === LayoutHeader
```

```ts
import React from 'react';
export interface LayoutHeaderProps extends React.HTMLAttributes<HTMLElement> {
  prefixCls?: string;
  children?: React.ReactNode;
}
export declare const LayoutHeader: React.ForwardRefExoticComponent<LayoutHeaderProps & React.RefAttributes<HTMLElement>>;
```

## Content

```ts
import Layout, { LayoutContent } from '@uiw/react-layout';
Layout.Content === LayoutContent
```

```ts
import React from 'react';
export interface LayoutContentProps extends React.HTMLAttributes<HTMLElement> {
  prefixCls?: string;
  children?: React.ReactNode;
}
export declare const LayoutContent: React.ForwardRefExoticComponent<LayoutContentProps & React.RefAttributes<HTMLElement>>;
```

## Footer

```ts
import Layout, { LayoutFooter } from '@uiw/react-layout';
Layout.Footer === LayoutFooter
```

```ts
import React from 'react';
export interface LayoutFooterProps extends React.HTMLAttributes<HTMLElement> {
  prefixCls?: string;
  children?: React.ReactNode;
}
export declare const LayoutFooter: React.ForwardRefExoticComponent<LayoutFooterProps & React.RefAttributes<HTMLElement>>;
```

## Sider

| Property | Description | Type | Default |
|--------- |-------- |--------- |-------- |
| className | Container className | string | - |
| style | To customize the styles | CSSProperties | - |
| collapsed | To set the current status | boolean | - |
| collapsedWidth | Width of the collapsed sidebar, by setting to 0 a special trigger will appear | boolean | `80` |
| width | Width of the sidebar | number/string | 200 |

```ts
import Layout, { LayoutSider } from '@uiw/react-layout';
Layout.Sider === LayoutSider
```

```ts
import React from 'react';
export declare function randomid(): string;
export interface LayoutSiderProps extends React.HTMLAttributes<HTMLElement> {
  prefixCls?: string;
  children?: React.ReactNode;
  /** Width of the sidebar */
  width?: number | string;
  /** Width of the collapsed sidebar, by setting to 0 a special trigger will appear */
  collapsedWidth?: number;
  /** To set the current status */
  collapsed?: boolean;
}
export declare const LayoutSider: React.ForwardRefExoticComponent<LayoutSiderProps & React.RefAttributes<HTMLDivElement>>;
```

## Contributors

As always, thanks to our amazing contributors!

<a href="https://github.com/uiwjs/react-layout/graphs/contributors">
  <img src="https://uiwjs.github.io/react-layout/CONTRIBUTORS.svg" />
</a>

Made with [github-action-contributors](https://github.com/jaywcjlove/github-action-contributors).

### License

Licensed under the MIT License.
