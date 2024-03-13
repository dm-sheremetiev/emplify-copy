import type { GetStaticProps, GetStaticPropsContext, GetStaticPropsResult } from 'next';
import type { ParsedUrlQuery } from 'querystring';
import { locales, revalidateTime } from '../config';
import enLocale from '@/careers/locales/en.json';
import frLocale from '@/careers/locales/fr.json';
import { NotFoundError } from './errors';

export const revalidate = 900

type Dictionary = typeof enLocale;
type CommonProps = {
  lngDict: Dictionary | Record<string, unknown>;
};

const allowedLocales = new Set(locales);

const dictionaries = {
  en: enLocale,
  fr: frLocale
};

type CareersGSSP = <P, Q extends ParsedUrlQuery>(
  gssp: GetStaticProps<P, Q>
) => (context: GetStaticPropsContext<Q>) => Promise<GetStaticPropsResult<P & CommonProps>>;
export const careersGSSP: CareersGSSP = (getStaticProps) => async (context) => {
  if (!allowedLocales.has(context.locale)) {
    return {
      notFound: true
    };
  }
  try {
    const result = await getStaticProps(context);
    const lngDict = dictionaries[context.locale] || {};

    if ('props' in result) {
      return {
        revalidate: 900,
        props: {
          lngDict,
          ...result.props
        }
      };
    }
    return result;
  } catch (err) {
    if (err instanceof NotFoundError) {
      return {
        revalidate: revalidateTime,
        notFound: true
      };
    }
    throw err;
  }
};
