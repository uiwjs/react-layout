import React from "react";
import GitHubCorners from "@uiw/react-github-corners";
import MarkdownPreview from "@uiw/react-markdown-preview";
import styles from "./App.module.less";
import logo from "./logo.svg";
import MDStr from "@uiw/react-monorepo-template/README.md";

export default function App() {
  // @ts-ignore
  const version = VERSION;
  return (
    <div className={styles.app}>
      <GitHubCorners
        fixed
        target="__blank"
        zIndex={10}
        href="https://github.com/uiwjs/react-monorepo-template"
      />
      <header className={styles.header}>
        <img src={logo} className={styles.logo} alt="react logo" />
        <h1>React Monorepo Template {version}</h1>
        <p className={styles.info}>
          Simple React package development project example template.
        </p>
      </header>
      <MarkdownPreview source={MDStr} className={styles.markdown} />
    </div>
  );
}
