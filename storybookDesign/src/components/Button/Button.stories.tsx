import React from "react";
import Button from "./Button";
import { withKnobs, text, select } from "@storybook/addon-knobs";
export default {
  title: "Button/Button",
  decorators: [withKnobs],
  component: Button,
};

export const Playground = () => {
  return (
    <Button
      children={text("text", "CTA to go here ›")}
      type={select(
        "type",
        [
          "Primary",
          "Secondary",
          "PassiveAlt",
          "ProductPrimary",
          "ProductSecondary",
          "ProductPassiveAlt",
          "HeaderPrimary",
          "LoadMore",
          "ResourceCardButton",
        ],
        "Primary"
      )}
    />
  );
};

export const DefaultButtons = () => {
  return (
    <>
      <Button type="Primary">CTA to go here ›</Button>
      <Button type="Secondary">CTA to go here ›</Button>
      <Button type="PassiveAlt">CTA to go here ›</Button>
    </>
  );
};

export const ProductButtons = () => {
  return (
    <>
      <Button type="ProductPrimary" >CTA to go here ›</Button>
      <Button type="ProductSecondary" >CTA to go here ›</Button>
      <Button type="ProductPassiveAlt" >CTA to go here ›</Button>
    </>
  );
};

export const All = () => {
  return (
    <>
      <Button type="Primary">CTA to go here ›</Button>
      <Button type="Secondary">CTA to go here ›</Button>
      <Button type="PassiveAlt">CTA to go here ›</Button>      
      <Button type="ProductPrimary" >CTA to go here ›</Button>
      <Button type="ProductSecondary" >CTA to go here ›</Button>
      <Button type="ProductPassiveAlt" >CTA to go here ›</Button>
      <Button type="HeaderPrimary">CTA to go here ›</Button>
      <Button type="LoadMore">CTA to go here ›</Button>
      <Button type="ResourceCardButton">CTA to go here ›</Button>
      <Button type="CardAlt">CTA to go here ›</Button>        
    </>
  )
}