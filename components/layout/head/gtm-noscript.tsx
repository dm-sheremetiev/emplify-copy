const GTM_NOSCRIPT_CONTENTS = {
  __html: `<iframe src='https://www.googletagmanager.com/ns.html?id=GTM-54CCCT2' height='0' width='0' style='display:none;visibility:hidden'></iframe>`,
};

export default function GTMNoScript(): JSX.Element {
  return <noscript dangerouslySetInnerHTML={GTM_NOSCRIPT_CONTENTS} />;
}
