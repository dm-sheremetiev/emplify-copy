import { ReactNode } from 'react';
import './CustomerStoriesCard.scss';
export type CustomerStoriesCardProps = {
    id?: string;
    imageSrc?: string;
    imageAlt?: string;
    imageTitle?: string;
    paragraph?: string;
    linkChildren?: ReactNode;
    logoSrc?: string;
    logoAlt?: string;
    logoTitle?: string;
    type?: 'default' | 'menu';
};
declare const CustomerStoriesCard: {
    (props: CustomerStoriesCardProps): JSX.Element;
    defaultProps: {
        paragraph: string;
        type: string;
    };
};
export { CustomerStoriesCard };
export default CustomerStoriesCard;
