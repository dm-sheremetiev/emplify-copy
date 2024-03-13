import Resources from "./Resources";
import React from "react";
import { select, text, withKnobs } from "@storybook/addon-knobs";
import colours from "../../assets/colours";
import Button from "../Button/Button";
import ResourceAltCardImage from "../../assets/images/resource-alt-card-image.png";
import ResourceAltCard from "../ResourceAltCard/ResourceAltCard";

export default {
	title: "Resources/Resources",
	component: Resources,
	decorators: [withKnobs],
	// argTypes: {
	// 	layout: {
	// 		options: ["left", "center"],
	// 		control: { type: "select" },
	// 	},
	// 	type: {
	// 		options: [null, "campaign"],
	// 		control: { type: "select" },
	// 	},
	// },
};

export const Playground = () => (
	<Resources
		title={text("title", "The latest news and insights from Emplifi")}
		titleColor={select(
			"titleColor",
			[colours.abbey, colours.astronautBlue, colours.silver, colours.gallery],
			colours.abbey
		)}
		backgroundColor={select(
			"backgroundColor",
			[colours.abbey, colours.astronautBlue, colours.silver, colours.gallery],
			colours.gallery
		)}
		layout={select("Layout", ["", "left", "center"], "")}
		type={select("Type", ["", "campaign"], "")}
		cardsChildren={
			<>
				<ResourceAltCard
					imageSrc={ResourceAltCardImage}
					imageAlt="Resource Alt Card"
					imageTitle="Resource Alt Card"
					title="Top 40 customer experience statistics to know in 2021"
					body="Closing the customer experience gap is only becoming more critical for brands. Here are the customer experience trends and stats every customer-centric brand must know today."
					buttonChildren={
						<>
							<Button type="Primary">Download</Button>
						</>
					}
				/>
				<ResourceAltCard
					imageSrc={ResourceAltCardImage}
					imageAlt="Resource Alt Card"
					imageTitle="Resource Alt Card"
					title="Top 40 customer experience statistics to know in 2021"
					body="Closing the customer experience gap is only becoming more critical for brands. Here are the customer experience trends and stats every customer-centric brand must know today. Closing the customer experience gap is only becoming more critical for brands. Here are the customer experience trends and stats every customer-centric brand must know today. "
					buttonChildren={
						<>
							<Button type="Secondary">Download</Button>
						</>
					}
				/>
				<ResourceAltCard
					imageSrc={ResourceAltCardImage}
					imageAlt="Resource Alt Card"
					imageTitle="Resource Alt Card"
					title="Top 40 customer experience statistics to know in 2021"
					body="Closing the customer experience gap is only becoming more critical for brands. Here are the customer experience trends and stats every customer-centric brand must know today. Closing the customer experience gap is only becoming more critical for brands. Here are the customer experience trends and stats every customer-centric brand must know today. Closing the customer experience gap is only becoming more critical for brands. Here are the customer experience trends and stats every customer-centric brand must know today."
					buttonChildren={
						<>
							<Button type="PassiveAlt">Download</Button>
						</>
					}
				/>
			</>
		}
	/>
);

export const RegularTwoChildren = () => (
	<Resources
		title="The latest news and insights from Emplifi"
		titleColor={colours.abbey}
		backgroundColor={colours.gallery}
		layout={select("Layout", ["", "left", "center"], "")}
		cardsChildren={
			<>
				<ResourceAltCard
					imageSrc={ResourceAltCardImage}
					imageAlt="Resource Alt Card"
					imageTitle="Resource Alt Card"
					title="Top 40 customer experience statistics to know in 2021"
					body="Closing the customer experience gap is only becoming more critical for brands. Here are the customer experience trends and stats every customer-centric brand must know today."
					buttonChildren={
						<>
							<Button type="Primary">Download</Button>
						</>
					}
				/>
				<ResourceAltCard
					imageSrc={ResourceAltCardImage}
					imageAlt="Resource Alt Card"
					imageTitle="Resource Alt Card"
					title="Top 40 customer experience statistics to know in 2021"
					body="Closing the customer experience gap is only becoming more critical for brands. Here are the customer experience trends and stats every customer-centric brand must know today. Closing the customer experience gap is only becoming more critical for brands. Here are the customer experience trends and stats every customer-centric brand must know today. "
					buttonChildren={
						<>
							<Button type="Secondary">Download</Button>
						</>
					}
				/>
			</>
		}
	/>
);

