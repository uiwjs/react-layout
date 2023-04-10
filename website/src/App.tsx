import GitHubCorners from '@uiw/react-github-corners';
import MarkdownPreview from '@uiw/react-markdown-preview';
import { getMetaId, isMeta, getURLParameters } from 'markdown-react-code-preview-loader';
import CodeLayout from 'react-code-preview-layout';
import data from '@uiw/react-layout/README.md';
import pkg from '@uiw/react-layout/package.json';
// import Codepen from '@uiw/react-codepen';
import CodeSandbox from '@uiw/react-codesandbox';
import rehypeIgnore from 'rehype-ignore';
import { Fragment } from 'react';
import '@wcj/dark-mode';
import styles from './App.module.less';
import logo from './logo.svg';
import Footer from './Footer';

const Preview = CodeLayout.Preview;
const Code = CodeLayout.Code;
const Toolbar = CodeLayout.Toolbar;

// @ts-ignore
const version = VERSION;

export default function App() {
  return (
    <div className={styles.app}>
      <dark-mode permanent></dark-mode>
      <GitHubCorners fixed target="__blank" zIndex={10} href="https://github.com/uiwjs/react-layout" />
      <header className={styles.header}>
        <img src={logo} className={styles.logo} alt="react logo" />
        <h1>
          React Layout <sup>{pkg.version}</sup>
        </h1>
        <p className={styles.info}>{pkg.description}</p>
      </header>
      <MarkdownPreview
        style={{ maxWidth: 750, margin: '0 auto', paddingTop: 21 }}
        disableCopy={true}
        source={data.source}
        rehypePlugins={[rehypeIgnore]}
        components={{
          code: ({ inline, node, ...props }) => {
            const { 'data-meta': meta, ...rest } = props as any;
            if (inline || !isMeta(meta)) {
              return <code {...props} />;
            }
            const line = node.position?.start.line;
            const metaId = getMetaId(meta) || String(line);
            const Child = data.components[`${metaId}`];
            if (metaId && typeof Child === 'function') {
              const code = data.data[metaId].value || '';
              const param = getURLParameters(meta);

              // const codePenOption = {
              //   title: `@uiw/react-layout${version} - demo`,
              //   // includeModule: ['@uiw/react-layout'],
              //   js: (code || '').replace('_mount_', 'document.getElementById("container")'),
              //   html: '<div id="container" style="padding: 24px"></div>',
              //   css_external: `https://unpkg.com/@uiw/react-layout@${version}/dist/layout.min.css`,
              //   js_external: `https://unpkg.com/react@17.x/umd/react.development.js;https://unpkg.com/react-dom@17.x/umd/react-dom.development.js;https://unpkg.com/classnames@2.2.6/index.js;https://unpkg.com/@uiw/react-layout@${version}/dist/layout.min.js;https://unpkg.com/@uiw/codepen-require-polyfill@1.1.3/index.js`,
              // };
              const codeSandboxOption = {
                files: {
                  'sandbox.config.json': {
                    content: `{
                      "template": "node",
                      "container": {
                        "startScript": "start",
                        "node": "14"
                      }
                    }`,
                  },
                  'public/index.html': {
                    content: `<div id="container"></div>`,
                  },
                  'src/app.js': {
                    content: code,
                  },
                  'src/index.js': {
                    content: `import React from 'react';\nimport ReactDOM from 'react-dom';\nimport App from './app';\nReactDOM.render(<App />, document.getElementById('container'));`,
                  },
                  '.kktrc.js': {
                    content: `import lessModules from "@kkt/less-modules";\nexport default (conf, env, options) => {\n  conf = lessModules(conf, env, options);\n  return conf;\n};`,
                  },
                  'package.json': {
                    content: {
                      name: 'uiw-demo',
                      description: `uiw v${version} - demo`,
                      dependencies: {
                        react: '^17.0.2',
                        'react-dom': '^17.0.2',
                        uiw: 'latest',
                      },
                      devDependencies: {
                        '@kkt/less-modules': '~7.1.1',
                        kkt: '~7.1.5',
                      },
                      license: 'MIT',
                      scripts: {
                        start: 'kkt start',
                        build: 'kkt build',
                      },
                      browserslist: ['>0.2%', 'not dead', 'not ie <= 11', 'not op_mini all'],
                    },
                  },
                },
              };
              const extra = (
                <Fragment>
                  {/* <Codepen {...codePenOption}>
                    <svg viewBox="0 0 1024 1024" width="18" height="18" fill="currentColor">
                      <path
                        d="M123.428571 668l344.571429 229.714286v-205.142857L277.142857 565.142857z m-35.428571-82.285714l110.285714-73.714286-110.285714-73.714286v147.428572z m468 312l344.571429-229.714286-153.714286-102.857143-190.857143 127.428572v205.142857z m-44-281.714286l155.428571-104-155.428571-104-155.428571 104zM277.142857 458.857143l190.857143-127.428572V126.285714L123.428571 356z m548.571429 53.142857l110.285714 73.714286V438.285714z m-78.857143-53.142857l153.714286-102.857143-344.571429-229.714286v205.142857z m277.142857-102.857143v312q0 23.428571-19.428571 36.571429l-468 312q-12 7.428571-24.571429 7.428571t-24.571429-7.428571L19.428571 704.571429q-19.428571-13.142857-19.428571-36.571429V356q0-23.428571 19.428571-36.571429L487.428571 7.428571q12-7.428571 24.571429-7.428571t24.571429 7.428571l468 312q19.428571 13.142857 19.428571 36.571429z"
                        p-id="2071"
                      />
                    </svg>
                  </Codepen> */}
                  <CodeSandbox {...codeSandboxOption}>Open in CodeSandbox</CodeSandbox>
                </Fragment>
              );
              return (
                <CodeLayout disableCheckered style={{ marginBottom: 18 }}>
                  <Preview>
                    <Child />
                  </Preview>
                  <Toolbar extra={extra} text={code}>
                    {param.title || 'Example'}
                  </Toolbar>
                  <Code>
                    <pre {...rest} />
                  </Code>
                </CodeLayout>
              );
            }
            return <code {...rest} />;
          },
        }}
      />
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
}
