import { ReactNode } from 'react';
import './MarketForm.scss';
export type MarketFormProps = {
    id?: string;
    type: 'default' | 'alt' | 'article';
    title?: string;
    subTitle?: string;
    formChildren?: ReactNode | string;
    backgroundColor?: string;
    textColorTitle?: string;
    textColorSubTitle?: string;
};
declare const MarketForm: {
    (props: MarketFormProps): JSX.Element;
    defaultProps: {
        type: string;
    };
};
export default MarketForm;
