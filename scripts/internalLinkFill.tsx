import Link from 'next/link';
import { getPathsWithID } from '@/queries/getPaths';
import ReactDOMServer from 'react-dom/server';

// Interfaces
import { Document } from '@contentful/rich-text-types';

export const internalLinkParse = async (itemToParse: string, locale: string, originalJSON: Document): Promise<string> => {
  const paths = await getPathsWithID(locale);
  let content = itemToParse;
  let times = itemToParse.split('entry-hyperlink').length - 1;

  do {
    const findIndex = content.indexOf('<span>type: entry-hyperlink id: ');
    const findEndIndex = content.indexOf('</span>', findIndex);
    const secondSlice = content.slice(findIndex, findEndIndex);
    const findId = secondSlice.indexOf('id: ');
    const id = secondSlice.slice(findId + 4);
    const sliceToReplace = content.slice(findIndex, findEndIndex + 7);
    let path: string;

    // get Text to show value
    const entryLinkIndex = originalJSON.content.findIndex((item) => item.content.find((subItem) => subItem.nodeType === 'entry-hyperlink'));
    const entryLink: any = entryLinkIndex >= 0 && originalJSON.content[entryLinkIndex]?.content.find((item) => item.nodeType === 'entry-hyperlink');
    const linkText: string = entryLink?.content[0].value;

    // Parse link
    paths.map((item) => {
      const slug = item.params.slug[item.params.slug.length - 1] || null;
      if (item.id === id) {
        path = ReactDOMServer.renderToString(
          <Link passHref prefetch={false} href={`${item.params.slug.join('/')}`} locale={locale !== 'en' && locale}>
            {linkText ? linkText : slug}
          </Link>
        );
      }
    });

    if (path) {
      content = content.replace(sliceToReplace, path);
    }
    times = times - 1;
  } while (times > 0);

  return content;
};
