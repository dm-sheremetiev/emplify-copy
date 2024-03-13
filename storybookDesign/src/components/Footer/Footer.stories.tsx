import Footer from "./Footer";
import AltFooter from "./AltFooter";
import ThreeColumnFooter from "./ThreeColumnFooter";
import FooterSocialIcon from "./FooterIcons";
import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import Typography from "../Typography/Typography";
import footerClouds from "../../assets/images/FooterClouds.png";
import { Icon } from "../Icon/Icon";
import logo from "../../assets/images/logos/emplifi-logo-white.png";

export default {
  title: "Footers/Footer",
  component: Footer,
  decorators: [withKnobs],
};

const Copyright = (
  <Typography type="Copyright">
    All product names and logos are trademarks or registered trademarks of their
    respective owners. ©2010- 2021 All Rights Reserved.
  </Typography>
);

export const MainFooter = () => (
  <Footer
    children={
      <>
        <li className="footer-main-footer__links-link">
          <Typography type="FooterLink">Astute Customer FAQ</Typography>
          <Icon name="chevron-down" size={11} colour="#FFFFFF" />
        </li>
        <li className="footer-main-footer__links-link">
          <Typography type="FooterLink">Socialbakers Customer FAQ</Typography>
          <Icon name="chevron-down" size={11} colour="#FFFFFF" />
        </li>
        <li className="footer-main-footer__links-link">
          <Typography type="FooterLink">Media Contact</Typography>
          <Icon name="chevron-down" size={11} colour="#FFFFFF" />
        </li>
        <li className="footer-main-footer__links-link">
          <Typography type="FooterLink">Press</Typography>
          <Icon name="chevron-down" size={11} colour="#FFFFFF" />
        </li>
      </>
    }
    imgAlt="footer clouds"
    imgSrc={footerClouds}
    imgTitle="footer clouds"
  />
);

export const MainFooterWithOutForm = () => (
  <Footer
    children={
      <>
        <li className="footer-main-footer__links-link">
          <Typography type="FooterLink">Astute Customer FAQ</Typography>
          <Icon name="chevron-down" size={11} colour="#FFFFFF" />
        </li>
        <li className="footer-main-footer__links-link">
          <Typography type="FooterLink">Socialbakers Customer FAQ</Typography>
          <Icon name="chevron-down" size={11} colour="#FFFFFF" />
        </li>
        <li className="footer-main-footer__links-link">
          <Typography type="FooterLink">Media Contact</Typography>
          <Icon name="chevron-down" size={11} colour="#FFFFFF" />
        </li>
        <li className="footer-main-footer__links-link">
          <Typography type="FooterLink">Press</Typography>
          <Icon name="chevron-down" size={11} colour="#FFFFFF" />
        </li>
      </>
    }
    imgAlt="footer clouds"
    imgSrc={footerClouds}
    imgTitle="footer clouds"
    formChildren={<div>This is a form</div>}
    backgroundFormColor="#1A4073"
  />
);

export const AlternativeFooter = () => (
  <AltFooter
    logoChildren={
      <a
        href="http://localhost:6006/?path=/story/footers-footer--alternative-footer"
        target="_self"
      >
        <img
          className="footer-alt-footer__image-logo"
          src={logo}
          alt="emplifi logo"
          title="emplifi logo"
          width="135px" 
          height="28px" 
        />
      </a>
    }
    socialCollection={
      <>
        <FooterSocialIcon
          iconChildren={<Icon name="twitter" size={20} colour="#1A4073" />}
        />
      </>
    }
    children={
      <>
        <li className="footer-alt-footer__links-link">
          <a href="#">
            <Typography type="AltFooterLink">Astute Customer FAQ</Typography>
          </a>
        </li>
        <li className="footer-alt-footer__links-link">
          <a href="#">
            <Typography type="AltFooterLink">Astute Customer FAQ</Typography>
          </a>
        </li>
        <li className="footer-alt-footer__links-link">
          <a href="#">
            <Typography type="AltFooterLink">Media Contact</Typography>
          </a>
        </li>
        <li className="footer-alt-footer__links-link">
          <a href="#">
            <Typography type="AltFooterLink">Press</Typography>
          </a>
        </li>
        <li className="footer-alt-footer__links-link">
          <a href="#">
            <Typography type="AltFooterLink">Privacy Statement</Typography>
          </a>
        </li>
      </>
    }
    imgAlt="footer clouds"
    imgSrc={footerClouds}
    imgTitle="footer clouds"
    copyright={Copyright}
    formChildren={<div>This is a form</div>}
    backgroundFormColor="#1A4073"
  />
);

