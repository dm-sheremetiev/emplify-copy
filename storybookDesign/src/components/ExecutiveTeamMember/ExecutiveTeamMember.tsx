import React, { ReactNode } from 'react';
import './ExecutiveTeamMember.scss';
import Typography from '../Typography/Typography';
import { imageContentfulTransformUrl } from '../../utils/contenful-helper-functions';

export type ExecutiveTeamMemberProps = {
  id?: string;
  imgSrc?: string;
  isRounded?: boolean;
  imgAlt?: string;
  imgTitle?: string;
  name?: string;
  role?: string;
  socialMediaChildren?: ReactNode;
  text?: string;
  ctaText?: string;
  ctaLink?: string;
};

export type ExecutiveTeamMemberSocialIconProps = {
  id?: string;
  anchor?: boolean;
  href?: string;
  target?: string;
  iconChildren?: ReactNode | string;
};

export type ExecutiveTeamMemberGroupProps = {
  id?: string;
  membersChildren: ReactNode;
  isColumnLayout?: boolean;
};

const ExecutiveTeamMember = (props: ExecutiveTeamMemberProps) => {
  return (
    <div id={props.id} className="emplifi-executive-team-member">
      <div
        className={`emplifi-executive-team-member__image-container ${
          props.isRounded ? `emplifi-executive-team-member__image-container--isRounded` : null
        }`}
      >
        <div className="emplifi-executive-team-member__cloud emplifi-executive-team-member__cloud--top"></div>
        {props.imgSrc && (
          <img
            className="emplifi-executive-team-member__image"
            src={imageContentfulTransformUrl(props?.imgSrc)}
            alt={props.imgAlt || props.imgTitle}
            title={props.imgTitle}
            loading="lazy"
            width="300px"
            height="300px"
          />
        )}
        <div className="emplifi-executive-team-member__cloud emplifi-executive-team-member__cloud--bottom"></div>
      </div>
      <div className="emplifi-executive-team-member__info">
        {props.name && <div className="typography typography--Headline2" dangerouslySetInnerHTML={{ __html: props.name || '' }}></div>}
        {props.name && <div className="typography typography--Headline3" dangerouslySetInnerHTML={{ __html: props.role || '' }}></div>}
        {props.socialMediaChildren && <div className="emplifi-executive-team-member__socials">{props.socialMediaChildren}</div>}
        {props.text && (
          <Typography type="Body1" as="p">
            {props.text}
          </Typography>
        )}
        {props.ctaText && (
          <a className="cta-button" href={props.ctaLink}>
            {props.ctaText}
          </a>
        )}
      </div>
    </div>
  );
};

const ExecutiveTeamMemberSocialIcon = (props: ExecutiveTeamMemberSocialIconProps) => {
  if (props.anchor) {
    return (
      <a
        id={props.id}
        href={props.href}
        target={props.target ? props.target : undefined}
        rel={props.target === '_blank' ? 'noopener noreferrer' : undefined}
      >
        <div className="emplifi-executive-team-member-social-icon emplifi-executive-team-member-social-icon--anchor">{props.iconChildren}</div>
      </a>
    );
  }

  return (
    <div id={props.id} className="emplifi-executive-team-member-social-icon">
      {props.iconChildren}
    </div>
  );
};

const ExecutiveTeamMemberGroup = (props: ExecutiveTeamMemberGroupProps) => {
  return (
    <div
      id={props.id}
      className={`emplifi-executive-team-member-group ${props.isColumnLayout ? `emplifi-executive-team-member-group--isColumnLayout` : null}`}
    >
      {props.membersChildren}
    </div>
  );
};

ExecutiveTeamMember.defaultProps = {
  imgSrc: 'https://via.placeholder.com/403x403',
  imgAlt: 'Executive Team Member Image Alt',
  imgTitle: 'Executive Team Member Image Title',
  name: 'Executive Team Member Name',
  role: 'Executive Team Member Role',
  text: 'Executive Team Member Text'
};

ExecutiveTeamMemberSocialIcon.defaultProps = {
  anchor: false
};

export { ExecutiveTeamMember, ExecutiveTeamMemberGroup, ExecutiveTeamMemberSocialIcon };
export default ExecutiveTeamMember;
