import { FC, ReactNode } from 'react';
import './ContactBanner.scss';
export type ContactBannerProps = {
    id?: string;
    className?: string;
    title?: string | any;
    body?: string;
    imgSrc?: string;
    imgAlt?: string;
    imgTitle?: string;
    children?: ReactNode;
    isRight?: boolean;
};
declare const ContactBanner: FC<ContactBannerProps>;
export default ContactBanner;
