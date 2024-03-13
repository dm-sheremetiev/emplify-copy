import React, { ReactNode, useState } from "react";
import "./AlertBar.scss";
import Typography from "../Typography/Typography";
import Icon, { IconProps } from "../Icon/Icon";
import { IconsType } from "../../assets/icons";

export type AlertBarProps = {
	backgroundColor: string;
	message: string;
	textColor?: string;
	buttonChildren?: ReactNode;
	onPress?: () => void;
	isToggle?: boolean;
};

const AlertBar = (props: AlertBarProps) => {
	return (
		<>
			{props.isToggle && (
				<div
					className="emplifi-alert-bar"
					style={{
						backgroundColor: props.backgroundColor,
						color: props.textColor,
					}}
				>
					<div className="emplifi-alert-bar__text-container">
						<Typography type="Button1" className="emplifi-alert-bar__text">
							{props.message}
						</Typography>
					</div>
					<div className="emplifi-alert-bar__close-button-container">
						<Typography
							type="Button1"
							className="emplifi-alert-bar__button-msg"
						>
							{props.buttonChildren}
						</Typography>
						<button
							className="emplifi-alert-bar__close-container"
							onClick={props.onPress}
						>
							<Icon name="close" size={18} color={props.textColor} />
						</button>
					</div>
				</div>
			)}
		</>
	);
};

export default AlertBar;
