import React from 'react';
import Quote from './quote';
import Avatar from './avatar';
import QuoteHeading from './heading';
import { HomepageCopy } from '@/careers/types/copy-types';

import grid from './grid.module.scss';
import figure from './figure.module.scss';
import typographyStyles from '@/careers/styles/modules/typography.module.scss';

type Props = {
  copy: Pick<
    HomepageCopy,
    | 'quote1Image'
    | 'quote2Image'
    | 'quote1'
    | 'quote2'
    | 'quote1Author'
    | 'quote2Author'
    | 'quote1AuthorPosition'
    | 'quote2AuthorPosition'
    | 'subexcerpt'
  >;
};

export default function Quotes({ copy }: Props): JSX.Element {
  const { quote1, quote2, subexcerpt } = copy;

  return (
    <div className={grid.grid}>
      {subexcerpt && <QuoteHeading content={subexcerpt.json} />}
      {quote1 && (
        <div className={grid.item}>
          <figure className={figure.figure}>
            {copy.quote1Image && <Avatar image={copy.quote1Image} />}
            <figcaption>
              <Quote content={quote1.json} />
              <p className={typographyStyles.headingQuinary}>{copy.quote1Author}</p>
              <span className={typographyStyles.paragraphSm}>{copy.quote1AuthorPosition}</span>
            </figcaption>
          </figure>
        </div>
      )}
      {quote2 && (
        <div className={grid.item}>
          <figure className={figure.figure}>
            {copy.quote2Image && <Avatar image={copy.quote2Image} />}
            <figcaption>
              <Quote content={quote2.json} />
              <p className={typographyStyles.headingQuinary}>{copy.quote2Author}</p>
              <span className={typographyStyles.paragraphSm}>{copy.quote2AuthorPosition}</span>
            </figcaption>
          </figure>
        </div>
      )}
    </div>
  );
}
