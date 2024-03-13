import * as Sentry from '@sentry/nextjs';
import { NextPageContext } from 'next';
import NextErrorComponent from 'next/error';

function Error(props: { statusCode: number }): JSX.Element {
  return <NextErrorComponent statusCode={props.statusCode} />;
}

Error.getInitialProps = async (contextData: NextPageContext) => {
  // In case this is running in a serverless function, await this in order to give Sentry
  // time to send the error before the lambda exits
  await Sentry.captureUnderscoreErrorException(contextData);

  let location: string | null = '';
  const { err, res } = contextData;
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;

  if (statusCode === 404) {
    location = '/404';
    res.writeHead(404, { Location: location });
    res.end();
  } else {
    location = '/500';
    res.writeHead(307, { Location: location });
    res.end();
  }

  return NextErrorComponent.getInitialProps(contextData);
};

export default Error;
