import { ReactNode } from 'react';
import './ExecutiveTeamMember.scss';
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
declare const ExecutiveTeamMember: {
    (props: ExecutiveTeamMemberProps): JSX.Element;
    defaultProps: {
        imgSrc: string;
        imgAlt: string;
        imgTitle: string;
        name: string;
        role: string;
        text: string;
    };
};
declare const ExecutiveTeamMemberSocialIcon: {
    (props: ExecutiveTeamMemberSocialIconProps): JSX.Element;
    defaultProps: {
        anchor: boolean;
    };
};
declare const ExecutiveTeamMemberGroup: (props: ExecutiveTeamMemberGroupProps) => JSX.Element;
export { ExecutiveTeamMember, ExecutiveTeamMemberGroup, ExecutiveTeamMemberSocialIcon };
export default ExecutiveTeamMember;
