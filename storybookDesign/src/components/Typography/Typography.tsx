import './Typography.scss';
import React, { ReactNode, Ref } from "react";

export type TypographyProps = {
    id?: string;
    className?: string;
    children?: ReactNode | string;
    as?: any; //Used to pass a React component to render as
    type: TypographyType;
    style?: React.CSSProperties;
    theme?: string;
    mobile?: boolean;
};

export type TypographyType =
  'Headline1' |
  'Headline2' |
  'Headline3' |
  'Headline4' |
  'Headline5' |
  'Caption1' |
  'Body1' |
  'Body2' |
  'Body3' |
  'Link1' |
  'Link2' |
  'Link3' |
  'Button1' |
  'Button2' |
  'Label1' |
  'Label2' |
  'BrandGuideH1' |
  'BrandGuideH2' |
  'BrandGuideH3' |
  'BrandGuideH4' |
  'BrandGuideH5' |
  'BrandGuideCopy' |
  'BrandGuideButton' |
  'HomeHeroTitle' |
  'HomeHeroSubTitle' |
  'HomeHeroCopy' |
  'HomeCTATitle' |
  'HomeCTACopy' |
  'HomeCardTitle' |
  'HomeCardCopy' |
  'HomeCardCopyBold' |
  'HomeBannerTitle' |
  'HomeBannerCopy' |
  'HomeTestimonialCopy' |
  'HomeTestimonialCopyBold' |
  'HomeTestimonialDetails' |
  'MenuSubMenuTitle' |
  'HomeSubMenuLink' |
  'HomeMiscLink' | 
  'ProductHeaderLink' |
  'FooterLink' |
  'AltFooterLink' |
  'Copyright' |
  'ResourceParagraph' |
  'Eyebrow' |
  'MenuTitle' |
  'MenuSubMenu1' |
  'MenuSubMenu2' |
  'MenuSubMenu3' |
  'MenuSubMenuTitle2' |
  'MenuSubMenuBody' |
  'MenuSubMenuLink'
;

export const defaultVariantMapping: { [key in TypographyType]: string } = {
    'Headline1': 'h1',
    'Headline2': 'h2',
    'Headline3': 'h3',
    'Headline4': 'h3',
    'Headline5': 'h5',
    'Caption1': 'p',
    'Body1': 'p',
    'Body2': 'p',
    'Body3': 'p',
    'Link1': 'p',
    'Link2': 'p',
    'Link3': 'p',
    'Button1': 'span',
    'Button2': 'span',
    'Label1': 'h2',
    'Label2': 'h3',
    'BrandGuideH1': 'h1',
    'BrandGuideH2': 'h2',
    'BrandGuideH3': 'h3',
    'BrandGuideH4': 'h4',
    'BrandGuideH5': 'h5',
    'BrandGuideCopy': 'p',
    'BrandGuideButton': 'p',
    'HomeHeroTitle': 'h1',
    'HomeHeroSubTitle': 'h3',
    'HomeHeroCopy': 'p',
    'HomeCTATitle': 'h2',
    'HomeCTACopy': 'p',
    'HomeCardTitle': 'h5',
    'HomeCardCopy': 'p',
    'HomeCardCopyBold': 'p',
    'HomeBannerTitle': 'h2',
    'HomeBannerCopy': 'p',
    'HomeTestimonialCopy': 'p',
    'HomeTestimonialCopyBold': 'p',
    'HomeTestimonialDetails': 'p',
    'MenuSubMenuTitle': 'span',
    'HomeSubMenuLink': 'span',
    'HomeMiscLink': 'span',
    'ProductHeaderLink': 'span',
    'FooterLink': 'p',
    'AltFooterLink': 'p',
    'Copyright': 'p',
    'ResourceParagraph': 'span',
    'Eyebrow': 'p',
    'MenuTitle': 'span',
    'MenuSubMenu1': 'span',
    'MenuSubMenu2': 'span',
    'MenuSubMenu3': 'span',
    'MenuSubMenuTitle2': 'span',
    'MenuSubMenuBody': 'span',
    'MenuSubMenuLink': 'span',
};

const generateClassName = (props: TypographyProps) => `typography typography--${(props.type as string).replace(/ /g, "-")} ${props.mobile ? ('typography--'+(props.type as string).replace(/ /g, "-")+'--mobile-type'):('')} ${props.className || ""}`

const Typography = React.forwardRef<Ref<any>, TypographyProps & React.BaseHTMLAttributes<HTMLDivElement>>((props, ref) => {

  const Component = props.as || defaultVariantMapping[props.type] || 'div';
  const className = generateClassName(props);

  return (
    <Component {...props} className={className} style={props.style}>
      {props.children}
    </Component>
  )
});

export default Typography;