import { ReactNode } from "react";
import "./AlertBar.scss";
export type AlertBarProps = {
    backgroundColor: string;
    message: string;
    textColor?: string;
    buttonChildren?: ReactNode;
    onPress?: () => void;
    isToggle?: boolean;
};
declare const AlertBar: (props: AlertBarProps) => JSX.Element;
export default AlertBar;
