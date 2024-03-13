//@ts-nocheck
import React from "react";
import ExecutiveTeamMember, { ExecutiveTeamMemberSocialIcon, ExecutiveTeamMemberGroup } from './ExecutiveTeamMember';
import Icon from '../Icon/Icon';
import {
  withKnobs,
  text,
  select,
} from "@storybook/addon-knobs";
import MarkZablanImg from '../../assets/images/markzablan.jpg';

export default {
  title: "Executive Team/Executive Team Member",
  component: ExecutiveTeamMember,
  decorators: [withKnobs],
};

export const Playground = () => {
  return (
    <ExecutiveTeamMember 
      imgSrc={select('imgSrc', [MarkZablanImg, 'https://via.placeholder.com/403x403'], MarkZablanImg)}
      imgAlt={text('imgAlt', 'Executive Team Member Image Alt')}
      imgTitle={text('imgTitle', 'Executive Team Member Image Title')}
      name={text('name', 'Mark Zablan')}
      role={text('role', 'Chief Executive Officer')}
      socialMediaChildren={
        <>
          <ExecutiveTeamMemberSocialIcon 
            anchor={true} 
            iconChildren={
              <Icon
                name='twitter'
                size={20}
                colour='#1A4073'
              />
            }
          />
          <ExecutiveTeamMemberSocialIcon 
            iconChildren={
              <Icon
                name='instagram'
                size={20}
                colour='#1A4073'
              />
            }
          />
          <ExecutiveTeamMemberSocialIcon 
            iconChildren={
              <Icon
                name='linkedin'
                size={20}
                colour='#1A4073'
              />
            }
          />
        </>
      }
      text={text('text', 'A seasoned executive, Mark brings more than 25 years of experience in executive roles with high-growth SaaS cloud companies in the areas of digital marketing, content management, customer experience (CX), and data platforms. Mark has a proven track record of delivering breakout performance at various B2B technology market leaders due to his particular expertise in strategy development, operational excellence and Go-to-Market transformation. Before his current role, Mark served as Chief Revenue Officer at Sitecore, President of EMEA at Adobe and Group President of Digital Marketing Services at Experian where he always believed the key to success is directly tied to customer success.')}
    />
  )
}

export const Group = () => {
  return (
    <ExecutiveTeamMemberGroup 
      membersChildren={
        <>
          <ExecutiveTeamMember 
            imgSrc={MarkZablanImg}
            imgAlt="Executive Team Member Image Alt"
            imgTitle="Executive Team Member Image Title"
            name="Mark Zablan"
            role="Chief Executive Officer"
            socialMediaChildren={
              <>
                <ExecutiveTeamMemberSocialIcon 
                  anchor={true} 
                  iconChildren={
                    <Icon
                      name='twitter'
                      size={20}
                      colour='#1A4073'
                    />
                  }
                />
                <ExecutiveTeamMemberSocialIcon 
                  iconChildren={
                    <Icon
                      name='instagram'
                      size={20}
                      colour='#1A4073'
                    />
                  }
                />
                <ExecutiveTeamMemberSocialIcon 
                  iconChildren={
                    <Icon
                      name='linkedin'
                      size={20}
                      colour='#1A4073'
                    />
                  }
                />
              </>
            }   
            text="A seasoned executive, Mark brings more than 25 years of experience in executive roles with high-growth SaaS cloud companies in the areas of digital marketing, content management, customer experience (CX), and data platforms. Mark has a proven track record of delivering breakout performance at various B2B technology market leaders due to his particular expertise in strategy development, operational excellence and Go-to-Market transformation. Before his current role, Mark served as Chief Revenue Officer at Sitecore, President of EMEA at Adobe and Group President of Digital Marketing Services at Experian where he always believed the key to success is directly tied to customer success."
          />
          <ExecutiveTeamMember 
            imgSrc={MarkZablanImg}
            imgAlt="Executive Team Member Image Alt"
            imgTitle="Executive Team Member Image Title"
            name="Mark Zablan"
            role="Chief Executive Officer"
            socialMediaChildren={
              <>
                <ExecutiveTeamMemberSocialIcon 
                  anchor={true} 
                  iconChildren={
                    <Icon
                      name='twitter'
                      size={20}
                      colour='#1A4073'
                    />
                  }
                />
                <ExecutiveTeamMemberSocialIcon 
                  iconChildren={
                    <Icon
                      name='instagram'
                      size={20}
                      colour='#1A4073'
                    />
                  }
                />
                <ExecutiveTeamMemberSocialIcon 
                  iconChildren={
                    <Icon
                      name='linkedin'
                      size={20}
                      colour='#1A4073'
                    />
                  }
                />
              </>
            }
            text="A seasoned executive, Mark brings more than 25 years of experience in executive roles with high-growth SaaS cloud companies in the areas of digital marketing, content management, customer experience (CX), and data platforms. Mark has a proven track record of delivering breakout performance at various B2B technology market leaders due to his particular expertise in strategy development, operational excellence and Go-to-Market transformation. Before his current role, Mark served as Chief Revenue Officer at Sitecore, President of EMEA at Adobe and Group President of Digital Marketing Services at Experian where he always believed the key to success is directly tied to customer success."
          />
          <ExecutiveTeamMember 
            imgSrc={MarkZablanImg}
            imgAlt="Executive Team Member Image Alt"
            imgTitle="Executive Team Member Image Title"
            name="Mark Zablan"
            role="Chief Executive Officer"
            socialMediaChildren={
              <>
                <ExecutiveTeamMemberSocialIcon 
                  anchor={true} 
                  iconChildren={
                    <Icon
                      name='twitter'
                      size={20}
                      colour='#1A4073'
                    />
                  }
                />
                <ExecutiveTeamMemberSocialIcon 
                  iconChildren={
                    <Icon
                      name='instagram'
                      size={20}
                      colour='#1A4073'
                    />
                  }
                />
                <ExecutiveTeamMemberSocialIcon 
                  iconChildren={
                    <Icon
                      name='linkedin'
                      size={20}
                      colour='#1A4073'
                    />
                  }
                />
              </>
            }
            text="A seasoned executive, Mark brings more than 25 years of experience in executive roles with high-growth SaaS cloud companies in the areas of digital marketing, content management, customer experience (CX), and data platforms. Mark has a proven track record of delivering breakout performance at various B2B technology market leaders due to his particular expertise in strategy development, operational excellence and Go-to-Market transformation. Before his current role, Mark served as Chief Revenue Officer at Sitecore, President of EMEA at Adobe and Group President of Digital Marketing Services at Experian where he always believed the key to success is directly tied to customer success."
          />
        </>       
      }
    />
  )
}
