import React, { ReactElement, ReactNode } from 'react';
import './CloudWrapper.scss';
export type CloudTypeProps = 'single' | 'double';
export type CloudVerticalPositionProps = 'top' | 'bottom';
export type CloudHorizontalPositionProps = 'left' | 'right';
export type CloudWrapperProps = React.HTMLAttributes<HTMLDivElement> & {
    id?: string;
    topCloudType?: CloudTypeProps;
    topHorizontalPosition?: CloudHorizontalPositionProps;
    topCloudColor?: string;
    bottomCloudType?: CloudTypeProps;
    bottomHorizontalPosition?: CloudHorizontalPositionProps;
    bottomCloudColor?: string;
    topFrontDoubleCloudColor?: string;
    topBehindDoubleCloudColor?: string;
    bottomFrontDoubleCloudColor?: string;
    bottomBehindDoubleCloudColor?: string;
    children?: ReactElement | ReactNode;
};
export type SingleCloudProps = {
    verticalPosition?: CloudVerticalPositionProps;
    horizontalPosition?: CloudHorizontalPositionProps;
    cloudColor?: string;
};
export type DoubleCloudsProps = {
    verticalPosition?: CloudVerticalPositionProps;
    horizontalPosition?: CloudHorizontalPositionProps;
    frontDoubleCloudColor?: string;
    behindDoubleCloudColor?: string;
};
declare const CloudWrapper: (props: CloudWrapperProps) => JSX.Element;
declare const SingleCloud: (props: SingleCloudProps) => JSX.Element;
declare const DoubleClouds: (props: DoubleCloudsProps) => JSX.Element;
export { CloudWrapper, SingleCloud, DoubleClouds };
export default CloudWrapper;
