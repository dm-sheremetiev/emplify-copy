import { useState } from 'react';
import Link from 'next/link';
import { getPathsWithID } from '@/queries/getPaths';
import ReactDOMServer from 'react-dom/server';

// Interfaces
import { Document } from '@contentful/rich-text-types';

export const useInternalLinkParse = async (itemToParse: string, locale: string, originalJSON: Document): Promise<string> => {
  const [text, setText] = useState(itemToParse);
  const paths = getPathsWithID(locale);

  const findIndex = text.indexOf('<span>type: entry-hyperlink id: ');

  const findEndIndex = text.indexOf('</span>', findIndex);
  const secondSlice = text.slice(findIndex, findEndIndex);
  const findId = secondSlice.indexOf('id: ');
  const id = secondSlice.slice(findId + 4);
  const sliceToReplace = text.slice(findIndex, findEndIndex + 7);
  let path: string;

  // get Text to show value

  const entryLinkIndex = originalJSON.content.findIndex((item) => item.content.find((subItem) => subItem.nodeType === 'entry-hyperlink'));

  const entryLink: any = entryLinkIndex >= 0 && originalJSON.content[entryLinkIndex]?.content.find((item) => item.nodeType === 'entry-hyperlink');

  const linkText: string = entryLink?.content[0].value;
  // Parse link

  (await paths).map((item) => {
    const slug = item.params.slug[item.params.slug.length - 1] || null;
    if (item.id === id) {
      path = ReactDOMServer.renderToString(
        <Link prefetch={false} href={`${item.params.slug.join('/')}`} locale={locale !== 'en' && locale}>
          <a>{linkText ? linkText : slug}</a>
        </Link>
      );
    }
  });
  if (path) {
    setText(text.replace(sliceToReplace, path));
  }

  return text;
};
