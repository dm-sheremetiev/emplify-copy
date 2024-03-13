import React from 'react';
import FeatureSection from '@/careers/components/department-detail/feature-section';
import FeatureText from '@/careers/components/department-detail/feature-section/feature-text';
import { DepartmentsCopy } from '@/careers/types/copy-types';
import ContentfulImage from '../contentful-image';

export type DepartmentCopyProps = {
  copy: Pick<DepartmentsCopy, 'feature1' | 'feature2' | 'feature1Image' | 'feature2Image'>;
};

const imageWidths = [268, 360, 470, 554];
const imageSizes =
  '(min-width: 1200px) 554px, (min-width: 1000px) 470px, (min-width: 780px) 360px, (min-width: 580px) 510px, (min-width: 340px) calc(100vw - 32px), 268px';

export default function DepartmentCopy({ copy }: DepartmentCopyProps): JSX.Element {
  const { feature1, feature2, feature1Image, feature2Image } = copy;
  return (
    <>
      {feature1 && (
        <FeatureSection>
          <FeatureText content={feature1} />
          {feature1Image && <ContentfulImage image={feature1Image} expectedFormat="jpg" widths={imageWidths} sizes={imageSizes} />}
        </FeatureSection>
      )}

      {feature2 && (
        <FeatureSection reverse>
          <FeatureText content={feature2} />
          {feature2Image && <ContentfulImage image={feature2Image} expectedFormat="jpg" widths={imageWidths} sizes={imageSizes} />}
        </FeatureSection>
      )}
    </>
  );
}
