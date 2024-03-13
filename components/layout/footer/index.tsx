import Link from 'next/link';
import { siteConfigI } from '@/interfaces/siteConfig';
import { Typography, FooterSocialIcon, Icon, ThreeColumnFooter } from '../../../storybookBuild/index';
import { linkHandler } from '@/components/common/handleLink';
import { Fragment } from 'react';
import { useRouter } from 'next/router';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { renderToStaticMarkup } from 'react-dom/server';
import { BLOCKS } from '@contentful/rich-text-types';
import Image from 'next/legacy/image';
import FooterSimplified from './footer-simplified/footer-simplified';

export function FooterComp(props: { data: siteConfigI; isSimplified }): JSX.Element {
  const { data, isSimplified } = props;
  const router = useRouter();

  const stageJSON = data?.footerCopyright?.json;
  const linkEntriesData: any = data?.footerCopyright?.links?.entries;
  const parseLink = (linkToParse) => {
    const linkData = {
      id: linkToParse?.data?.target?.sys?.id,
      text: linkToParse?.content[0]?.value
    };
    const findLink = linkEntriesData.hyperlink.find((item) => item.sys != null && item.sys.id === linkData.id);
    const findLinkIndex = linkEntriesData.hyperlink.findIndex((item) => item.sys != null && item.sys.id === linkData.id);
    if (findLink) {
      const item = linkEntriesData.hyperlink[findLinkIndex];
      const href = item.pagePath ? `/${item.pagePath}/${item.slug}` : `/${item.slug}`;
      return (
        <Link prefetch={false} href={href} locale={router.locale !== 'en' && router.locale}>
          {linkData.text}
        </Link>
      );
    }
  };
  const options = {
    renderNode: {
      'entry-hyperlink': (node) => {
        const jsx = parseLink(node);
        return renderToStaticMarkup(jsx);
      },
      [BLOCKS.PARAGRAPH]: (node, next) => {
        if (node.content[0]?.value && node.content[0]?.value.includes('<div')) {
          return node.content[0]?.value;
        } else {
          return `<p>${next(node.content)}</p>`;
        }
      }
    }
  };

  let copyrightText = documentToHtmlString(stageJSON, options).replace(/\n/g, `<br/>`);
  copyrightText = copyrightText.replace(/<code>/g, '<pre><code>');
  copyrightText = copyrightText.replace(/<\/code>/g, '</code></pre>');
  const copyright = (
    <div className="typography typography--Copyright">
      {copyrightText.includes('{year}') && (
        <div dangerouslySetInnerHTML={{ __html: copyrightText.replace('{year}', new Date().getFullYear().toString()) || '' }}></div>
      )}
    </div>
  );

  return (
    <>
      {isSimplified ? (
        <FooterSimplified />
      ) : (
        <ThreeColumnFooter
          linksChildren={
            <>
              {data?.footerMainMenu?.subMenusCollection?.items.map((item, i) => {
                return (
                  <div key={i} className="footer-main-footer__main-links-container">
                    <Typography type="Caption1" className="footer-main-footer__links-title">
                      {item?.displayTitle || item.link?.internalLink.title}
                    </Typography>
                    <hr className="footer-main-footer__links-underline" />
                    <ul className="footer-main-footer__links-ul">
                      {item.menuColumnsCollection &&
                        item.menuColumnsCollection.items.length > 0 &&
                        item.menuColumnsCollection.items.map((column, index) => (
                          <Fragment key={index}>
                            {column.linksCollection.items.length > 0 &&
                              column.linksCollection.items.map((subItem, idx) => {
                                const subItemNavLink = linkHandler(subItem);
                                return (
                                  <Fragment key={idx}>
                                    {subItemNavLink.link && (
                                      <li className="footer-main-footer__links-link">
                                        <Link
                                          passHref
                                          prefetch={false}
                                          href={subItemNavLink.link}
                                          target={subItemNavLink.target ? subItemNavLink.target : undefined}
                                          rel={subItemNavLink.target === '_blank' ? 'noopener noreferrer' : undefined}
                                        >
                                          <Typography type="FooterLink">{subItemNavLink.title}</Typography>
                                        </Link>
                                      </li>
                                    )}
                                  </Fragment>
                                );
                              })}
                          </Fragment>
                        ))}
                    </ul>
                  </div>
                );
              })}
            </>
          }
          logoChildren={
            <a href="/">
              <Image
                className="footer-main-footer__image-logo"
                src={data.footerLogo.url}
                alt={data.footerLogo.description || 'Emplifi'}
                width={120}
                height={26}
                layout="fixed"
              />
            </a>
          }
          socialCollection={
            <>
              {data.footerSocialLinksCollection.items.length > 0 &&
                data.footerSocialLinksCollection.items.map((item, index) => (
                  <Link
                    prefetch={false}
                    href={item.externalLink}
                    key={index}
                    target={item.target ? item.target : undefined}
                    rel={item.target === '_blank' ? 'noopener noreferrer' : undefined}
                    aria-label={'link to Emplifi ' + item.iconLink.icon}
                    passHref
                  >
                    <FooterSocialIcon iconChildren={<Icon name={item.iconLink.icon} size={24} colour="#FFFF" />} />
                  </Link>
                ))}
            </>
          }
          imgAlt={data.footerRightImage.description}
          imgSrc={data.footerRightImage.url}
          copyright={copyright}
        >
          <ul className="footer-three-column-footer__links-container">
            {data.footerLinksCollection.items.map((link, i) => {
              const linkItem = linkHandler(link);
              return (
                <li key={i} className="footer-three-column-footer__links-link">
                  <Link
                    prefetch={false}
                    href={linkItem.link}
                    target={linkItem.target ? linkItem.target : undefined}
                    rel={linkItem.target === '_blank' ? 'noopener noreferrer' : undefined}
                    passHref
                  >
                    <Typography type="FooterLink">{linkItem.title}</Typography>
                    <Icon name="chevron-down" size={11} colour="#FFFFFF" />
                  </Link>
                </li>
              );
            })}
          </ul>
        </ThreeColumnFooter>
      )}
    </>
  );
}
