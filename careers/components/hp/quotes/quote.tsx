import React from 'react';
import { BLOCKS, Document } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import typographyStyles from '@/careers/styles/modules/typography.module.scss';

type Props = {
  content: Document;
};

export default function Quote({ content }: Props): JSX.Element {
  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => {
        return <q className={typographyStyles.paragraphLg}>{children}</q>;
      }
    }
  };

  return <div>{documentToReactComponents(content, options)}</div>;
}
