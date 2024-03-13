import './Typography.scss';
import React, { ReactNode } from "react";
export type TypographyProps = {
    id?: string;
    className?: string;
    children?: ReactNode | string;
    as?: any;
    type: TypographyType;
    style?: React.CSSProperties;
    theme?: string;
    mobile?: boolean;
};
export type TypographyType = 'Headline1' | 'Headline2' | 'Headline3' | 'Headline4' | 'Headline5' | 'Caption1' | 'Body1' | 'Body2' | 'Body3' | 'Link1' | 'Link2' | 'Link3' | 'Button1' | 'Button2' | 'Label1' | 'Label2' | 'BrandGuideH1' | 'BrandGuideH2' | 'BrandGuideH3' | 'BrandGuideH4' | 'BrandGuideH5' | 'BrandGuideCopy' | 'BrandGuideButton' | 'HomeHeroTitle' | 'HomeHeroSubTitle' | 'HomeHeroCopy' | 'HomeCTATitle' | 'HomeCTACopy' | 'HomeCardTitle' | 'HomeCardCopy' | 'HomeCardCopyBold' | 'HomeBannerTitle' | 'HomeBannerCopy' | 'HomeTestimonialCopy' | 'HomeTestimonialCopyBold' | 'HomeTestimonialDetails' | 'MenuSubMenuTitle' | 'HomeSubMenuLink' | 'HomeMiscLink' | 'ProductHeaderLink' | 'FooterLink' | 'AltFooterLink' | 'Copyright' | 'ResourceParagraph' | 'Eyebrow' | 'MenuTitle' | 'MenuSubMenu1' | 'MenuSubMenu2' | 'MenuSubMenu3' | 'MenuSubMenuTitle2' | 'MenuSubMenuBody' | 'MenuSubMenuLink';
export declare const defaultVariantMapping: {
    [key in TypographyType]: string;
};
declare const Typography: React.ForwardRefExoticComponent<TypographyProps & React.BaseHTMLAttributes<HTMLDivElement> & React.RefAttributes<React.Ref<any>>>;
export default Typography;
