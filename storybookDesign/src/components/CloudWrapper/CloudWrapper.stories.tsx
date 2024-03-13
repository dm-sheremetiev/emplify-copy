
import { select, text, withKnobs } from "@storybook/addon-knobs";
import React from "react";
import CloudWrapper from './CloudWrapper';

export default {
  title: "CloudWrapper/Example",
  component: CloudWrapper,
  decorators: [withKnobs],
};

export const Playground = () => {
  return (
    <>
      <CloudWrapper topCloudType="single" topHorizontalPosition="right" topCloudColor="red">
        <div>What is clouds...</div>
      </CloudWrapper>

      <CloudWrapper 
        topCloudType={select('topCloudType', ['single', 'double'], 'single')}
        topCloudColor={text('topCloudColor', 'blue')}
        topFrontDoubleCloudColor={text('topFrontDoubleCloudColor', 'blue')}
        topBehindDoubleCloudColor={text('topBehindDoubleCloudColor', 'rgba(255, 255, 255, 0.6)')}
        topHorizontalPosition={select('topHorizontalPosition', ['left', 'right'], 'left')}
        bottomCloudType={select('bottomCloudType', ['single', 'double'], 'single')}
        bottomHorizontalPosition={select('bottomHorizontalPosition', ['left', 'right'], 'right')}
        bottomCloudColor={text('bottomCloudColor', 'blue')}
        bottomFrontDoubleCloudColor={text('bottomFrontDoubleCloudColor', 'blue')}
        bottomBehindDoubleCloudColor={text('bottomBehindDoubleCloudColor', 'rgba(255, 255, 255, 0.6)')}
      >
        <div>Hello</div>
      </CloudWrapper>

      <CloudWrapper
        topCloudType='single'
        topCloudColor="red"
        topHorizontalPosition='right'
        bottomCloudType='single'
        bottomCloudColor="blue"
        bottomHorizontalPosition='left'
      >
        <div></div>
      </CloudWrapper>
      

    </>
  )
}

export const SingleCloud = () => {
  return (
    <CloudWrapper
      topCloudType='single'
      topCloudColor="red"
      topHorizontalPosition='right'
      bottomCloudType='single'
      bottomHorizontalPosition='left'
      bottomCloudColor="blue"
    >
      <div></div>
    </CloudWrapper>
  )
}

export const DoubleCloud = () => {
  return (
    <CloudWrapper
      topCloudType="double"
      topHorizontalPosition={select('topHorizontalPosition', ['left', 'right'], 'left')}
      topFrontDoubleCloudColor={text('topFrontDoubleCloudColor', 'blue')}
      topBehindDoubleCloudColor={text('topBehindDoubleCloudColor', 'rgba(255, 255, 255, 0.6)')}
      bottomCloudType="double"
      bottomHorizontalPosition={select('bottomHorizontalPosition', ['left', 'right'], 'right')}
      bottomFrontDoubleCloudColor={text('bottomFrontDoubleCloudColor', 'blue')}
      bottomBehindDoubleCloudColor={text('bottomBehindDoubleCloudColor', 'rgba(255, 255, 255, 0.6)')}
    >
      <div></div>
    </CloudWrapper>
  )
}

export const MixCloud = () => {
  return (
    <CloudWrapper
      topCloudType='single'
      topCloudColor="red"
      topHorizontalPosition='right'
      bottomCloudType='double'
      bottomHorizontalPosition='left'
      bottomFrontDoubleCloudColor="red"
      bottomBehindDoubleCloudColor="blue"
    >
      <div></div>
    </CloudWrapper>
  )
}