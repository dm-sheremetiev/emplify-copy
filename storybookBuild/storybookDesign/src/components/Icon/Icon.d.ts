import { SVGProps } from 'react';
import { IconsType } from '../../assets/icons';
import { imagesI } from '../../../../interfaces';
export type IconProps = SVGProps<SVGSVGElement> & {
    id?: string;
    name?: IconsType;
    size?: number;
    colour?: string;
    viewBox?: string;
    strokeWidth?: number;
    className?: string;
    title?: string;
    titleId?: string;
    image?: imagesI;
};
export declare const Icon: (props: IconProps) => JSX.Element;
export default Icon;
