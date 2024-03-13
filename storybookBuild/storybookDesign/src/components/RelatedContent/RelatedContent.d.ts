import { ReactNode } from 'react';
import './RelatedContent.scss';
export type RelatedContentProps = {
    id?: string;
    title?: string;
    cardChildren?: ReactNode | string;
};
declare const RelatedContent: (props: RelatedContentProps) => JSX.Element;
export { RelatedContent };
export default RelatedContent;
