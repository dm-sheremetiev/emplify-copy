import Image from 'next/legacy/image';

interface ImageComponent {
  src: string;
  alt: string;
  className?: string;
  lazy?: boolean;
  width?: number | `${number}`;
  height?: number | `${number}`;
  layout?: 'responsive' | 'fixed' | 'fill' | 'intrinsic';
}

export function ImageComponent(props: ImageComponent): JSX.Element {
  const { alt, src, className, lazy, width, height, layout = 'responsive' } = props;
  return <Image className={className} src={src} alt={alt} layout={layout} width={width} height={height} loading={lazy ? 'lazy' : 'eager'} />;
}
