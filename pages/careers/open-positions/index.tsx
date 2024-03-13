import { GetStaticProps } from 'next';
import OpenPositions, { getStaticProps as getStaticPropsDynamic } from './[locationKey]';

export const getStaticProps: GetStaticProps = async (ctx) => {
  return getStaticPropsDynamic({ ...ctx, params: { locationKey: null } });
};

export default OpenPositions;
