import { ogDefaultUrl } from '../config';
import { DepartmentsCopy, HomepageCopy } from '../types/copy-types';
import { Department } from '../types/entities-types';

export function getDepartmentCopyFallback({ name, urlKey }: Department): DepartmentsCopy {
  return {
    slug: urlKey,
    perex: 'At Socialbakers, we come together to solve problems. Now we want you to choose a role where you can play your part.',
    metadata: {
      metaDescription: `Check out these ${name} positions by Socialbakers`,
      ogTitle: `Join Socialbakers’ ${name} Team!`,
      ogDescription: `Check out these ${name} positions by Socialbakers`,
      ogImage: {
        url: ogDefaultUrl
      },
      canonicalUrl: `${process.env.SERVER_URL}/careers/${urlKey}`
    }
  };
}

export function getHomepageCopyFallback(): HomepageCopy {
  return {
    title: 'Be Who You Are. Do What You Love ;)',
    excerpt:
      'Are you at your best in an atmosphere of trust, knowhow, freedom, and support, alongside talented and creative people just like you? That’s our working style.',
    positionsTitle: 'All New Positions',
    metadata: {}
  };
}
