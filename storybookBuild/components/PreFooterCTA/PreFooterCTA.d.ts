import React from "react";
import "./PreFooterCTA.scss";
export type CardProps = React.HTMLAttributes<HTMLDivElement> & {
    id?: string;
    className?: string;
    header?: string | Element | any;
    paragraph?: string | Element | any;
};
declare const PreFooterCTA: (props: CardProps) => JSX.Element;
export default PreFooterCTA;
