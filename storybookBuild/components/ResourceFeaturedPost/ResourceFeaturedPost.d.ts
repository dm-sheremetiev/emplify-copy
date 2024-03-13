import { ReactNode } from 'react';
import './ResourceFeaturedPost.scss';
export type ResourceFeaturedPostProps = {
    id?: string;
    imgSrc?: string;
    imgSrcDesktop?: string;
    imgAlt?: string;
    imgTitle?: string;
    label?: string;
    meta?: string;
    title?: string;
    paragraph?: string;
    buttonChildren?: ReactNode;
};
declare const ResourceFeaturedPost: {
    (props: ResourceFeaturedPostProps): JSX.Element;
    defaultProps: {
        imgSrc: string;
        imgSrcDesktop: string;
        imgAlt: string;
        imgTitle: string;
        label: string;
        title: string;
        paragraph: string;
    };
};
export { ResourceFeaturedPost };
export default ResourceFeaturedPost;
