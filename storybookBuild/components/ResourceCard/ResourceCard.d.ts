import React, { ReactNode } from 'react';
import './ResourceCard.scss';
export type ResourceCardProps = React.HTMLAttributes<HTMLDivElement> & {
    id?: string;
    image?: string | JSX.Element | ReactNode;
    meta?: string;
    header?: string;
    paragraph?: string;
    hideButton?: boolean;
    buttonChildren?: ReactNode;
};
declare const ResourceCard: (props: ResourceCardProps) => JSX.Element;
declare const ResourceCardGroup: (props: React.HTMLAttributes<HTMLDivElement>) => JSX.Element;
declare const TwoColumnResourceCardGroup: (props: React.HTMLAttributes<HTMLDivElement>) => JSX.Element;
declare const ThreeColumnResourceCardGroup: (props: React.HTMLAttributes<HTMLDivElement>) => JSX.Element;
declare const FourColumnResourceCardGroup: (props: React.HTMLAttributes<HTMLDivElement>) => JSX.Element;
export { ResourceCardGroup, ResourceCard, TwoColumnResourceCardGroup, ThreeColumnResourceCardGroup, FourColumnResourceCardGroup };
export default ResourceCard;
