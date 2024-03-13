import './IconLinks.scss';
import { IconsType } from "../../assets/icons";
export type IconLinksProps = {
    id?: string;
    title: string;
    type?: string;
    links: {
        name: IconsType;
        title: string;
        href: string;
        target: string;
    }[];
};
declare const IconLinks: (props: IconLinksProps) => JSX.Element;
export default IconLinks;
