import Feature, { FeatureGroup } from "./Feature";
import React from "react";
import { CustomIcons } from "../../assets/icons";

export default {
	title: "Feature/Feature",
	component: Feature,
};

export const Playground = ({ title, paragraph, icon, ...args }: any) => (
	<div>
		<Feature title={title} paragraph={paragraph} icon={icon} {...args} />
	</div>
);
Playground.args = {
	title: "Social media listening: turn insights into more engagement",
	paragraph:
		"<p>If you are a current client and need assistance, <a href='#'>please visit our support the Socialbakers</a> or <a href='#'>Astute support section</a> where you can get in touch with our care teams right away.</p>",
	icon: "sms-conversation",
};
Playground.argTypes = {
	icon: { control: { type: "select", options: Object.keys(CustomIcons) } },
};
export const NoIcon = ({ title, paragraph, icon, ...args }: any) => (
	<div>
		<Feature title={title} paragraph={paragraph} {...args} />
	</div>
);
NoIcon.args = {
	title: "Social media listening: turn insights into more engagement",
	paragraph:
		"<p>If you are a current client and need assistance, <a href='#'>please visit our support the Socialbakers</a> or <a href='#'>Astute support section</a> where you can get in touch with our care teams right away.</p> <p>If you are a current client and need assistance, <a href='#'>please visit our support the Socialbakers</a> or <a href='#'>Astute support section</a> where you can get in touch with our care teams right away.</p>",
};

export const Group = ({
	groupTitle,
	title,
	paragraph,
	icon,
	title2,
	paragraph2,
	icon2,
	title3,
	paragraph3,
	icon3,
	...args
}: any) => (
	<>
		<FeatureGroup title={groupTitle}>
			<Feature title={title} paragraph={paragraph} icon={icon} {...args} />
			<Feature title={title2} paragraph={paragraph2} icon={icon2} {...args} />
			<Feature title={title3} paragraph={paragraph3} icon={icon3} {...args} />
		</FeatureGroup>
		<FeatureGroup>
			<Feature title={title} paragraph={paragraph} icon={icon} {...args} />
			<Feature title={title3} paragraph={paragraph3} icon={icon3} {...args} />
		</FeatureGroup>
	</>
);
Group.args = {
	groupTitle: "<h3>Social media listening: turn insights into more engagement</h3>",
	title: "Social media listening: turn insights into more engagement",
	paragraph:
		"<p>If you are a current client and need assistance, <a href='#'>please visit our support the Socialbakers</a> or <a href='#'>Astute support section</a> where you can get in touch with our care teams right away.</p> <p>If you are a current client and need assistance, <a href='#'>please visit our support the Socialbakers</a> or <a href='#'>Astute support section</a> where you can get in touch with our care teams right away.</p>",
	icon: "sms-conversation",

	title2: "Social media listening: turn insights into more engagement",
	paragraph2:
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse diam arcu, dapibus a friongilla sed, volutpat at llorem. Integer ultricies veneatis est, a conesctetur ribih pellentesque sed nullam.",
	icon2: "bullseye",

	title3: "Social media listening: turn insights into more engagement",
	paragraph3:
		"<p>If you are a current client and need assistance, <a href='#'>please visit our support the Socialbakers</a> or <a href='#'>Astute support section</a> where you can get in touch with our care teams right away.</p>",
	icon3: "lightbulb",
};
Group.argTypes = {
	icon: { control: { type: "select", options: Object.keys(CustomIcons) } },
	icon2: { control: { type: "select", options: Object.keys(CustomIcons) } },
	icon3: { control: { type: "select", options: Object.keys(CustomIcons) } },
};

export const GroupTwoItems = ({
												groupTitle,
												title,
												paragraph,
												icon,
												title2,
												paragraph2,
												icon2,
												title3,
												paragraph3,
												icon3,
												...args
											}: any) => (
	<>
		<FeatureGroup title={groupTitle}>
			<Feature title={title} paragraph={paragraph} icon={icon} {...args} />
			<Feature title={title2} paragraph={paragraph2} icon={icon2} {...args} />
		</FeatureGroup>
		<FeatureGroup>
			<Feature title={title} paragraph={paragraph} icon={icon} {...args} />
			<Feature title={title3} paragraph={paragraph3} icon={icon3} {...args} />
		</FeatureGroup>
	</>
);
Group.args = {
	groupTitle: "<h3>Social media listening: turn insights into more engagement</h3>",
	title: "Social media listening: turn insights into more engagement",
	paragraph:
		"<p>If you are a current client and need assistance, <a href='#'>please visit our support the Socialbakers</a> or <a href='#'>Astute support section</a> where you can get in touch with our care teams right away.</p> <p>If you are a current client and need assistance, <a href='#'>please visit our support the Socialbakers</a> or <a href='#'>Astute support section</a> where you can get in touch with our care teams right away.</p>",
	icon: "sms-conversation",

	title2: "Social media listening: turn insights into more engagement",
	paragraph2:
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse diam arcu, dapibus a friongilla sed, volutpat at llorem. Integer ultricies veneatis est, a conesctetur ribih pellentesque sed nullam.",
	icon2: "bullseye",

	title3: "Social media listening: turn insights into more engagement",
	paragraph3:
		"<p>If you are a current client and need assistance, <a href='#'>please visit our support the Socialbakers</a> or <a href='#'>Astute support section</a> where you can get in touch with our care teams right away.</p>",
	icon3: "lightbulb",
};
Group.argTypes = {
	icon: { control: { type: "select", options: Object.keys(CustomIcons) } },
	icon2: { control: { type: "select", options: Object.keys(CustomIcons) } },
	icon3: { control: { type: "select", options: Object.keys(CustomIcons) } },
};