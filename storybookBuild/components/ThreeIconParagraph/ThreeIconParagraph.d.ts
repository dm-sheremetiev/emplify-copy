import React, { FC, ReactNode } from "react";
import "./ThreeIconParagraph.scss";
import { IconsType } from "../../assets/icons";
export type ThreeIconParagraphProps = React.HTMLAttributes<HTMLDivElement> & {
    id?: string;
    title?: string;
    iconOneTitle?: string;
    iconThreeTitle?: string;
    body?: string;
    className?: string;
    children?: ReactNode;
    iconNameLeft: IconsType;
    iconNameMiddle: IconsType;
    iconNameRight: IconsType;
};
declare const ThreeIconParagraph: FC<ThreeIconParagraphProps>;
export default ThreeIconParagraph;
