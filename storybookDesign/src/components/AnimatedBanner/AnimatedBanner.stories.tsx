import AnimatedBanner from "./AnimatedBanner";
import React from "react";
import ImgHeroBanner from "../../assets/images/smiling-woman-with-mobile-phone.png";
import Button from "../Button/Button";
import { number, text, withKnobs } from "@storybook/addon-knobs";

export default {
	title: "Banner / Animated Banner",
	component: AnimatedBanner,
	// decorators: [withKnobs],
	argTypes: {
		imgSrc: { options: [ImgHeroBanner, null], control: { type: "select" } },
		headlineLeft: { control: { type: "text" } },
		headlineRight: { control: { type: "text" } },
		subTitle: { control: { type: "text" } },
		title: { control: { type: "text" } },
		animationType: {
			options: ["pull", "push"],
			control: { type: "select" },
		},
		bannerType: {
			options: ["poster", "underlap", null],
			control: { type: "select" },
		},
		buttonType: {
			options: ["scroll", "primary", "secondary", "passive"],
			control: { type: "select" },
		},
		imgAlt: {
			table: {
				disable: true,
			},
		},
		imgTitle: {
			table: {
				disable: true,
			},
		},
		imgWidth: {
			table: {
				disable: true,
			},
		},
		imgHeight: {
			table: {
				disable: true,
			},
		},
		buttonArr: {
			options: [
				{ href: "/", text: "Learn more »", type: "scroll" },
				{ href: "/", text: "Buy now »", type: "scroll" },
			],
			control: { type: "object" },
		},
		// buttonArr :
	},
};

