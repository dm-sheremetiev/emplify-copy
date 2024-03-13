import React from "react";
import Button from "../Button/Button";
import { ResourceFeatureCard } from "../ResourceFeaturedCard/ResourceFeatureCard";
import ResourceCard, { ResourceCardGroup } from "./ResourceCard";

export default {
	title: "Card/Resource Card",
	component: ResourceCard,
	parameters: {
		backgrounds: {
			default: "light",
		},
	},
};

export const Playground = ({ ...args }: any) => <ResourceCard {...args} />;

export const ImageElement = ({ ...args }: any) => (
	<ResourceCard
		{...args}
		image={
			<img
				src="https://i.imgur.com/LLAbaZq.png"
				alt="Placeholder Alt"
				title="Placeholder Img"
			/>
		}
	/>
);

const Template = (args: any) => <ResourceCard {...args} />;
export const NoMeta = Template.bind({ meta: undefined });
export const NoImage = Template.bind({ image: undefined });
export const NoButton = Template.bind({ hideButton: true });
export const NoImageOrButton = Template.bind({
	image: undefined,
	hideButton: true,
});
export const Group = ({ ...args }: any) => (
	<>
		<ResourceCardGroup>
			<ResourceCard
				image={
					<img
						src="https://images.ctfassets.net/cpumif18y1gd/6EUb2i82S3SOlqWguc4IAU/a2997bb6bcf414fdc239dd80890e8838/man-using-mobile-phone-leaning-against-wall_260-173.jpg"
						alt="man using mobile phone leaning against wall 260x173"
						title="man using mobile phone leaning against wall "
					/>
				}
				meta="Optional Post Meta "
				header="<h3>Continuous and always-on listening for actionable audience insights</h3>"
				paragraph="To drive the best experiences you need to continuously listen to your audience across the entire customer journey. To drive the best experiences you need to continuously listen to your audience across the entire customer journey."
				buttonChildren={<Button type="ResourceCardButton">Read More</Button>}
			/>
		</ResourceCardGroup>

		<ResourceCardGroup>
			<ResourceCard
				image={
					<img
						src="https://images.ctfassets.net/cpumif18y1gd/5sF8084i75LVvGzzRD6d2/df7a66717c085801e86b9394fb54d329/Blurry-stressful-lobby_260x173.jpg"
						alt="Woman standing in lobby with people walking (260x173)"
						title="Woman standing in lobby with people walking"
					/>
				}
				meta="Optional Post Meta "
				header="<h3>Continuous and always-on listening for actionable audience insights</h3>"
				paragraph="To drive the best experiences you need to continuously listen to your audience across the entire customer journey. To drive the best experiences you need to continuously listen to your audience across the entire customer journey."
				buttonChildren={<Button type="ResourceCardButton">Read More</Button>}
			/>
			<ResourceCard
				image={
					<img
						src="https://images.ctfassets.net/cpumif18y1gd/6EUb2i82S3SOlqWguc4IAU/a2997bb6bcf414fdc239dd80890e8838/man-using-mobile-phone-leaning-against-wall_260-173.jpg"
						alt="man using mobile phone leaning against wall 260x173"
						title="man using mobile phone leaning against wall "
					/>
				}
				meta="Optional Post Meta "
				header="<h3>Continuous and always-on listening for actionable audience insights</h3>"
				paragraph="To drive the best experiences you need to continuously listen to your audience across the entire customer journey. To drive the best experiences you need to continuously listen to your audience across the entire customer journey."
				buttonChildren={<Button type="ResourceCardButton">Read More</Button>}
			/>
		</ResourceCardGroup>

		<ResourceCardGroup>
			<ResourceCard
				image={
					<img
						src="https://images.ctfassets.net/cpumif18y1gd/59yHIOafN25rFJpZprxBbn/1d26ed52390b15a9fe39657c9e1495aa/Man-sitting-at-desk-with-laptop-doing-data-analysis_260x173.jpg"
						alt="Man sitting at desk with laptop doing data analysis 260x173"
						title="Man sitting at desk with laptop doing data analysis"
					/>
				}
				meta="Optional Post Meta "
				header="<h2>Continuous and always-on listening for actionable audience insights</h2>"
				paragraph="To drive the best experiences you need to continuously listen to your audience across the entire customer journey."
				buttonChildren={<Button type="ResourceCardButton">Read More</Button>}
			/>
			<ResourceCard
				image={
					<img
						src="https://images.ctfassets.net/cpumif18y1gd/5sF8084i75LVvGzzRD6d2/df7a66717c085801e86b9394fb54d329/Blurry-stressful-lobby_260x173.jpg"
						alt="Woman standing in lobby with people walking (260x173)"
						title="Woman standing in lobby with people walking"
					/>
				}
				meta="Optional Post Meta "
				header="<h3>Continuous and always-on listening for actionable audience insights</h3>"
				paragraph="To drive the best experiences you need to continuously listen to your audience across the entire customer journey. To drive the best experiences you need to continuously listen to your audience across the entire customer journey."
				buttonChildren={<Button type="ResourceCardButton">Read More</Button>}
			/>
			<ResourceCard
				image={
					<img
						src="https://images.ctfassets.net/cpumif18y1gd/6EUb2i82S3SOlqWguc4IAU/a2997bb6bcf414fdc239dd80890e8838/man-using-mobile-phone-leaning-against-wall_260-173.jpg"
						alt="man using mobile phone leaning against wall 260x173"
						title="man using mobile phone leaning against wall "
					/>
				}
				meta="Optional Post Meta "
				header="<h3>Continuous and always-on listening for actionable audience insights</h3>"
				paragraph="To drive the best experiences you need to continuously listen to your audience across the entire customer journey. To drive the best experiences you need to continuously listen to your audience across the entire customer journey."
				buttonChildren={<Button type="ResourceCardButton">Read More</Button>}
			/>
		</ResourceCardGroup>

		<ResourceCardGroup>
			<ResourceFeatureCard
				variations="2"
				position="top"
				imgSrc="https://via.placeholder.com/303x320"
				imgSrcDesktop="https://via.placeholder.com/596x173"
				buttonChildren={<Button type="ProductPrimary">Read More</Button>}
			/>
			<ResourceFeatureCard
				variations="2"
				position="top"
				imgSrc="https://via.placeholder.com/303x320"
				imgSrcDesktop="https://via.placeholder.com/596x173"
				buttonChildren={<Button type="ProductPrimary">Read More</Button>}
				regular={true}
			/>
		</ResourceCardGroup>

		<ResourceCardGroup>
			<ResourceFeatureCard
				variations="2"
				position="top"
				imgSrc="https://via.placeholder.com/303x320"
				imgSrcDesktop="https://via.placeholder.com/596x173"
				buttonChildren={<Button type="ProductPrimary">Read More</Button>}
			/>
			<ResourceFeatureCard
				variations="2"
				position="top"
				imgSrc="https://via.placeholder.com/303x320"
				imgSrcDesktop="https://via.placeholder.com/596x173"
				buttonChildren={<Button type="ProductPrimary">Read More</Button>}
			/>
			<ResourceCard
				image={
					<img
						src="https://images.ctfassets.net/cpumif18y1gd/6EUb2i82S3SOlqWguc4IAU/a2997bb6bcf414fdc239dd80890e8838/man-using-mobile-phone-leaning-against-wall_260-173.jpg"
						alt="man using mobile phone leaning against wall 260x173"
						title="man using mobile phone leaning against wall "
					/>
				}
				meta="Optional Post Meta "
				header="<h3>Continuous and always-on listening for actionable audience insights</h3>"
				paragraph="To drive the best experiences you need to continuously listen to your audience across the entire customer journey. To drive the best experiences you need to continuously listen to your audience across the entire customer journey."
				buttonChildren={<Button type="ResourceCardButton">Read More</Button>}
			/>
		</ResourceCardGroup>

		<ResourceCardGroup>
			<ResourceCard
				image={
					<img
						src="https://images.ctfassets.net/cpumif18y1gd/6EUb2i82S3SOlqWguc4IAU/a2997bb6bcf414fdc239dd80890e8838/man-using-mobile-phone-leaning-against-wall_260-173.jpg"
						alt="man using mobile phone leaning against wall 260x173"
						title="man using mobile phone leaning against wall "
					/>
				}
				meta="Optional Post Meta "
				header="<h3>Continuous and always-on listening for actionable audience insights</h3>"
				paragraph="To drive the best experiences you need to continuously listen to your audience across the entire customer journey. To drive the best experiences you need to continuously listen to your audience across the entire customer journey."
				buttonChildren={<Button type="ResourceCardButton">Read More</Button>}
			/>
			<ResourceCard
				image={
					<img
						src="https://images.ctfassets.net/cpumif18y1gd/6EUb2i82S3SOlqWguc4IAU/a2997bb6bcf414fdc239dd80890e8838/man-using-mobile-phone-leaning-against-wall_260-173.jpg"
						alt="man using mobile phone leaning against wall 260x173"
						title="man using mobile phone leaning against wall "
					/>
				}
				meta="Optional Post Meta "
				header="<h3>Continuous and always-on listening for actionable audience insights</h3>"
				paragraph="To drive the best experiences you need to continuously listen to your audience across the entire customer journey. To drive the best experiences you need to continuously listen to your audience across the entire customer journey."
				buttonChildren={<Button type="ResourceCardButton">Read More</Button>}
			/>
			<ResourceFeatureCard
				variations="2"
				position="top"
				imgSrc="https://via.placeholder.com/303x320"
				imgSrcDesktop="https://via.placeholder.com/596x173"
				buttonChildren={<Button type="ProductPrimary">Read More</Button>}
			/>
		</ResourceCardGroup>

		<ResourceCardGroup>
			<ResourceFeatureCard
				variations="2"
				position="top"
				imgSrc="https://via.placeholder.com/303x320"
				imgSrcDesktop="https://via.placeholder.com/596x173"
				buttonChildren={<Button type="ProductPrimary">Read More</Button>}
			/>
			<ResourceFeatureCard
				variations="2"
				position="top"
				imgSrc="https://via.placeholder.com/303x320"
				imgSrcDesktop="https://via.placeholder.com/596x173"
				buttonChildren={<Button type="ProductPrimary">Read More</Button>}
			/>
		</ResourceCardGroup>

		<ResourceCardGroup>
			<ResourceFeatureCard
				variations="2"
				position="top"
				imgSrc="https://via.placeholder.com/303x320"
				imgSrcDesktop="https://via.placeholder.com/596x173"
				buttonChildren={<Button type="ProductPrimary">Read More</Button>}
			/>
		</ResourceCardGroup>

		<ResourceCardGroup>
			<ResourceFeatureCard
				variations="2"
				position="top"
				imgSrc="https://via.placeholder.com/303x320"
				imgSrcDesktop="https://via.placeholder.com/596x173"
				buttonChildren={<Button type="ProductPrimary">Read More</Button>}
			/>
			<ResourceFeatureCard
				variations="2"
				position="top"
				imgSrc="https://via.placeholder.com/303x320"
				imgSrcDesktop="https://via.placeholder.com/596x173"
				buttonChildren={<Button type="ProductPrimary">Read More</Button>}
			/>
		</ResourceCardGroup>

		<ResourceCardGroup>
			<ResourceFeatureCard
				variations="2"
				position="top"
				imgSrc="https://via.placeholder.com/303x320"
				imgSrcDesktop="https://via.placeholder.com/596x173"
				buttonChildren={<Button type="ProductPrimary">Read More</Button>}
			/>
			<ResourceCard
				image={
					<img
						src="https://images.ctfassets.net/cpumif18y1gd/6EUb2i82S3SOlqWguc4IAU/a2997bb6bcf414fdc239dd80890e8838/man-using-mobile-phone-leaning-against-wall_260-173.jpg"
						alt="man using mobile phone leaning against wall 260x173"
						title="man using mobile phone leaning against wall "
					/>
				}
				meta="Optional Post Meta "
				header="Continuous and always-on listening for actionable audience insights"
				paragraph="To drive the best experiences you need to continuously listen to your audience across the entire customer journey. To drive the best experiences you need to continuously listen to your audience across the entire customer journey."
				buttonChildren={<Button type="ResourceCardButton">Read More</Button>}
			/>
		</ResourceCardGroup>

		<ResourceCardGroup>
			<ResourceCard
				image={
					<img
						src="https://images.ctfassets.net/cpumif18y1gd/6EUb2i82S3SOlqWguc4IAU/a2997bb6bcf414fdc239dd80890e8838/man-using-mobile-phone-leaning-against-wall_260-173.jpg"
						alt="man using mobile phone leaning against wall 260x173"
						title="man using mobile phone leaning against wall "
					/>
				}
				meta="Optional Post Meta "
				header="Continuous and always-on listening for actionable audience insights"
				paragraph="To drive the best experiences you need to continuously listen to your audience across the entire customer journey. To drive the best experiences you need to continuously listen to your audience across the entire customer journey."
				buttonChildren={<Button type="ResourceCardButton">Read More</Button>}
			/>
			<ResourceFeatureCard
				variations="1"
				position="right"
				imgSrc="https://via.placeholder.com/303x320"
				imgSrcDesktop="https://via.placeholder.com/596x173"
				buttonChildren={<Button type="ProductPrimary">Read More</Button>}
			/>
		</ResourceCardGroup>

		<ResourceCardGroup>
			<ResourceFeatureCard
				variations="1"
				position="left"
				imgSrc="https://via.placeholder.com/303x320"
				imgSrcDesktop="https://via.placeholder.com/596x173"
				buttonChildren={<Button type="ProductPrimary">Read More</Button>}
			/>
			<ResourceCard
				image={
					<img
						src="https://images.ctfassets.net/cpumif18y1gd/6EUb2i82S3SOlqWguc4IAU/a2997bb6bcf414fdc239dd80890e8838/man-using-mobile-phone-leaning-against-wall_260-173.jpg"
						alt="man using mobile phone leaning against wall 260x173"
						title="man using mobile phone leaning against wall "
					/>
				}
				meta="Optional Post Meta "
				header="Continuous and always-on listening for actionable audience insights"
				paragraph="To drive the best experiences you need to continuously listen to your audience across the entire customer journey. To drive the best experiences you need to continuously listen to your audience across the entire customer journey."
				buttonChildren={<Button type="ResourceCardButton">Read More</Button>}
			/>
		</ResourceCardGroup>

		<ResourceCardGroup>
			<ResourceCard
				image={
					<img
						src="https://images.ctfassets.net/cpumif18y1gd/6EUb2i82S3SOlqWguc4IAU/a2997bb6bcf414fdc239dd80890e8838/man-using-mobile-phone-leaning-against-wall_260-173.jpg"
						alt="man using mobile phone leaning against wall 260x173"
						title="man using mobile phone leaning against wall "
					/>
				}
				meta="Optional Post Meta "
				header="Continuous and always-on listening for actionable audience insights"
				paragraph="To drive the best experiences you need to continuously listen to your audience across the entire customer journey. To drive the best experiences you need to continuously listen to your audience across the entire customer journey."
				buttonChildren={<Button type="ResourceCardButton">Read More</Button>}
			/>
			<ResourceCard
				image={
					<img
						src="https://images.ctfassets.net/cpumif18y1gd/6EUb2i82S3SOlqWguc4IAU/a2997bb6bcf414fdc239dd80890e8838/man-using-mobile-phone-leaning-against-wall_260-173.jpg"
						alt="man using mobile phone leaning against wall 260x173"
						title="man using mobile phone leaning against wall "
					/>
				}
				meta="Optional Post Meta "
				header="Continuous and always-on listening for actionable audience insights"
				paragraph="To drive the best experiences you need to continuously listen to your audience across the entire customer journey. To drive the best experiences you need to continuously listen to your audience across the entire customer journey."
				buttonChildren={<Button type="ResourceCardButton">Read More</Button>}
			/>
			<ResourceFeatureCard
				variations="1"
				position="left"
				imgSrc="https://via.placeholder.com/303x320"
				imgSrcDesktop="https://via.placeholder.com/596x173"
				buttonChildren={<Button type="ProductPrimary">Read More</Button>}
			/>
		</ResourceCardGroup>

		<ResourceCardGroup>
			<ResourceCard
				image={
					<img
						src="https://images.ctfassets.net/cpumif18y1gd/6EUb2i82S3SOlqWguc4IAU/a2997bb6bcf414fdc239dd80890e8838/man-using-mobile-phone-leaning-against-wall_260-173.jpg"
						alt="man using mobile phone leaning against wall 260x173"
						title="man using mobile phone leaning against wall "
					/>
				}
				meta="Optional Post Meta "
				header="Continuous and always-on listening for actionable audience insights"
				paragraph="To drive the best experiences you need to continuously listen to your audience across the entire customer journey. To drive the best experiences you need to continuously listen to your audience across the entire customer journey."
				buttonChildren={<Button type="ResourceCardButton">Read More</Button>}
			/>
			<ResourceFeatureCard
				variations="1"
				position="left"
				imgSrc="https://via.placeholder.com/303x320"
				imgSrcDesktop="https://via.placeholder.com/596x173"
				buttonChildren={<Button type="ProductPrimary">Read More</Button>}
			/>
			<ResourceCard
				image={
					<img
						src="https://images.ctfassets.net/cpumif18y1gd/6EUb2i82S3SOlqWguc4IAU/a2997bb6bcf414fdc239dd80890e8838/man-using-mobile-phone-leaning-against-wall_260-173.jpg"
						alt="man using mobile phone leaning against wall 260x173"
						title="man using mobile phone leaning against wall "
					/>
				}
				meta="Optional Post Meta "
				header="Continuous and always-on listening for actionable audience insights"
				paragraph="To drive the best experiences you need to continuously listen to your audience across the entire customer journey. To drive the best experiences you need to continuously listen to your audience across the entire customer journey."
				buttonChildren={<Button type="ResourceCardButton">Read More</Button>}
			/>
		</ResourceCardGroup>

		<ResourceCardGroup>
			<ResourceFeatureCard
				variations="1"
				position="left"
				imgSrc="https://via.placeholder.com/303x320"
				imgSrcDesktop="https://via.placeholder.com/596x173"
				buttonChildren={<Button type="ProductPrimary">Read More</Button>}
			/>
			<ResourceCard
				image={
					<img
						src="https://images.ctfassets.net/cpumif18y1gd/6EUb2i82S3SOlqWguc4IAU/a2997bb6bcf414fdc239dd80890e8838/man-using-mobile-phone-leaning-against-wall_260-173.jpg"
						alt="man using mobile phone leaning against wall 260x173"
						title="man using mobile phone leaning against wall "
					/>
				}
				meta="Optional Post Meta "
				header="Continuous and always-on listening for actionable audience insights"
				paragraph="To drive the best experiences you need to continuously listen to your audience across the entire customer journey. To drive the best experiences you need to continuously listen to your audience across the entire customer journey."
				buttonChildren={<Button type="ResourceCardButton">Read More</Button>}
			/>
			<ResourceCard
				image={
					<img
						src="https://images.ctfassets.net/cpumif18y1gd/6EUb2i82S3SOlqWguc4IAU/a2997bb6bcf414fdc239dd80890e8838/man-using-mobile-phone-leaning-against-wall_260-173.jpg"
						alt="man using mobile phone leaning against wall 260x173"
						title="man using mobile phone leaning against wall "
					/>
				}
				meta="Optional Post Meta "
				header="Continuous and always-on listening for actionable audience insights"
				paragraph="To drive the best experiences you need to continuously listen to your audience across the entire customer journey. To drive the best experiences you need to continuously listen to your audience across the entire customer journey."
				buttonChildren={<Button type="ResourceCardButton">Read More</Button>}
			/>
		</ResourceCardGroup>

		<ResourceCardGroup>
			<ResourceFeatureCard
				variations="1"
				position="left"
				imgSrc="https://via.placeholder.com/303x320"
				imgSrcDesktop="https://via.placeholder.com/596x173"
				buttonChildren={<Button type="ProductPrimary">Read More</Button>}
			/>
			<ResourceCard
				image={
					<img
						src="https://images.ctfassets.net/cpumif18y1gd/6EUb2i82S3SOlqWguc4IAU/a2997bb6bcf414fdc239dd80890e8838/man-using-mobile-phone-leaning-against-wall_260-173.jpg"
						alt="man using mobile phone leaning against wall 260x173"
						title="man using mobile phone leaning against wall "
					/>
				}
				meta="Optional Post Meta "
				header="Continuous and always-on listening for actionable audience insights"
				paragraph="To drive the best experiences you need to continuously listen to your audience across the entire customer journey. To drive the best experiences you need to continuously listen to your audience across the entire customer journey."
				buttonChildren={<Button type="ResourceCardButton">Read More</Button>}
			/>
			<ResourceCard
				image={
					<img
						src="https://images.ctfassets.net/cpumif18y1gd/6EUb2i82S3SOlqWguc4IAU/a2997bb6bcf414fdc239dd80890e8838/man-using-mobile-phone-leaning-against-wall_260-173.jpg"
						alt="man using mobile phone leaning against wall 260x173"
						title="man using mobile phone leaning against wall "
					/>
				}
				meta="Optional Post Meta "
				header="Continuous and always-on listening for actionable audience insights"
				paragraph="To drive the best experiences you need to continuously listen to your audience across the entire customer journey. To drive the best experiences you need to continuously listen to your audience across the entire customer journey."
				buttonChildren={<Button type="ResourceCardButton">Read More</Button>}
			/>
			<ResourceCard
				image={
					<img
						src="https://images.ctfassets.net/cpumif18y1gd/6EUb2i82S3SOlqWguc4IAU/a2997bb6bcf414fdc239dd80890e8838/man-using-mobile-phone-leaning-against-wall_260-173.jpg"
						alt="man using mobile phone leaning against wall 260x173"
						title="man using mobile phone leaning against wall "
					/>
				}
				meta="Optional Post Meta "
				header="Continuous and always-on listening for actionable audience insights"
				paragraph="To drive the best experiences you need to continuously listen to your audience across the entire customer journey. To drive the best experiences you need to continuously listen to your audience across the entire customer journey."
				buttonChildren={<Button type="ResourceCardButton">Read More</Button>}
			/>
		</ResourceCardGroup>

		<ResourceCardGroup>
			<ResourceFeatureCard
				variations="1"
				position="left"
				imgSrc="https://via.placeholder.com/303x320"
				imgSrcDesktop="https://via.placeholder.com/596x173"
				buttonChildren={<Button type="ProductPrimary">Read More</Button>}
			/>
			<ResourceFeatureCard
				variations="1"
				position="left"
				imgSrc="https://via.placeholder.com/303x320"
				imgSrcDesktop="https://via.placeholder.com/596x173"
				buttonChildren={<Button type="ProductPrimary">Read More</Button>}
			/>
			<ResourceFeatureCard
				variations="1"
				position="left"
				imgSrc="https://via.placeholder.com/303x320"
				imgSrcDesktop="https://via.placeholder.com/596x173"
				buttonChildren={<Button type="ProductPrimary">Read More</Button>}
			/>
		</ResourceCardGroup>

		<ResourceCardGroup>
			<ResourceFeatureCard
				variations="1"
				position="left"
				imgSrc="https://via.placeholder.com/303x320"
				imgSrcDesktop="https://via.placeholder.com/596x173"
				buttonChildren={<Button type="ProductPrimary">Read More</Button>}
			/>
			<ResourceFeatureCard
				variations="1"
				position="left"
				imgSrc="https://via.placeholder.com/303x320"
				imgSrcDesktop="https://via.placeholder.com/596x173"
				buttonChildren={<Button type="ProductPrimary">Read More</Button>}
			/>
			<ResourceFeatureCard
				variations="1"
				position="left"
				imgSrc="https://via.placeholder.com/303x320"
				imgSrcDesktop="https://via.placeholder.com/596x173"
				buttonChildren={<Button type="ProductPrimary">Read More</Button>}
			/>
			<ResourceFeatureCard
				variations="1"
				position="left"
				imgSrc="https://via.placeholder.com/303x320"
				imgSrcDesktop="https://via.placeholder.com/596x173"
				buttonChildren={<Button type="ProductPrimary">Read More</Button>}
			/>
		</ResourceCardGroup>
	</>
);

const defaultArgs = {
	image: "https://i.imgur.com/LLAbaZq.png",
	meta: "Optional Post Meta ",
	header:
		"<h2>Continuous and always-on listening for actionable audience insights</h2>",
	paragraph:
		"To drive the best experiences you need to continuously listen to your audience across the entire customer journey.",
	buttonChildren: <Button type="ResourceCardButton">Read More</Button>,
};
const argTypes = {
	hideButton: { control: { type: "boolean" } },
};
Playground.args = defaultArgs;
ImageElement.args = defaultArgs;
Group.args = defaultArgs;
NoMeta.args = { ...defaultArgs, meta: undefined };
NoImage.args = { ...defaultArgs, image: undefined };
NoButton.args = { ...defaultArgs, hideButton: true };
NoImageOrButton.args = { ...defaultArgs, image: undefined, hideButton: true };
Playground.argTypes = argTypes;
ImageElement.argTypes = defaultArgs;
Group.argTypes = argTypes;
NoMeta.argTypes = argTypes;
NoImage.argTypes = argTypes;
NoButton.argTypes = argTypes;
NoImageOrButton.argTypes = argTypes;
