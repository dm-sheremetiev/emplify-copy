import { ReactNode } from 'react';
import './CustomerStories.scss';
export type CustomerStoriesProps = {
    id?: string;
    title?: string;
    storiesChildren?: ReactNode;
    titleColor?: string;
    backgroundColor?: string;
};
declare const CustomerStories: (props: CustomerStoriesProps) => JSX.Element;
export { CustomerStories };
export default CustomerStories;
