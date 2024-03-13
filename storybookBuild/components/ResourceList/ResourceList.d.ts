import { ReactNode } from 'react';
import './ResourceList.scss';
export type ResourceListProps = {
    id?: string;
    itemsChildren?: ReactNode;
    buttonChildren?: ReactNode;
};
declare const ResourceList: (props: ResourceListProps) => JSX.Element;
export { ResourceList };
export default ResourceList;
