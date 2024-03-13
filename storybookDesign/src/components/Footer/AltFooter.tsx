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
  copyright?: ReactNode | string;
  logoChildren?: ReactNode | string;
  // Market Form Props
  type?: 'default' | 'alt' | 'article';
  title?: string;
  subTitle?: string;
  formChildren?: ReactNode | string;
  socialCollection?: ReactNode;
  backgroundFormColor?: string;
};

const AltFooter: FC<FooterProps> = (props: FooterProps) => {
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
      <div id={props.id} className={'footer-alt-footer' + (!props.formChildren ? ' footer-alt-footer--without-form' : '')}>
        <div className="footer-alt-footer__image-container">
          <div className="footer-alt-footer__image-container-imagesContainer">
            <div className="footer-alt-footer__image-container-imagesContainer-logo">
              {props.logoChildren && <>{props.logoChildren}</>}
            </div>
            <div className="footer-alt-footer__image-container-imagesContainer-socialCollection">
              {props.socialCollection && props.socialCollection}
            </div>
          </div>
          {props.img ? (
            <>
              {props.img}
            </>
          ) : (
            <img
              className="footer-alt-footer__image-image"
              src={props.imgSrc}
              alt={props.imgAlt ? (props.imgAlt):("footer image")}
              width="135px"
              height="28px"
            />
          )}

        </div>
        <div className="footer-alt-footer__content">
          {
            props.children &&
            <ul className="footer-alt-footer__links-container">
              <>{props.children}</>
            </ul>
          }
          <div className="footer-alt-footer__copyright">
            {props.copyright}
          </div>
        </div>
      </div>
    </>
  )
};

export default AltFooter;