export const Playground = ({
	animationType,
	bannerType,
	buttonArr,
	buttonType,
	headlineLeft,
	headlineRight,
	title,
	subTitle,
	imgSrc,
	imgAlt,
	imgTitle,
	imgWidth,
	imgHeight,
	buttonChildren,
}: any) => (
	<div>
		<AnimatedBanner
			animationType={animationType}
			bannerType={bannerType}
			buttonType={buttonType}
			headlineLeft={headlineLeft}
			headlineRight={headlineRight}
			title={title}
			subTitle={subTitle}
			imgSrc={imgSrc}
			imgAlt={imgAlt}
			imgTitle={imgTitle}
			imgWidth={imgWidth}
			imgHeight={imgHeight}
			buttonArr={buttonArr}
			buttonChildren={<Button type="Primary">CTA to go here ›</Button>}
		/>
	</div>
);
export const ScrollAnimationTest = ({
	animationType,
	bannerType,
	buttonArr,
	headlineLeft,
	headlineRight,
	title,
	subTitle,
	imgSrc,
	imgAlt,
	imgTitle,
	imgWidth,
	imgHeight,
	buttonChildren,
}: any) => (
	<div>
		<div style={{ margin: "50vh auto", textAlign: "center" }}>
			Scroll to view contents
		</div>
		<AnimatedBanner
			animationType={animationType}
			bannerType={bannerType}
			headlineLeft={headlineLeft}
			headlineRight={headlineRight}
			title={title}
			subTitle={subTitle}
			imgSrc={imgSrc}
			imgAlt={imgAlt}
			imgTitle={imgTitle}
			imgWidth={imgWidth}
			imgHeight={imgHeight}
			buttonArr={buttonArr}
		/>
	</div>
);
export const ScrollButtonTest = ({
	animationType,
	bannerType,
	buttonArr,
	headlineLeft,
	headlineRight,
	title,
	subTitle,
	imgSrc,
	imgAlt,
	imgTitle,
	imgWidth,
	imgHeight,
	buttonChildren,
}: any) => (
	<div>
		<AnimatedBanner
			animationType={animationType}
			bannerType={bannerType}
			headlineLeft={headlineLeft}
			headlineRight={headlineRight}
			title={title}
			subTitle={subTitle}
			imgSrc={imgSrc}
			imgAlt={imgAlt}
			imgTitle={imgTitle}
			imgWidth={imgWidth}
			imgHeight={imgHeight}
			buttonArr={buttonArr}
		/>
		<div
			style={{
				background: "#009D97",
				color: "white",
				padding: "2em",
				textAlign: "center",
			}}
		>
			Success!
		</div>
		<div style={{ margin: "90vh 0 0" }}></div>
	</div>
);
export const UnderlapTest = ({
	animationType,
	bannerType,
	buttonArr,
	headlineLeft,
	headlineRight,
	title,
	subTitle,
	imgSrc,
	imgAlt,
	imgTitle,
	imgWidth,
	imgHeight,
	buttonChildren,
}: any) => (
	<div>
		<div
			style={{
				display: "grid",
				gridAutoFlow: "column",
				gridGap: "30px",
				padding: "1.09375rem",
				margin: "0 auto",
				maxWidth: "992px",
				minHeight: "30vh",
			}}
		>
			<div
				style={{
					alignItems: "center",
					background: "#49c7ed",
					display: "flex",
					justifyContent: "center",
				}}
			>
				Scroll to view contents
			</div>
			<div
				style={{
					alignItems: "center",
					background: "#485daa",
					color: "white",
					display: "flex",
					justifyContent: "center",
				}}
			>
				Scroll to view contents
			</div>
			<div
				style={{
					alignItems: "center",
					background: "#003a5d",
					color: "white",
					display: "flex",
					justifyContent: "center",
				}}
			>
				Scroll to view contents
			</div>
		</div>
		<AnimatedBanner
			animationType={animationType}
			bannerType={bannerType}
			headlineLeft={headlineLeft}
			headlineRight={headlineRight}
			title={title}
			subTitle={subTitle}
			imgSrc={imgSrc}
			imgAlt={imgAlt}
			imgTitle={imgTitle}
			imgWidth={imgWidth}
			imgHeight={imgHeight}
			buttonArr={buttonArr}
		/>
	</div>
);
export const PosterWithImage = ({
	animationType,
	bannerType,
	buttonArr,
	headlineLeft,
	headlineRight,
	title,
	subTitle,
	imgSrc,
	imgAlt,
	imgTitle,
	imgWidth,
	imgHeight,
}: any) => (
	<div>
		<div className="emplifi-header ">
			<div className="emplifi-header__container">
				<div className="emplifi-header__logo-menu-button-menu-children-container">
					<div className="emplifi-header__logo-menu-button-container">
						<a href="/">
							<img
								className="emplifi-header__logo"
								src="https://images.ctfassets.net/cpumif18y1gd/3PacG8Xa6hoTkIMhGZ0DPW/afc304550196f0881600386628e5d93d/color-emplifi-logo-RGB.svg"
								title="Emplifi logo"
								width="135px"
								height="28px"
							/>
						</a>
						<button
							className="emplifi-header__menu-button"
							type="button"
							aria-label="Open Menu"
						></button>
					</div>
				</div>
				<div className="emplifi-header__menu-misc-menu-children-container">
					<div className="emplifi-header__menu-children">
						<div className="emplifi-menu-container emplifi-menu-container--desktop">
							<div className="emplifi-menu-item-container">
								<div className="emplifi-menu-item  ">
									<span className="typography typography--MenuSubMenuTitle  ">
										<a href="/products">
											Products
										</a>
									</span>
								</div>
							</div>
							<div className="emplifi-menu-item-container">
								<div className="emplifi-menu-item  ">
									<span className="typography typography--MenuSubMenuTitle  ">
										<a href="/customers">
											Customer Stories
										</a>
									</span>
								</div>
							</div>
							<div className="emplifi-menu-item-container">
								<div className="emplifi-menu-item">
									<span className="typography typography--MenuSubMenuTitle  ">
										<a href="/resources">
											Resources
										</a>
									</span>
								</div>
							</div>
							<div className="emplifi-menu-item-container">
								<div className="emplifi-menu-item  ">
									<span className="typography typography--MenuSubMenuTitle  ">
										<a href="/company">
											Company
										</a>
									</span>
								</div>
							</div>
						</div>
					</div>
					<div className="emplifi-header__misc-menu-children">
						<div className="emplifi-other-menus-container emplifi-other-menus-container--desktop">
							<div className="emplifi-other-menus-container__top-row"></div>
							<div className="emplifi-other-menus-container__bottom-row">
								<a href="/demo">
									<button
										className="emplifi-button emplifi-button--type-Primary"
										aria-label="Button"
										type="button"
									>
										<span className="typography typography--Button1  emplifi-button__text">
											Book a demo
										</span>
									</button>
								</a>
								<button className="emplifi-header__transition-button emplifi-header__transition-button--mobile">
									<span className="typography typography--HomeMiscLink  ">
										EN
									</span>
								</button>
								<button className="emplifi-header__transition-button emplifi-header__transition-button--desktop ">
									<span className="typography typography--HomeMiscLink  ">
										EN
									</span>
								</button>
								<div className="emplifi-translation-button-group "></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<AnimatedBanner
			animationType={animationType}
			bannerType={bannerType}
			headlineLeft={headlineLeft}
			headlineRight={headlineRight}
			title={title}
			subTitle={subTitle}
			imgSrc={imgSrc}
			imgAlt={imgAlt}
			imgTitle={imgTitle}
			imgWidth={imgWidth}
			imgHeight={imgHeight}
			buttonArr={buttonArr}
		/>
	</div>
);
export const DefaultPullAnimation = ({
	animationType,
	bannerType,
	buttonArr,
	headlineLeft,
	headlineRight,
	title,
	subTitle,
	imgSrc,
	imgAlt,
	imgTitle,
	imgWidth,
	imgHeight,
}: any) => (
	<div>
		<AnimatedBanner
			animationType={animationType}
			bannerType={bannerType}
			headlineLeft={headlineLeft}
			headlineRight={headlineRight}
			title={title}
			subTitle={subTitle}
			imgSrc={imgSrc}
			imgAlt={imgAlt}
			imgTitle={imgTitle}
			imgWidth={imgWidth}
			imgHeight={imgHeight}
			buttonArr={buttonArr}
		/>
	</div>
);
export const DefaultPushAnimation = ({
	animationType,
	bannerType,
	buttonArr,
	headlineLeft,
	headlineRight,
	title,
	subTitle,
	imgSrc,
	imgAlt,
	imgTitle,
	imgWidth,
	imgHeight,
}: any) => (
	<div>
		<AnimatedBanner
			animationType={animationType}
			bannerType={bannerType}
			headlineLeft={headlineLeft}
			headlineRight={headlineRight}
			title={title}
			subTitle={subTitle}
			imgSrc={imgSrc}
			imgAlt={imgAlt}
			imgTitle={imgTitle}
			imgWidth={imgWidth}
			imgHeight={imgHeight}
			buttonArr={buttonArr}
		/>
	</div>
);
UnderlapTest.args = {
	bannerType: "underlap",
	buttonArr: [],
	headlineLeft: "<em>Understanding</em> needs.",
	headlineRight: "<u>Meeting</u> needs.",
	imgSrc: null,
	subTitle: "",
	title: "",
};
DefaultPullAnimation.args = {
	bannerType: null,
	buttonArr: [],
	headlineLeft: "<em>Understanding</em> needs.",
	headlineRight: "<u>Meeting</u> needs.",
	imgSrc: null,
	subTitle: "",
	title: "",
};
DefaultPushAnimation.args = {
	animationType: "push",
	bannerType: null,
	buttonArr: [
		{ href: "/foo", text: "Learn more »", type: "primary" },
		{ href: "/bar", text: "Learn more »", type: "secondary" },
	],
	headlineLeft: "Understanding needs.",
	headlineRight: "Meeting needs.",
	imgSrc: null,
	subTitle: "",
	title: "",
};
AnimatedBanner.defaultProps = {
	animationType: "pull",
	bannerType: "poster",
	buttonArr: [
		{ href: "/", text: "Learn more »", type: "scroll" },
		{ href: "/bar", text: "Learn more »", type: "secondary" },
	],
	// className: "",
	imgSrc: ImgHeroBanner,
	imgAlt: "Animated Banner Image",
	imgTitle: "",
	imgWidth: 666,
	imgHeight: 800,
	headlineLeft: "Turn expectations",
	headlineRight: "into experiences.",
	subTitle: "What to know in 2021 to elevate CX across the customer journey.",
	title: "The unified CX platform top brands count on to elevate experiences",
};
