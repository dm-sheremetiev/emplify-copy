import { SVGProps } from 'react';
import { IconsType } from '../../assets/icons';
export type IconProps = SVGProps<SVGSVGElement> & {
    id?: string;
    name: IconsType;
    size?: number;
    colour?: string;
    viewBox?: string;
    strokeWidth?: number;
    className?: string;
    title?: string;
    titleId?: string;
};
export declare const Icon: (props: IconProps) => JSX.Element;
export default Icon;
