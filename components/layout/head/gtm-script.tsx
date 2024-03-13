import Script from 'next/script';

const GTM_SCRIPT_URL = 'https://www.googletagmanager.com/gtm.js?id=GTM-54CCCT2';
const GTM_AUTH_TOKEN = process.env.GTM_AUTH_TOKEN
const GTM_PREVIEW_ENV = process.env.GTM_PREVIEW_ENV

const GTM_SCRIPT_CONTENTS = {
  __html: `(function(w,d,s,l){w[l]=w[l]||[];w[l].push({'gtm.start':
	new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
	j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
	'${GTM_SCRIPT_URL}'+dl;f.parentNode.insertBefore(j,f);
	})(window,document,'script','dataLayer');`,
};

const GTM_SCRIPT_CONTENTS_DEV = {
  __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
	new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
	j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
	'${GTM_SCRIPT_URL}'+dl+'&gtm_auth=${GTM_AUTH_TOKEN}&gtm_preview=${GTM_PREVIEW_ENV}';f.parentNode.insertBefore(j,f);
	})(window,document,'script','dataLayer');`,
}

export default function GTMScript(): JSX.Element {
  return (
    <>
      <link rel="preload" as="script" href={GTM_SCRIPT_URL} />
      {/* Delay loading of GTM until after page has fully loaded. Because it pulls in so many other scripts, it greatly affects performance */}
      <Script id="GTM_SCRIPT" strategy="lazyOnload" dangerouslySetInnerHTML={process.env.NEXT_PUBLIC_ENVIRONMENT === 'dev' ? GTM_SCRIPT_CONTENTS_DEV : GTM_SCRIPT_CONTENTS} />
    </>
  );
}
