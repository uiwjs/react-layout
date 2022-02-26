"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[270],{7270:function(e,t,n){n.r(t),t.default="Layout\n===\n\n[![NPM Downloads](https://img.shields.io/npm/dm/@uiw/react-layout.svg?style=flat)](https://www.npmjs.com/package/@uiw/react-layout)\n[![Build & Deploy](https://github.com/uiwjs/react-layout/actions/workflows/ci.yml/badge.svg)](https://github.com/uiwjs/react-layout/actions/workflows/ci.yml)\n[![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-layout/file/README.md)\n[![npm version](https://img.shields.io/npm/v/@uiw/react-layout.svg)](https://www.npmjs.com/package/@uiw/react-layout)\n[![Coverage Status](https://uiwjs.github.io/react-layout/badges.svg)](https://uiwjs.github.io/react-layout/coverage/lcov-report/)\n\nHandling the overall layout of a page.\n\n> \u26a0\ufe0f Note: Implemented with flex layout, please pay attention to [browser compatibility](http://caniuse.com/#search=flex) issues.\n\x3c!--rehype:style=border-left: 8px solid #ffe564;background-color: #ffe56440;padding: 12px 16px;--\x3e\n\n\x3c!--rehype--\x3e\n```jsx\nimport { Layout } from 'uiw';\n// or\nimport Layout from '@uiw/react-layout';\nconst { Header, Footer, Sider, Content } = Layout;\n```\n\n## Basic Usage\n\n\x3c!--rehype:bgWhite=true&codeSandbox=true&codePen=true&noScroll=true--\x3e\n```jsx\nimport React from 'react';\nimport ReactDOM from 'react-dom';\nimport Layout from '@uiw/react-layout';\nconst { Header, Footer, Sider, Content } = Layout;\n\nconst stylHeader = { color: '#fff' }\nconst stylSider = { background: '#484a4e', color: '#fff', lineHeight: `120px`, textAlign: 'center' }\nconst stylConten = { textAlign: 'center', background: 'rgba(16, 142, 233, 1)', minHeight: 120, lineHeight: '120px', color: '#fff' }\n\nfunction Demo() {\n  const [collapsed, setCollapsed] = React.useState(false)\n  return (\n    <div>\n      <Layout style={{ marginBottom: 20 }}>\n        <Header style={stylHeader}>Header</Header>\n        <Layout>\n          <Sider style={stylSider}>Sider</Sider>\n          <Content style={stylConten}>Content</Content>\n        </Layout>\n        <Footer>Footer</Footer>\n      </Layout>\n\n      <Layout>\n        <Header style={stylHeader}>Header</Header>\n        <Layout>\n          <Content style={stylConten}>Content</Content>\n          <Sider style={stylSider}>Sider</Sider>\n        </Layout>\n        <Footer>Footer</Footer>\n      </Layout>\n    </div>\n  );\n}\n\nReactDOM.render(<Demo />, _mount_);\n```\n\n## Layout top-middle-bottom\n\n\x3c!--rehype:bgWhite=true&codeSandbox=true&codePen=true&noScroll=true--\x3e\n```jsx\nimport React from 'react';\nimport ReactDOM from 'react-dom';\nimport Layout from '@uiw/react-layout';\nconst { Header, Footer, Sider, Content } = Layout;\n\nconst stylHeader = { color: '#fff' }\nconst stylConten = { textAlign: 'center', background: 'rgba(16, 142, 233, 1)', minHeight: 120, lineHeight: '120px', color: '#fff' }\n\nfunction Demo() {\n  const [collapsed, setCollapsed] = React.useState(false)\n  return (\n    <Layout style={{ marginBottom: 20 }}>\n      <Header style={stylHeader}>Header</Header>\n      <Content style={stylConten}>Content</Content>\n      <Footer>Footer</Footer>\n    </Layout>\n  );\n}\n\nReactDOM.render(<Demo />, _mount_);\n```\n\n## Layout left-right\n\n\x3c!--rehype:bgWhite=true&codeSandbox=true&codePen=true&noScroll=true--\x3e\n```jsx\nimport React from 'react';\nimport ReactDOM from 'react-dom';\nimport Layout from '@uiw/react-layout';\nconst { Header, Footer, Sider, Content } = Layout;\n\nconst stylHeader = { color: '#fff' }\nconst stylSider = { background: '#484a4e', color: '#fff', lineHeight: `120px`, textAlign: 'center' }\nconst stylConten = { textAlign: 'center', background: 'rgba(16, 142, 233, 1)', minHeight: 120, lineHeight: '120px', color: '#fff' }\n\nfunction Demo() {\n  const [collapsed, setCollapsed] = React.useState(false)\n  return (\n    <Layout style={{ marginBottom: 20 }}>\n      <Sider collapsed={collapsed} style={stylSider}>Sider</Sider>\n      <Layout>\n        <Header style={stylHeader}>\n          <button onClick={() => setCollapsed(!collapsed)}>{collapsed ? '>>' : '<<'}</button>\n        </Header>\n        <Content style={stylConten}>Content</Content>\n        <Footer>Footer</Footer>\n      </Layout>\n    </Layout>\n  );\n}\n\nReactDOM.render(<Demo />, _mount_);\n```\n\n## Layout\n\nThe layout wrapper, in which `Header` `Sider` `Content` `Footer` or `Layout` itself can be nested, and can be placed in any parent container.\n\n- `Header`: The top layout with the default style, in which any element can be nested, and must be placed in `Layout`.\n- `Sider`: The sidebar with default style and basic functions, in which any element can be nested, and must be placed in `Layout`.\n- `Content`: The content layout with the default style, in which any element can be nested, and must be placed in `Layout`.\n- `Footer`: The bottom layout with the default style, in which any element can be nested, and must be placed in `Layout`.\n\n| Property | Description | Type | Default |\n|--------- |-------- |--------- |-------- |\n| className | Container className | string | - |\n| style | To customize the styles | CSSProperties | - |\n| theme | Color theme of the sidebar | `light`\u3001`dark` | `dark` |\n| hasSider | hasSider\tWhether contain Sider in children, don't have to assign it normally. Useful in ssr avoid style flickering | boolean | - |\n\n## Layout.Sider\n\n| Property | Description | Type | Default |\n|--------- |-------- |--------- |-------- |\n| className | Container className | string | - |\n| style | To customize the styles | CSSProperties | - |\n| collapsed | To set the current status | boolean | - |\n| collapsedWidth | Width of the collapsed sidebar, by setting to 0 a special trigger will appear | boolean | `80` |\n| width | Width of the sidebar | number/string | 200 |\n\n### License\n\nLicensed under the MIT License.\n"}}]);
//# sourceMappingURL=270.b731c3f3.chunk.js.map