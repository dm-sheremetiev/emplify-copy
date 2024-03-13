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

const CloudWrapper = (props: CloudWrapperProps) => {
  const HTMLProps = { ...props } as any;
  delete HTMLProps.id; 
  delete HTMLProps.topCloudType;
  delete HTMLProps.topHorizontalPosition;
  delete HTMLProps.topCloudColor;
  delete HTMLProps.bottomCloudType;
  delete HTMLProps.bottomHorizontalPosition;
  delete HTMLProps.bottomCloudColor;
  delete HTMLProps.topFrontDoubleCloudColor;
  delete HTMLProps.topBehindDoubleCloudColor;
  delete HTMLProps.bottomFrontDoubleCloudColor;
  delete HTMLProps.bottomBehindDoubleCloudColor;
  
  return (
    <div 
      {...HTMLProps} 
      id={props.id} 
      className="cloud-wrapper"
    >
      {
        (props.topCloudType === 'single' && props.topHorizontalPosition && props.topCloudColor) &&
        <SingleCloud 
          verticalPosition="top" 
          horizontalPosition={props.topHorizontalPosition} 
          cloudColor={props.topCloudColor}
        />
      }
      {
        (props.topCloudType === 'double' && props.topHorizontalPosition && props.topFrontDoubleCloudColor && props.topBehindDoubleCloudColor) &&
        <DoubleClouds 
          verticalPosition="top" 
          horizontalPosition={props.topHorizontalPosition} 
          frontDoubleCloudColor={props.topFrontDoubleCloudColor}
          behindDoubleCloudColor={props.topBehindDoubleCloudColor}
        />
      }
      <>{props.children}</>
      {
        (props.bottomCloudType === 'single' && props.bottomHorizontalPosition && props.bottomCloudColor) &&
        <SingleCloud 
          verticalPosition="bottom" 
          horizontalPosition={props.bottomHorizontalPosition} 
          cloudColor={props.bottomCloudColor}
        />
      }
      {
        (props.bottomCloudType === 'double' && props.bottomHorizontalPosition && props.bottomFrontDoubleCloudColor && props.bottomBehindDoubleCloudColor) &&
        <DoubleClouds 
          verticalPosition="bottom" 
          horizontalPosition={props.bottomHorizontalPosition} 
          frontDoubleCloudColor={props.bottomFrontDoubleCloudColor}
          behindDoubleCloudColor={props.bottomBehindDoubleCloudColor}
        />
      }
    </div>
  )
};

const SingleCloud = (props: SingleCloudProps) => {
  return (
    <div 
      className={`single-cloud single-cloud--vertical-${props.verticalPosition} single-cloud--horizontal-${props.horizontalPosition}`} 
      style={{ backgroundColor: props.cloudColor }}
    ></div>
  )
}

const DoubleClouds = (props: DoubleCloudsProps) => {
  return (
      <div className={`double-cloud-container double-cloud-container--vertical-${props.verticalPosition} double-cloud-container--horizontal-${props.horizontalPosition}`}>
        <div className="double-cloud-container__inner">
          <div 
            className={`double-front-cloud double-front-cloud--vertical-${props.verticalPosition} double-front-cloud--horizontal-${props.horizontalPosition}`} 
            style={{ backgroundColor: props.frontDoubleCloudColor }}
          ></div>
          <div 
            className={`double-behind-cloud double-behind-cloud--vertical-${props.verticalPosition} double-behind-cloud--horizontal-${props.horizontalPosition}`} 
            style={{ backgroundColor: props.behindDoubleCloudColor }}
          ></div>
        </div>
    </div>
  )
}

export { CloudWrapper, SingleCloud, DoubleClouds };
export default CloudWrapper;