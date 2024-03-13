import React from 'react';
import Link from 'next/link';
import FloatingBox from './floating-box';
import ShareIcons from '../share-icons/share-icons';
import GreenhouseForm from '@/careers/components/greenhouse-form';
import { DepartmentsMap, PositionDetail } from '../../types/entities-types';

import boxStyles from './box.module.scss';
import gridStyles from './grid.module.scss';
import headingStyles from './heading.module.scss';
import breadcrumbStyles from './breadcrumb.module.scss';
import layoutStyles from '../../styles/modules/layout.module.scss';
import wysiwygStyles from '../../styles/modules/wysiwyg.module.scss';
import typographyStyles from '../../styles/modules/typography.module.scss';

type Props = {
  positionDetail: PositionDetail;
  departments: DepartmentsMap;
};

export default function PositionDetailTemplate({ positionDetail, departments }: Props): JSX.Element {
  const { title, content, location, departmentKeys, boardToken } = positionDetail;

  return (
    <article className={layoutStyles.container}>
      <div className={gridStyles.grid}>
        <div className={gridStyles.gridTop}>
          {departmentKeys.map((departmentKey) => (
            <Link
              prefetch={false}
              href="/careers/[departmentKey]"
              as={`/careers/${departmentKey}`}
              key={departmentKey}
              className={`${typographyStyles.paragraphSm} ${breadcrumbStyles.breadcrumb}`}
            >
              {departments.get(departmentKey).name}
            </Link>
          ))}
          <h1 className={`${typographyStyles.heading} ${headingStyles.heading}`}>{title}</h1>
        </div>
        <div
          className={`${gridStyles.gridContent} ${wysiwygStyles.wysiwygStyles}`}
          dangerouslySetInnerHTML={{
            __html: content
          }}
        />
        <div className={gridStyles.floatingBoxColumn}>
          <div className={gridStyles.boxHolder}>
            <FloatingBox positionDetail={positionDetail}>
              <div className={boxStyles.socials}>
                <ShareIcons title={title} description={`${title} job in ${location}`} twDescription={`${title} job in ${location} @Socialbakers`} />
              </div>
            </FloatingBox>
          </div>
        </div>
      </div>
      <GreenhouseForm positionId={positionDetail.urlKey} boardToken={boardToken} />
    </article>
  );
}
