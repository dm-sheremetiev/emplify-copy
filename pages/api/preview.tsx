import { getPaths } from '@/queries/getPaths';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<any> {
  if (!req.query.slug) return res.status(401).json({ message: 'Invalid slug' });
  if (!req.query.lang) return res.status(401).json({ message: 'Invalid language' });

  let location: string | null = '/404';
  if (req.query.slug === 'home' || req.query.slug === '404' || req.query.slug === '500') {
    location = `/${req.query.slug}`;
  } else {
    const paths = await getPaths();
    const index = paths.findIndex((item) => {
      return item?.params?.slug?.includes(String(req.query.slug)) && req.query.lang === item.locale;
    });

    if (index >= 0) {
      const path = paths[index];
      location = `${path.locale !== 'en' ? `/${path.locale}` : ''}/${path.params.slug.join('/')}`;
    }
  }

  res.setPreviewData({});
  res.writeHead(307, { Location: location });
  res.end();
}
