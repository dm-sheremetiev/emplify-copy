import Icon from './Icon';
import React from 'react';
import colours from '../../assets/colours';
import { CustomIcons, IconsType } from '../../assets/icons';

export default {
  title: 'Icon/Icon',
  component: Icon
};

export const Image = () => (
  <Icon
    style={{ height: 100 }}
    title="image title"
    image={{
      title: 'Icon',
      description: 'Icon',
      url: 'https://d2zv2ciw0ln4h1.cloudfront.net/uploads/ibm_1f63f8c1a8.svg'
    }}
  />
);

export const Playground = ({ name, size, colour, ...args }: any) => (
  <div>
    <Icon name={name as IconsType} size={size} colour={colour} {...args} />
  </div>
);
Playground.args = {
  name: 'thumbs-up',
  size: 72,
  colour: colours.pictonBlue
};
Playground.argTypes = {
  name: { control: { type: 'select', options: Object.keys(CustomIcons) } },
  colour: { control: { type: 'select', options: Object.values(colours) } }
};

export const AllIcons = (args: any) => (
  <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
    {Object.keys(CustomIcons).map((key, idx) => (
      <div key={idx + key} style={{ margin: '1rem' }}>
        <Icon title={key} name={key as IconsType} size={72} colour={colours.pictonBlue} {...args} />
      </div>
    ))}
  </div>
);
AllIcons.args = {
  size: 72,
  colour: colours.pictonBlue
};
