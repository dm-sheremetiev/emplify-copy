import React from "react";
import Typography from "../Typography/Typography";
import "./PreFooterCTA.scss";

export type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  id?: string;
  className?: string;
  header?: string | Element | any;
  paragraph?: string | Element | any;
};

const PreFooterCTA = (props: CardProps) => {
  const { header, paragraph } = props;
  const HTMLProps = { ...props } as any;
  delete HTMLProps.header;
  delete HTMLProps.paragraph;

  return (
    <div
      {...HTMLProps}
      id={props.id}
      className={[
        "emplifi-pre-footer-cta flex flex-col items-center justify-center",
        props?.className,
      ].join(" ")}
    >
      <div className="emplifi-pre-footer-cta__inner flex flex-col items-center justify-center">
        {header && <div className="typography typography--Headline2 emplifi-pre-footer-cta__title" dangerouslySetInnerHTML={{ __html: header || "" }}></div>}
        {paragraph && <Typography type="Body1" className="emplifi-pre-footer-cta__paragraph">{paragraph}</Typography>}
        {props.children}
      </div>
    </div>
  );
};

export default PreFooterCTA;
