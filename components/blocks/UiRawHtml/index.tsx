import { useState, useEffect } from 'react';
import { UiRawHtml } from '@/interfaces/blocks';

export function UiRawHtmlComponent(props: { block: UiRawHtml }): JSX.Element {
  const { block } = props;
  const [text, setText] = useState(block.rawHtml);

  useEffect(() => {
    setText(block.rawHtml);
  }, [block.rawHtml]);

  return <div id={block?.anchorId} dangerouslySetInnerHTML={{ __html: text }} />;
}
