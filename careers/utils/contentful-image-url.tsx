// https://www.contentful.com/developers/docs/references/images-api/

export type ImageFm = 'jpg' | 'png' | 'webp';

type ContentfulParams = {
  fm?: ImageFm;
  fit?: 'pad' | 'fill' | 'scale' | 'crop' | 'thumb';
  f?: 'face' | 'faces' | 'center'; // not complete
  w?: number;
  h?: number;
  q?: number;
} & (
  | {
      fm: 'jpg';
      fl?: 'progressive';
    }
  | {
      fm: 'png';
      fl?: 'png8';
    }
  | { fm: 'webp' }
  | { fm?: undefined }
);

export function getContentfulImageUrl(url: string, params: ContentfulParams): string {
  // https://github.com/microsoft/TypeScript/issues/32951
  params.fm = 'webp';
  const searchParams = new URLSearchParams(params as unknown as Record<string, string>);
  if (!params.fit) {
    searchParams.set('fit', 'fill');
  }
  // if (params.fm === 'jpg') {
  //   searchParams.set('fl', 'progressive');
  // }
  if (!params.fm) {
    searchParams.delete('fm');
  }
  return `${url}?${searchParams.toString()}`;
}