export const AlternativeFooterWithOutForm = () => (
  <AltFooter
    logoChildren={
      <a href="https://emplifi-ui.netlify.app/" target="_self">
        <img
          className="footer-alt-footer__image-logo"
          src={logo}
          alt="emplifi logo"
          title="emplifi logo"
          width="135px" 
          height="28px" 
        />
      </a>
    }
    socialCollection={
      <>
        <FooterSocialIcon
          iconChildren={<Icon name="facebook" size={24} colour="#FFFF" />}
        />
        <FooterSocialIcon
          iconChildren={<Icon name="twitter" size={24} colour="#FFFF" />}
        />
        <FooterSocialIcon
          iconChildren={
            <Icon name="linkedin-second" size={24} colour="#FFFF" />
          }
        />
      </>
    }
    children={
      <>
        <li className="footer-alt-footer__links-link">
          <Typography type="AltFooterLink">Astute Customer FAQ</Typography>
        </li>
        <li className="footer-alt-footer__links-link">
          <Typography type="AltFooterLink">
            Socialbakers Customer FAQ
          </Typography>
        </li>
        <li className="footer-alt-footer__links-link">
          <Typography type="AltFooterLink">Media Contact</Typography>
        </li>
        <li className="footer-alt-footer__links-link">
          <Typography type="AltFooterLink">Press</Typography>
        </li>
        <li className="footer-alt-footer__links-link">
          <Typography type="AltFooterLink">Privacy Statement</Typography>
        </li>
      </>
    }
    imgAlt="footer clouds"
    imgSrc={footerClouds}
    imgTitle="footer clouds"
    copyright={Copyright}
  />
);

export const ThreeColumnFooterExample = () => (
  <ThreeColumnFooter
    linksChildren={
      <>
        <div className="footer-main-footer__main-links-container">
          <Typography
            type="Caption1"
            className="footer-main-footer__links-title"
          >
            Emplifi CX Cloud
          </Typography>
          <hr className="footer-main-footer__links-underline" />
          <ul className="footer-main-footer__links-ul">
            <li className="footer-main-footer__links-link">
              <a href="#">
              <Typography type="FooterLink">Social Marketing Cloud</Typography>
              </a>
            </li>
            <li className="footer-main-footer__links-link">
              <a href="#">
              <Typography type="FooterLink">Social Commerce Cloud</Typography>
              </a>
            </li>
            <li className="footer-main-footer__links-link">
              <a href="#">
              <Typography type="FooterLink">Service Cloud</Typography>
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-main-footer__main-links-container">
          <Typography
            type="Caption1"
            className="footer-main-footer__links-title"
          >
            Knowledge
          </Typography>
          <hr className="footer-main-footer__links-underline" />
          <ul className="footer-main-footer__links-ul">
            <li className="footer-main-footer__links-link">
              <a href="#">
              <Typography type="FooterLink">Resources</Typography>
              </a>
            </li>
            <li className="footer-main-footer__links-link">
              <a href="#">
              <Typography type="FooterLink">Customer Stories</Typography>
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-main-footer__main-links-container">
          <Typography
            type="Caption1"
            className="footer-main-footer__links-title"
          >
            Company
          </Typography>
          <hr className="footer-main-footer__links-underline" />
          <ul className="footer-main-footer__links-ul">
            <li className="footer-main-footer__links-link">
              <a href="#">
              <Typography type="FooterLink">About Us</Typography>
              </a>
            </li>
            <li className="footer-main-footer__links-link">
              <a href="#">
              <Typography type="FooterLink">Trust Center</Typography>
              </a>
            </li>
            <li className="footer-main-footer__links-link">
              <a href="#">
              <Typography type="FooterLink">Leadership</Typography>
              </a>
            </li>
            <li className="footer-main-footer__links-link">
              <a href="#">
              <Typography type="FooterLink">Media & Press</Typography>
              </a>
            </li>
            <li className="footer-main-footer__links-link">
              <a href="#">
              <Typography type="FooterLink">Careers</Typography>
              </a>
            </li>
            <li className="footer-main-footer__links-link">
              <a href="#">
              <Typography type="FooterLink">Contact Us</Typography>
              </a>
            </li>
          </ul>
        </div>
      </>
    }
    logoChildren={
      <a href="https://emplifi-ui.netlify.app/" target="_self">
        <img
          className="footer-main-footer__image-logo"
          src={logo}
          alt="emplifi logo"
          title="emplifi logo"
          width="135px" 
          height="28px" 
        />
      </a>
    }
    socialCollection={
      <>
        <FooterSocialIcon
          iconChildren={<Icon name="facebook" size={24} colour="#FFFF" />}
        />
        <FooterSocialIcon
          iconChildren={<Icon name="twitter" size={24} colour="#FFFF" />}
        />
        <FooterSocialIcon
          iconChildren={
            <Icon name="linkedin-second" size={24} colour="#FFFF" />
          }
        />
      </>
    }
    children={
      <>
        <ul className="footer-three-column-footer__links-container">
          <li className="footer-three-column-footer__links-link">
            <a href="#">
              <Typography type="FooterLink">Privacy Statement</Typography>
              <Icon name="chevron-down" size={11} colour="#FFFFFF" />
            </a>
          </li>
          <li className="footer-three-column-footer__links-link">
            <a href="#">
            <Typography type="FooterLink">Terms & Conditions</Typography>
            <Icon name="chevron-down" size={11} colour="#FFFFFF" />
            </a>
          </li>
        </ul>
        <hr className="footer-main-footer__links-underline--terms-conditions" />
      </>
    }
    imgAlt="footer clouds"
    imgSrc={footerClouds}
    imgTitle="footer clouds"
    copyright={Copyright}
  />
);
