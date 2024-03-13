import { select, text, withKnobs } from "@storybook/addon-knobs";
import React from "react";
import Button from "../Button/Button";
import { ShortBanner } from "./ShortBanner";
import ResourceImage from "../../assets/images/resource-short-banner-image-alt.png";
import ExecutiveImage from "../../assets/images/executive-short-banner-image.png";
import ArticlesImage from "../../assets/images/articles-short-banner-image.png";
import CampaignImage from "../../assets/images/the-chairman-is-tickled-pink-to-hear-from-his-girlfriend-who-is-texting-on-a-mobile-device-and-is_t20_Xze4w3.jpg";

export default {
	title: "Short Banner/Short Banner",
	component: ShortBanner,
	decorators: [withKnobs],
};

export const Playground = () => {
	return (
		<ShortBanner
			type={select("type", ["Resource", "Executive", "Articles"], "Resource")}
			title={text(
				"title",
				"Your resource center for everything CX, care, and marketing"
			)}
			paragraph={text(
				"paragraph",
				"The team of innovators that’s changing marketing, care and commerce as we know it."
			)}
			imgSrc={select(
				"imgSrc",
				[ResourceImage, ExecutiveImage, ArticlesImage],
				ResourceImage
			)}
			buttonChildren={<Button type="ProductPrimary">Optional</Button>}
		/>
	);
};

export const Resource = () => {
	return (
		<ShortBanner
			type="Resource"
			title="Your resource center for everything CX, care, and marketing"
			paragraph="Emplifi is helping global brands and agencies transform marketing, commerce, and care experiences, and achieve business results."
			imgSrc={ResourceImage}
		/>
	);
};
export const Campaign = () => {
	return (
		<ShortBanner
			type="campaign"
			title="What is the customer experience gap?"
			paragraph="The CX gap is the distance between what customers expect from their experiences with a brand, and how well these brands believe they are meeting those expectations."
			imgSrc={CampaignImage}
			// buttonChildren={<Button type="ProductPrimary">Optional</Button>}
		/>
	);
};

export const Executive = () => {
	return (
		<ShortBanner
			type="Executive"
			title="Meet our executive team"
			paragraph="The team of innovators that’s changing marketing, care and commerce as we know it."
			imgSrc={ExecutiveImage}
		/>
	);
};

export const Articles = () => {
	return (
		<ShortBanner
			type="Articles"
			title="Header hero short viewport"
			paragraph="Optional Sub-Header Copy - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
			imgSrc={ArticlesImage}
			buttonChildren={<Button type="ProductPrimary">Optional</Button>}
		/>
	);
};
