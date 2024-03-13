import { Fragment } from 'react';
import { ComponentShow } from './componentShow';
import { contentIClean } from '@/interfaces/blocks';
import { pageData } from '@/interfaces/queries';

export const ContentBlocks = (props: { content: contentIClean[]; page?: pageData }): JSX.Element => {
  const { content } = props;
if (content.length === 0) return null;
  
  return (
    <>
      {content.map((block, index) => (
        <Fragment key={index}>{ComponentShow(block, props?.page)}</Fragment>
      ))}
    </>
  );
};
