import React from "react";
import IconLinks from './IconLinks';
import {IconsType} from "../../assets/icons";

export default {
  title: "IconLinks/IconLinks",
  component: IconLinks,
  decorators: [],
  argTypes: {
    links: {
      control: {type: "object"},
    }
  }
};

export const Playground = ({title, links}: any) => (
  <IconLinks id='emplifi-icon-links' title={title} links={links}/>
);

IconLinks.defaultProps = {
    title: "Follow Emplifi on Social",
    links: [
        {
            name: 'facebook' as IconsType,
            href: 'https://www.facebook.com/Emplifi/',
            target: '',
            title: 'Facebook'
        },
        {
            name: 'linkedin' as IconsType,
            href: 'https://www.linkedin.com/company/emplifi',
            target: '_blank',
            title: 'LinkedIn'
        },
        {
            name: 'twitter' as IconsType,
            href: 'https://twitter.com/emplifi_io',
            target: '_blank',
            title: 'Twitter'
        },
        {
            name: 'instagram' as IconsType,
            href: 'https://www.instagram.com/emplifi/',
            target: '_blank',
            title: 'Facebook'
        },
        {
            name: 'tiktok' as IconsType,
            href: 'https://www.tiktok.com/search?q=emplifi&lang=en',
            target: '_blank',
            title: 'Tiktok'
        },
    ]
};