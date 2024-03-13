import { ReactNode } from 'react';
export type IconsType = 'grid' | 'thumbs-up' | 'cloud' | 'sms' | 'delivered' | 'image' | 'desktop' | 'add' | 'equals' | 'checklist' | 'knight' | 'checkout-success' | 'phone-call' | 'connect-success' | 'man' | 'woman' | 'support' | 'directions' | 'find-user' | 'payment' | 'settings' | 'hand-success' | 'lightbulb' | 'location' | 'care' | 'chat' | 'pen-tool' | 'idea' | 'brain' | 'atom' | 'calculator' | 'document' | 'storefront' | 'cash' | 'private-content' | 'phone' | 'email' | 'speaking' | 'laptop' | 'video-call' | 'package' | 'wallet' | 'person-checklist' | 'user-swap' | 'person-time' | 'safety-verified' | 'success' | 'email-confirmed' | 'calendar-confirmed' | 'man-confirmed' | 'woman-confirmed' | 'sms-confirmed' | 'laptop-confirmed' | 'bullseye' | 'sms-conversation' | 'iot' | 'eye' | 'devices' | 'pie-chart' | 'cell-phone' | 'heart' | 'profile' | 'chevron-down' | 'search-icon' | 'chevron-down-small' | 'twitter' | 'instagram' | 'linkedin' | 'empathy' | 'brand-connection' | 'facebook' | 'linkedin-second' | 'envelope' | 'menu' | 'menu-2' | 'close' | 'close-small' | 'cloud-message' | 'cloud-bag' | 'cloud-heart' | 'tiktok';
export type SingleIcon = {
    path?: ReactNode | ((id: string) => any);
    viewBox?: string;
    strokeWidth?: number;
};
export type CustomIconsCollection = {
    [key in IconsType]: SingleIcon;
};
declare const CustomIcons: CustomIconsCollection;
declare const getIconByName: (name: IconsType, pathId: string) => SingleIcon;
export { CustomIcons, getIconByName };
export default CustomIcons;
