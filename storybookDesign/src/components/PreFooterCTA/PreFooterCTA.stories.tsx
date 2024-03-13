import React from "react";
import Button from "../Button/Button";
import PreFooterCTA from "./PreFooterCTA";

export default {
  title: "Hero/Pre Footer CTA",
  component: PreFooterCTA,
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
};

export const Playground = ({ ...args }: any) => <PreFooterCTA {...args} />;
Playground.args = {
  header: "Optional Pre-Footer CTA Block",
  paragraph:"To drive the best experiences you need to continuously listen to your audience across the entire customer journey. With Socialbakers, you can instantly use data from every touchpoint to boost customer experiences at every stage.",
  children: <Button type="ProductPrimary">Get a Demo</Button>
};
