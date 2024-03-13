import React, { ReactNode, FC } from "react";

export type FooterIconProps = {
  id?: string;
  iconChildren?: ReactNode | string;
};

const FooterSocialIcon: FC<FooterIconProps> = (props: FooterIconProps) => {
  return <div id={props.id || undefined}>{props.iconChildren}</div>;
};

export default FooterSocialIcon;
