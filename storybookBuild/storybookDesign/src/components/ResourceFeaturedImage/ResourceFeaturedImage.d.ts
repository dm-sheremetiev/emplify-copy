import './ResourceFeaturedImage.scss';
export type ResourceFeaturedImageProps = {
    id?: string;
    imgSrc?: string;
    imgSrcDesktop?: string;
    imgAlt?: string;
    imgTitle?: string;
    label?: string;
};
declare const ResourceFeaturedImage: {
    (props: ResourceFeaturedImageProps): JSX.Element;
    defaultProps: {
        imgSrc: string;
        imgSrcDesktop: string;
        imgAlt: string;
        imgTitle: string;
    };
};
export { ResourceFeaturedImage };
export default ResourceFeaturedImage;
