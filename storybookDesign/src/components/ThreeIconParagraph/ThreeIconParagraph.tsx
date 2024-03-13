import React, { FC, ReactNode } from "react";
import "./ThreeIconParagraph.scss";
import Typography from "../Typography/Typography";
import Icon from "../Icon/Icon";
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

const ThreeIconParagraph: FC<ThreeIconParagraphProps> = (
  props: ThreeIconParagraphProps
) => {
  const { id, title, iconOneTitle, iconThreeTitle, body, children, iconNameLeft, iconNameMiddle, iconNameRight } = props;
  const HTMLProps = { ...props } as any;
  delete HTMLProps.id;
  delete HTMLProps.title;
  delete HTMLProps.iconOneTitle;
  delete HTMLProps.iconThreeTitle;
  delete HTMLProps.body;
  delete HTMLProps.children;
  delete HTMLProps.iconNameLeft;
  delete HTMLProps.iconNameMiddle;
  delete HTMLProps.iconNameRight;

  return (
    <div
      {...HTMLProps}
      id={id}
      className={["emplifi-three-icon-paragraph", props?.className].join(" ")}
    >
      {/* <div className="emplifi-three-icon-paragraph__clouds">
        <div className="emplifi-three-icon-paragraph__clouds-position-container">
          <div className="emplifi-three-icon-paragraph__cloud--top"></div>
          <div className="emplifi-three-icon-paragraph__cloud--second-top"></div>
        </div>
      </div> */}
      <div className="emplifi-three-icon-paragraph__container">
        {title && <div className="typography typography--BrandGuideH1" dangerouslySetInnerHTML={{ __html: title || "" }}></div>}
        <div className="emplifi-three-icon-paragraph__icons-container-main">
          <div className="emplifi-three-icon-paragraph__icons-container">
            <div className="emplifi-three-icon-paragraph__icons-container--icon-one-container">
              <Icon name={iconNameLeft} size={120} color={"#002C60"} />
              {iconOneTitle && (
                <Typography type="BrandGuideH4" as="h4">
                  {iconOneTitle}
                </Typography>
              )}
            </div>
            <span className="emplifi-three-icon-paragraph__icons-container--blue-line-left"></span>
            <span className="emplifi-three-icon-paragraph__icons-container--white-line-left"></span>
            <div className="emplifi-three-icon-paragraph__icons-container--icon-two-container">
              <Icon name={iconNameMiddle} size={120} color={"#002C60"} />
            </div>
            <span className="emplifi-three-icon-paragraph__icons-container--white-line-right"></span>
            <span className="emplifi-three-icon-paragraph__icons-container--blue-line-right"></span>
            <div className="emplifi-three-icon-paragraph__icons-container--icon-three-container">
              <Icon name={iconNameRight} size={130} color={"#002C60"} />
              {iconThreeTitle && (
                <Typography type="BrandGuideH4" as="h4">
                  {iconThreeTitle}
                </Typography>
              )}
            </div>
          </div>
          {body && (
            <Typography type="BrandGuideCopy" as="p">
              {body}
            </Typography>
          )}
        </div>
      </div>
      {children && (
        <div className="emplifi-three-icon--children">{children}</div>
      )}
    </div>
  );
};

ThreeIconParagraph.defaultProps = {
  iconNameLeft: "empathy",
  iconNameMiddle: "brand-connection",
  iconNameRight: "iot"
};

export default ThreeIconParagraph;
