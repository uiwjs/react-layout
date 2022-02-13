import React from 'react';
import GitHubCorners from '@uiw/react-github-corners';
import Layout from '@uiw/react-layout';
import Markdown from './Markdown';
import styles from './App.module.less';
import logo from './logo.svg';
import pkg from '@uiw/react-layout/package.json';

export default function App() {
  return (
    <div className={styles.app}>
      <GitHubCorners fixed target="__blank" zIndex={10} href="https://github.com/uiwjs/react-layout" />
      <header className={styles.header}>
        <img src={logo} className={styles.logo} alt="react logo" />
        <h1>
          React Layout <sup>{pkg.version}</sup>
        </h1>
        <p className={styles.info}>{pkg.description}</p>
      </header>
      <Markdown
        className={styles.markdown}
        path="https://github.com/uiwjs/uiw/tree/master/packages/react-alert/README.md"
        dependencies={{ Layout }}
        renderPage={async () => {
          const md = await import('@uiw/react-layout/README.md');
          return md.default;
        }}
      />
    </div>
  );
}