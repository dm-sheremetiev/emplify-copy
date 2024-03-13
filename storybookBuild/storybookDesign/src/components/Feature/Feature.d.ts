import React from 'react';
import { IconsType } from '../../assets/icons';
import { IconProps } from '../Icon/Icon';
import './Feature.scss';
export type IconFeatureProps = React.HTMLAttributes<HTMLDivElement> & {
    id?: string;
    className?: string;
    icon?: IconsType;
    iconProps?: IconProps;
    title?: string;
    paragraph?: string;
};
declare const Feature: (props: IconFeatureProps) => JSX.Element;
declare const FeatureGroup: ({ title, children, className }: {
    children?: any;
    className?: string | undefined;
    title?: string | undefined;
}) => JSX.Element;
export { Feature, FeatureGroup };
export default Feature;
