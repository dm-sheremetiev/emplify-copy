// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from '@sentry/nextjs';
import { BrowserTracing } from '@sentry/tracing';
import { CaptureConsole } from '@sentry/integrations';

const SENTRY_DSN = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN;
const ENVIRONMENT = process.env.SENTRY_ENVIRONMENT || process.env.NEXT_PUBLIC_ENVIRONMENT;

Sentry.init({
  dsn: SENTRY_DSN,

  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  // https://develop.sentry.dev/sdk/performance/
  tracesSampleRate: 0.1,

  environment: ENVIRONMENT === 'dev' ? 'development' : ENVIRONMENT,
  integrations: [
    new BrowserTracing(),
    new CaptureConsole({
      levels: ['error']
    })
  ],

  // Only send errors that come from Emplifi codebase, not 3rd party scripts
  allowUrls: [/https?:\/\/((cdn|www)\.)?emplifi\.io/]
});