export const RegularThreeChildren = () => (
	<Resources
		title="The latest news and insights from Emplifi"
		titleColor={colours.abbey}
		backgroundColor={colours.gallery}
		layout={select("Layout", ["", "left", "center"], "")}
		cardsChildren={
			<>
				<ResourceAltCard
					imageSrc={ResourceAltCardImage}
					imageAlt="Resource Alt Card"
					imageTitle="Resource Alt Card"
					title="Top 40 customer experience statistics to know in 2021"
					body="Closing the customer experience gap is only becoming more critical for brands. Here are the customer experience trends and stats every customer-centric brand must know today."
					buttonChildren={
						<>
							<Button type="Primary">Download</Button>
						</>
					}
				/>
				<ResourceAltCard
					imageSrc={ResourceAltCardImage}
					imageAlt="Resource Alt Card"
					imageTitle="Resource Alt Card"
					title="Top 40 customer experience statistics to know in 2021"
					body="Closing the customer experience gap is only becoming more critical for brands. Here are the customer experience trends and stats every customer-centric brand must know today. Closing the customer experience gap is only becoming more critical for brands. Here are the customer experience trends and stats every customer-centric brand must know today. "
					buttonChildren={
						<>
							<Button type="Secondary">Download</Button>
						</>
					}
				/>
				<ResourceAltCard
					imageSrc={ResourceAltCardImage}
					imageAlt="Resource Alt Card"
					imageTitle="Resource Alt Card"
					title="Top 40 customer experience statistics to know in 2021"
					body="Closing the customer experience gap is only becoming more critical for brands. Here are the customer experience trends and stats every customer-centric brand must know today. Closing the customer experience gap is only becoming more critical for brands. Here are the customer experience trends and stats every customer-centric brand must know today. Closing the customer experience gap is only becoming more critical for brands. Here are the customer experience trends and stats every customer-centric brand must know today."
					buttonChildren={
						<>
							<Button type="PassiveAlt">Download</Button>
						</>
					}
				/>
			</>
		}
	/>
);

export const RegularFourChildren = () => (
	<Resources
		title="The latest news and insights from Emplifi"
		titleColor={colours.abbey}
		backgroundColor={colours.gallery}
		layout={select("Layout", ["", "left", "center"], "")}
		cardsChildren={
			<>
				<ResourceAltCard
					imageSrc={ResourceAltCardImage}
					imageAlt="Resource Alt Card"
					imageTitle="Resource Alt Card"
					title="Top 40 customer experience statistics to know in 2021"
					body="Closing the customer experience gap is only becoming more critical for brands. Here are the customer experience trends and stats every customer-centric brand must know today."
					buttonChildren={
						<>
							<Button type="Primary">Download</Button>
						</>
					}
				/>
				<ResourceAltCard
					imageSrc={ResourceAltCardImage}
					imageAlt="Resource Alt Card"
					imageTitle="Resource Alt Card"
					title="Top 40 customer experience statistics to know in 2021"
					body="Closing the customer experience gap is only becoming more critical for brands. Here are the customer experience trends and stats every customer-centric brand must know today. Closing the customer experience gap is only becoming more critical for brands. Here are the customer experience trends and stats every customer-centric brand must know today. "
					buttonChildren={
						<>
							<Button type="Secondary">Download</Button>
						</>
					}
				/>
				<ResourceAltCard
					imageSrc={ResourceAltCardImage}
					imageAlt="Resource Alt Card"
					imageTitle="Resource Alt Card"
					title="Top 40 customer experience statistics to know in 2021"
					body="Closing the customer experience gap is only becoming more critical for brands. Here are the customer experience trends and stats every customer-centric brand must know today. Closing the customer experience gap is only becoming more critical for brands. Here are the customer experience trends and stats every customer-centric brand must know today. Closing the customer experience gap is only becoming more critical for brands. Here are the customer experience trends and stats every customer-centric brand must know today."
					buttonChildren={
						<>
							<Button type="PassiveAlt">Download</Button>
						</>
					}
				/>
				<ResourceAltCard
					imageSrc={ResourceAltCardImage}
					imageAlt="Resource Alt Card"
					imageTitle="Resource Alt Card"
					title="Top 40 customer experience statistics to know in 2021"
					body="Closing the customer experience gap is only becoming more critical for brands. Here are the customer experience trends and stats every customer-centric brand must know today. Closing the customer experience gap is only becoming more critical for brands. Here are the customer experience trends and stats every customer-centric brand must know today. Closing the customer experience gap is only becoming more critical for brands. Here are the customer experience trends and stats every customer-centric brand must know today."
					buttonChildren={
						<>
							<Button type="PassiveAlt">Download</Button>
						</>
					}
				/>
			</>
		}
	/>
);
