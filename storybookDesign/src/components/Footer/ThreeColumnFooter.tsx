import "./Footer.scss";
import React, { ReactNode, FC } from "react";

export type ThreeColumnFooterProps = {
  id?: string;
  className?: string;
  children?: ReactNode;
  img?: ReactNode[] | any[];
  imgSrc?: string;
  imgAlt?: string;
  imgTitle?: string;
  copyright?: ReactNode | string;
  logoChildren?: ReactNode | string;
  socialCollection?: ReactNode;
  linksChildren?: ReactNode | string;
};

const ThreeColumnFooter: FC<ThreeColumnFooterProps> = (
  props: ThreeColumnFooterProps
) => {
  return (
    <>
      <div id={props.id} className="footer-three-column-footer">
        <div className="footer-main-footer__container">
          {props.linksChildren && (
            <div className="footer-main-footer__main-links">
              {props.linksChildren}
            </div>
          )}
          <div className="footer-three-column-footer__image-container">
            <div className="footer-three-column-footer__image-container-imagesContainer">
              <div className="footer-three-column-footer__image-container-imagesContainer-logo">
                {props.logoChildren && <>{props.logoChildren}</>}
              </div>
            </div>
            {props.img ? (
              <>{props.img}</>
            ) : (
              <img
                className="footer-three-column-footer__image-image"
                src={props.imgSrc}
                alt={props.imgAlt ? props.imgAlt : "footer image"}
                width="535px"
                height="233px"
              />
            )}
          </div>
          <div className="footer-three-column-footer__content">
            <div className="footer-three-column-footer__content-container">
              <div className="footer-three-column-footer__image-container-imagesContainer-socialCollection">
                {props.socialCollection && props.socialCollection}
              </div>
              <div>
                {props.children && <>{props.children}</>}
                <div className="footer-three-column-footer__copyright">
                  {props.copyright}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThreeColumnFooter;
