import Typography, { TypographyType } from './Typography';
import React from 'react';
import {
  withKnobs,
  boolean
} from "@storybook/addon-knobs";

export default {
  title: 'Typography/Typography',
  component: Typography,
  decorators: [withKnobs],
};

const variants: TypographyType[] = [
  'Headline1', 
  'Headline2',
  'Headline3',
  'Headline4',
  'Caption1',
  'Body1',
  'Link1',
  'Link2',
  'Button1',
  'Label1',
  'Label2',
  'BrandGuideH1',
  'BrandGuideH2',
  'BrandGuideH3',
  'BrandGuideH4',
  'BrandGuideH5',
  'BrandGuideCopy',
  'BrandGuideButton',
  'HomeHeroTitle',
  'HomeHeroSubTitle',
  'HomeHeroCopy',
  'HomeCTATitle',
  'HomeCTACopy',
  'HomeCardTitle',
  'HomeCardCopyBold',
  'HomeBannerTitle',
  'HomeBannerCopy',
  'HomeTestimonialCopy',
  'HomeTestimonialCopyBold',
  'HomeTestimonialDetails',
  'MenuSubMenuTitle',
  'HomeSubMenuLink',
  'HomeMiscLink',
  'ProductHeaderLink',
  'FooterLink',
  'AltFooterLink',
  'Copyright',
  'ResourceParagraph',
  'Eyebrow',
  'MenuTitle',
  'MenuSubMenu1',
  'MenuSubMenu2',
  'MenuSubMenu3',
  'MenuSubMenuTitle2',
  'MenuSubMenuBody',
  'MenuSubMenuLink',
]

export const All = () => <div style={{ maxWidth: '50vw' }}>
  {variants.map((variant, idx) => <>
    <Typography
      type={variant}
      key={variant}
      style={{ marginBottom: 10 }}
      mobile={boolean("mobile", false)}
    >
      {variant}
    </Typography>
    <Typography
      type={variant}
      key={variant + idx}
      style={{ marginBottom: 40 }}
      mobile={boolean("mobile", false)}
    >
      Mi bibendum neque egestas congue quisque. Volutpat diam ut venenatis tellus in metus. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at.
  </Typography>
  </>)}
</div>


const Template = (args) => <Typography {...args} mobile={boolean("mobile", false)} />;

export const Headline1 = Template.bind({});
Headline1.args = {
  children: "Mi bibendum neque egestas congue quisque. Volutpat diam ut venenatis tellus in metus. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at.", 
  type: "Headline1"
};

export const Headline2 = Template.bind({});
Headline2.args = {
  children: "Mi bibendum neque egestas congue quisque. Volutpat diam ut venenatis tellus in metus. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at.", 
  type: "Headline2"
};

export const Headline3 = Template.bind({});
Headline3.args = {
  children: "Mi bibendum neque egestas congue quisque. Volutpat diam ut venenatis tellus in metus. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at.", 
  type: "Headline3"
};

export const Headline4 = Template.bind({});
Headline4.args = {
  children: "Mi bibendum neque egestas congue quisque. Volutpat diam ut venenatis tellus in metus. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at.", 
  type: "Headline4"
};

export const Caption1 = Template.bind({});
Caption1.args = {
  children: "Mi bibendum neque egestas congue quisque. Volutpat diam ut venenatis tellus in metus. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at.", 
  type: "Caption1"
};

export const Body1 = Template.bind({});
Body1.args = {
  children: "Mi bibendum neque egestas congue quisque. Volutpat diam ut venenatis tellus in metus. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at.", 
  type: "Body1"
};

export const Link1 = Template.bind({});
Link1.args = {
  children: "Mi bibendum neque egestas congue quisque. Volutpat diam ut venenatis tellus in metus. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at.", 
  type: "Link1"
};

export const Link2 = Template.bind({});
Link2.args = {
  children: "Mi bibendum neque egestas congue quisque. Volutpat diam ut venenatis tellus in metus. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at.", 
  type: "Link2"
};

export const Button1 = Template.bind({});
Button1.args = {
  children: "Mi bibendum neque egestas congue quisque. Volutpat diam ut venenatis tellus in metus. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at.", 
  type: "Button1"
};

export const Label1 = Template.bind({});
Label1.args = {
  children: "Mi bibendum neque egestas congue quisque. Volutpat diam ut venenatis tellus in metus. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at.", 
  type: "Label1"
};

export const Label2 = Template.bind({});
Label2.args = {
  children: "Mi bibendum neque egestas congue quisque. Volutpat diam ut venenatis tellus in metus. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at.", 
  type: "Label2"
};