import { ExecutiveTeamMemberGroup, ExecutiveTeamMember, ExecutiveTeamMemberSocialIcon, Icon } from '../../../storybookBuild/index';
// import { useRouter } from 'next/router';
// import { useLanguageDetector } from 'context/langDetector';

// Interfaces
import { UiTeamMembers } from '@/interfaces/blocks';

export function UiTeamMembersComp(props: { block: UiTeamMembers }): JSX.Element {
  const { block } = props;

  // const router = useRouter();
  // const { langDetector } = useLanguageDetector();

  return (
    <ExecutiveTeamMemberGroup
      id={block?.anchorId}
      isColumnLayout={block?.isColumnLayout}
      membersChildren={
        block.teamMembersCollection.items.length > 0 &&
        block.teamMembersCollection.items.map((item, index) => {
          // Check if there is not translated text // Alert message
          // langDetector([item.role, item.bio], router.locale);
          return (
            <ExecutiveTeamMember
              key={index}
              imgSrc={item.image.url}
              imgAlt={item.image.description}
              imgTitle={item.image.title}
              name={`<h2>${item.name}</h2>`}
              role={item.role}
              text={item.bio}
              ctaText={item.ctaText}
              ctaLink={item.ctaLink}
              isRounded={item.isRounded}
              socialMediaChildren={
                item.socialLinksCollection.items.length > 0 &&
                item.socialLinksCollection.items.map((link, subIndex) => {
                  const target = link.target || '_blank';
                  return (
                    <ExecutiveTeamMemberSocialIcon
                      key={subIndex}
                      anchor={true}
                      href={link.externalLink}
                      target={target ? target : undefined}
                      iconChildren={<Icon name={link?.iconLink?.icon} size={20} colour="#1A4073" />}
                    />
                  );
                })
              }
            />
          );
        })
      }
    />
  );
}
