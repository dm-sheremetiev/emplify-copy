import { select, text, withKnobs } from "@storybook/addon-knobs";
import React from "react";
import Button from "../Button/Button";
import { ResourceFeatureCard } from "./ResourceFeatureCard";
import DesktopImage from "../../assets/images/recource_img_example.png";
import MobileImage from "../../assets/images/recource_img_example_mobile.png";

export default {
	title: "Card/Resource Feature Card",
	component: ResourceFeatureCard,
	decorators: [withKnobs],
	parameters: {
		backgrounds: {
			default: "light",
		},
	},
};

export const Playground = () => {
	return (
		<ResourceFeatureCard
			label="Optional"
			imgSrc={select("imgSrc", [MobileImage, MobileImage], MobileImage)}
			imgSrcDesktop={select(
				"imgSrcDesktop",
				[DesktopImage, DesktopImage],
				DesktopImage
			)}
			imgAlt={text("imgAlt", "Placeholder Alt")}
			imgTitle={text("imgTitle", "Placeholder Title")}
			meta={text("meta", "Optional Post Meta")}
			title={text(
				"title",
				"Featured post headline - What do people really expect"
			)}
			paragraph={text(
				"paragraph",
				"75% of consumers say that businesses don’t meet their customer service expectations. What are they exactly? We surveyed the modern consumer to find out."
			)}
			buttonChildren={
				<Button type="ProductPrimary">
					{text("Button Text", "Read More")}
				</Button>
			}
			variations={select("variations", ["1", "2", "3"], "3")}
			position={select("position", ["top", "left", "right"], "left")}
		/>
	);
};
