import React, { useMemo } from 'react';
import { Block, BLOCKS, Document, Inline } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import styles from './rich-text.module.scss';
import typographyStyles from '../../styles/modules/typography.module.scss';

type Props = {
  content: Document;
  // !TO-DO: https://app.asana.com/0/1199875933539821/1200048296272174/f
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  links?: any;
};

export default function RichText({ content, links }: Props): JSX.Element {
  const getAssetId = useMemo(() => {
    return new Map(links?.assets?.block?.map((asset) => [asset.sys.id, asset]));
  }, [links]);

  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => {
        return <p className={typographyStyles.paragraph}>{children}</p>;
      },
      [BLOCKS.HEADING_2]: (node, children) => {
        return <h2 className={`${typographyStyles.heading} ${typographyStyles.headingTertiary}`}>{children}</h2>;
      },
      [BLOCKS.UL_LIST]: (node, children) => {
        return (
          <ul className={styles.list}>
            <li>{children}</li>
          </ul>
        );
      },
      [BLOCKS.EMBEDDED_ASSET]: (node: Inline | Block) => {
        const targetAsset = getAssetId.get(node.data.target.sys.id);
        if (!targetAsset) {
          return null;
        }

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const { url, height, width, description } = targetAsset;

        return <img src={url} alt={description ?? ''} width={width} height={height} />;
      }
    }
  };

  return <>{documentToReactComponents(content, options)}</>;
}
