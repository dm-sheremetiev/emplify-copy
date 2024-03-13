import './BrandBlockAlt.scss';
export type BrandBlockAltProps = {
    id?: string;
    title?: string;
    items?: BrandBlockAltItemProps[];
    titleColor?: string;
    backgroundColor?: string;
};
export type BrandBlockAltItemProps = {
    id?: string;
    dataText?: string;
    dataSupText?: string;
    body?: string;
};
declare const BrandBlockAlt: (props: BrandBlockAltProps) => JSX.Element;
declare const BrandBlockAltItem: (props: BrandBlockAltItemProps) => JSX.Element;
export { BrandBlockAlt, BrandBlockAltItem };
export default BrandBlockAlt;
