import { Awards, AwardsGroup } from '../../../storybookBuild/index';
// import { useRouter } from 'next/router';
// import { useLanguageDetector } from 'context/langDetector';
import React from 'react'
import {UiLogoBannerComp} from  '../UiLogoBanner'
// Interfaces
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { siteConfigI } from '@/interfaces/siteConfig';
export function UiAwardsComp(props: { data: siteConfigI['awardsConfiguration']; isAwardsHidden: boolean }): JSX.Element {
  const { data, isAwardsHidden } = props
  // const router = useRouter();
  // const { langDetector } = useLanguageDetector();
  // // Check if there is not translated text // Alert message
  // langDetector(
  //   [
  //     documentToHtmlString(data?.title?.json),
  //   ],
  //   router.locale
  // );
  return (
    <>
      {!isAwardsHidden && data?.logoItemsCollection?.items?.length > 0 &&
        <UiLogoBannerComp block={data} />
      }
      {!isAwardsHidden && data?.awardItemsCollection?.items?.length > 0 &&
      <AwardsGroup
        title={documentToHtmlString(data?.title?.json)}
        awardsChildren={
          data?.awardItemsCollection?.items.length > 0 &&
          data?.awardItemsCollection?.items.map((item, index) => {
            // Check if there is not translated text // Alert message
            // langDetector([item?.title], router.locale);
            return (
              <Awards
                title={item?.title}
                key={index}
                images={item?.imagesCollection?.items.map(img => ({
                  imageSrc: img?.url,
                  imageAlt: img?.description,
                  imageTitle: img?.title,
                }))}
              />
            );
          })
        }
      />
      }
    </>
  );
}
