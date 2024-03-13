import React from "react";
import AlertBar from "./AlertBar";

export default {
  title: "AlertBar/AlertBar",
  component: AlertBar,
  parameters: {
    backgrounds: {
      default: "light",
    },
  },
};

export const Playground = ({ ...args }: any) => <AlertBar {...args} />;
Playground.args = {
  isToggle: true,
  backgroundColor: "#A30C65",
  message: "Die von Ihnen angeforderte Seite ist in Ihrer Sprache nicht verfügbar.",
  textColor: "#FFFFFF",
  buttonChildren: <a href="/">Seite</a>
};
