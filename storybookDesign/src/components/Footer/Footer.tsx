import './Footer.scss';
import React, { ReactNode, FC } from "react";
import MarketForm from '../MarketForm/MarketForm';

export type FooterProps = {
  id?: string;
  className?: string;
  children?: ReactNode;
  img?: ReactNode[] | any[];
  imgSrc?: string;
  imgAlt?: string;
  imgTitle?: string;
  // Market Form Props
  type?: 'default' | 'alt' | 'article';
  title?: string;
  subTitle?: string;
  formChildren?: ReactNode | string;
  backgroundFormColor?: string;
};

const Footer: FC<FooterProps> = (props: FooterProps) => {
  return (
    <>
      {
        props.formChildren &&
        <MarketForm
          id={props.id}
          type={props.type}
          title={props.title}
          subTitle={props.title}
          formChildren={props.formChildren}
          backgroundColor={props.backgroundFormColor}
        />
      }
      <div id={props.id} className="footer-main-footer">
        <div className="footer-main-footer-container">
        <div className="footer-main-footer__image">
          {props.img ? (
            <>
              {props.img}
            </>
          ) : (
            <img
              className="footer-main-footer__image-image"
              src={props.imgSrc}
              alt={props.imgAlt ? (props.imgAlt):("footer image")}
              width="135px"
              height="28px"
            />
          )}
        </div>
        {
          props.children &&
          <ul className="footer-main-footer__links-container">
            <>{props.children}</>
          </ul>
        }
        </div>
      </div>
    </>
  )
};

export { Footer }
export default Footer;
