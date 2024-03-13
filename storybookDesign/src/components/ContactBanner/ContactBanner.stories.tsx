import ContactBanner from "./ContactBanner";
import React from "react";
import ContactImage from "../../assets/images/contact_image.png";

export default {
  title: "Contact / Contact Banner",
  component: ContactBanner,
};

export const Playground = ({ body, imgSrc, imgAlt, imgTitle , isRight}: any) => (
  <div>
    <ContactBanner
      title="Get in touch <br /> with our team"
      body={body}
      imgSrc={imgSrc}
      imgAlt={imgAlt}
      imgTitle={imgTitle}
    />
  </div>
);

ContactBanner.defaultProps = {
  body:
    "Want to schedule a conversation with our experts or see personalized platform demo - sign up. Our teams will get back to you as soon as possible.",
  imgSrc: ContactImage,
  imgAlt: "Contact Image",
  imgTitle: "Contact Title",
  isRight: false
};
