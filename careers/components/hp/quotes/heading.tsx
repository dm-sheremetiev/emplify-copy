import React from 'react';
import Link from 'next/link';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import headingStyles from './heading.module.scss';
import typographyStyles from '@/careers/styles/modules/typography.module.scss';

export default function QuoteHeading({ content }): JSX.Element {
  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => {
        return <h3 className={`${typographyStyles.headingTertiary} ${headingStyles.heading}`}>{children}</h3>;
      },
      [INLINES.HYPERLINK]: (node, children) => {
        return (
          <Link prefetch={false} href={node.data.uri}>
            {children}
          </Link>
        );
      }
    }
  };

  return <>{documentToReactComponents(content, options)}</>;
}
