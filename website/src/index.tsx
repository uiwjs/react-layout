import { createRoot } from 'react-dom/client';
import MarkdownPreviewExample from '@uiw/react-markdown-preview-example';
import data from '@uiw/react-layout/README.md';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <MarkdownPreviewExample
    source={data.source}
    components={data.components}
    data={data.data}
    title="React Layout"
    description="Layout component for React. Handling the overall layout of a page."
    version={`v${VERSION}`}
  >
    <MarkdownPreviewExample.Github href="https://github.com/uiwjs/react-layout" />
  </MarkdownPreviewExample>,
);
