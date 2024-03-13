import avatar from './avatar.module.scss';
import pictureStyles from '@/careers/styles/modules/picture.module.scss';
import { getContentfulImageUrl } from '@/careers/utils/contentful-image-url';

type Props = {
  image: {
    url: string;
  };
};

const width = 145;
const height = 145;

export default function Avatar({ image }: Props): JSX.Element {
  const defaultSrc = getContentfulImageUrl(image.url, { w: width, h: height, fm: 'jpg' });
  const retinaSrc = getContentfulImageUrl(image.url, { w: width * 2, h: height * 2, fm: 'jpg' });

  return (
    <div className={avatar.avatarHolder}>
      <img
        srcSet={`${retinaSrc} 2x`}
        src={defaultSrc}
        width={width}
        height={height}
        alt=""
        role="presentation"
        className={`${pictureStyles.picture} ${pictureStyles.round}`}
        loading="lazy"
      />
    </div>
  );
}
