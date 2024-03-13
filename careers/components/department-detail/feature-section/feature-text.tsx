import React from 'react';
import Link from 'next/link';
import { BLOCKS, Document, INLINES, MARKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import typographyStyles from '@/careers/styles/modules/typography.module.scss';

const renderOptions = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => {
      return <p className={typographyStyles.paragraph}>{children}</p>;
    },
    [BLOCKS.HR]: () => {
      return <br />;
    },
    [INLINES.HYPERLINK]: (node, children) => {
      return (
        <Link prefetch={false} href={node.data.uri}>
          {children}
        </Link>
      );
    },
    [MARKS.BOLD]: (node, children) => {
      return <strong>{children}</strong>;
    }
  }
};

type Props = {
  content:
    | {
        json: Document;
      }
    | undefined;
};

export default function FeatureText({ content }: Props): JSX.Element {
  if (!content || !content.json) return null;
  return <div>{documentToReactComponents(content.json, renderOptions)}</div>;
}
