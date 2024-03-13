import { select, text, withKnobs } from "@storybook/addon-knobs";
import React from "react";
import ArticleArea from "./ArticleArea";

export default {
	title: "Article/Article Area",
	component: ArticleArea,
	decorators: [withKnobs],
	// argTypes: {
	// 	imgPosition: {
	// 		options: ["center", "top", "bottom"],
	// 		control: { type: "select", default: "center" },
	// 	},
	// },
};

export const Playground = () => (
	<ArticleArea
		type={select("type", ["Area", "Editorial"], "Area")}
		imgSrc={text("imgSrc", "https://via.placeholder.com/303x320")}
		imgSrcDesktop={text("imgSrcDesktop", "https://via.placeholder.com/423x674")}
		imgAlt={text("imgAlt", "Alt")}
		imgTitle={text("imgTitle", "Title")}
		imgPosition={select("imgPosition", ["center", "top", "bottom"], "center")}
		meta={text("meta", "Optional Post Meta")}
		title={text("title", "Required rich text editor")}
		subTitle={text(
			"subTitle",
			"Start with empathy, and you’ll always know what to do next"
		)}
		paragraph="<p>A seasoned executive, Mark brings more than 25 years of experience
    in executive roles with high-growth SaaS cloud companies in the
    areas of digital marketing, content management, customer experience
    (CX), and data executive roles with platforms.</p>
    <p>A seasoned executive, Mark brings more than 25 years of experience
    in executive roles with high-growth SaaS cloud companies in the
    areas of digital marketing, content management, customer experience
    (CX), and data executive roles with platforms.</p>
    <p>A seasoned executive, Mark brings more than 25 years of experience
    in executive roles with high-growth SaaS cloud companies in the
    areas of digital marketing, content management, customer experience
    (CX), and data executive roles with platforms.</p>
    <p>A seasoned executive, Mark brings more than 25 years of experience
    in executive roles with high-growth SaaS cloud companies in the
    areas of digital marketing, content management, customer experience
    (CX), and data executive roles with platforms.</p>
    <p>A seasoned executive, Mark brings more than 25 years of experience
    in executive roles with high-growth SaaS cloud companies in the
    areas of digital marketing, content management, customer experience
    (CX), and data executive roles with platforms.</p>
    <p>A seasoned executive, Mark brings more than 25 years of experience
    in executive roles with high-growth SaaS cloud companies in the
    areas of digital marketing, content management, customer experience
    (CX), and data executive roles with platforms.</p>"
	/>
);

export const AreaDefault = () => (
	<ArticleArea
		type="Area"
		imgSrc="https://via.placeholder.com/303x320'"
		imgSrcDesktop="https://via.placeholder.com/423x674"
		imgAlt="Alt"
		imgTitle="Title"
		imgPosition="center"
		meta="Optional Post Meta "
		title="<h2>Required rich text editor</h2><h3>Required rich text editor</h3><h4>Required rich text editor</h4>"
		subTitle="Start with empathy, and you’ll always know what to do next"
		paragraph="<p>A seasoned executive, Mark brings more than 25 years of experience
    in executive roles with high-growth SaaS cloud companies in the
    areas of digital marketing, content management, customer experience
    (CX), and data executive roles with platforms.</p>
    <p>A seasoned executive, Mark brings more than 25 years of experience
    in executive roles with high-growth SaaS cloud companies in the
    areas of digital marketing, content management, customer experience
    (CX), and data executive roles with platforms.</p>
    <p>A seasoned executive, Mark brings more than 25 years of experience
    in executive roles with high-growth SaaS cloud companies in the
    areas of digital marketing, content management, customer experience
    (CX), and data executive roles with platforms.</p>
    <p>A seasoned executive, Mark brings more than 25 years of experience
    in executive roles with high-growth SaaS cloud companies in the
    areas of digital marketing, content management, customer experience
    (CX), and data executive roles with platforms.</p>
    <p>A seasoned executive, Mark brings more than 25 years of experience
    in executive roles with high-growth SaaS cloud companies in the
    areas of digital marketing, content management, customer experience
    (CX), and data executive roles with platforms.</p>
    <p>A seasoned executive, Mark brings more than 25 years of experience
    in executive roles with high-growth SaaS cloud companies in the
    areas of digital marketing, content management, customer experience
    (CX), and data executive roles with platforms.</p>"
	/>
);

export const AreaTop = () => (
	<ArticleArea
		type="Area"
		imgSrc="https://via.placeholder.com/303x320'"
		imgSrcDesktop="https://via.placeholder.com/423x674"
		imgAlt="Alt"
		imgTitle="Title"
		imgPosition="top"
		meta="Optional Post Meta "
		title="<h2>Required rich text editor</h2>"
		subTitle="Start with empathy, and you’ll always know what to do next"
		paragraph="<p>A seasoned executive, Mark brings more than 25 years of experience
    in executive roles with high-growth SaaS cloud companies in the
    areas of digital marketing, content management, customer experience
    (CX), and data executive roles with platforms.</p>
    <p>A seasoned executive, Mark brings more than 25 years of experience
    in executive roles with high-growth SaaS cloud companies in the
    areas of digital marketing, content management, customer experience
    (CX), and data executive roles with platforms.</p>
    <p>A seasoned executive, Mark brings more than 25 years of experience
    in executive roles with high-growth SaaS cloud companies in the
    areas of digital marketing, content management, customer experience
    (CX), and data executive roles with platforms.</p>
    <p>A seasoned executive, Mark brings more than 25 years of experience
    in executive roles with high-growth SaaS cloud companies in the
    areas of digital marketing, content management, customer experience
    (CX), and data executive roles with platforms.</p>
    <p>A seasoned executive, Mark brings more than 25 years of experience
    in executive roles with high-growth SaaS cloud companies in the
    areas of digital marketing, content management, customer experience
    (CX), and data executive roles with platforms.</p>
    <p>A seasoned executive, Mark brings more than 25 years of experience
    in executive roles with high-growth SaaS cloud companies in the
    areas of digital marketing, content management, customer experience
    (CX), and data executive roles with platforms.</p>"
	/>
);

export const AreaBottom = () => (
	<ArticleArea
		type="Area"
		imgSrc="https://via.placeholder.com/303x320'"
		imgSrcDesktop="https://via.placeholder.com/423x674"
		imgAlt="Alt"
		imgTitle="Title"
		imgPosition="bottom"
		meta="Optional Post Meta "
		title="<h2>Required rich text editor</h2><h3>Required rich text editor</h3><h4>Required rich text editor</h4>"
		subTitle="Start with empathy, and you’ll always know what to do next"
		paragraph="<p>A seasoned executive, Mark brings more than 25 years of experience
    in executive roles with high-growth SaaS cloud companies in the
    areas of digital marketing, content management, customer experience
    (CX), and data executive roles with platforms.</p>
    <p>A seasoned executive, Mark brings more than 25 years of experience
    in executive roles with high-growth SaaS cloud companies in the
    areas of digital marketing, content management, customer experience
    (CX), and data executive roles with platforms.</p>
    <p>A seasoned executive, Mark brings more than 25 years of experience
    in executive roles with high-growth SaaS cloud companies in the
    areas of digital marketing, content management, customer experience
    (CX), and data executive roles with platforms.</p>
    <p>A seasoned executive, Mark brings more than 25 years of experience
    in executive roles with high-growth SaaS cloud companies in the
    areas of digital marketing, content management, customer experience
    (CX), and data executive roles with platforms.</p>
    <p>A seasoned executive, Mark brings more than 25 years of experience
    in executive roles with high-growth SaaS cloud companies in the
    areas of digital marketing, content management, customer experience
    (CX), and data executive roles with platforms.</p>
    <p>A seasoned executive, Mark brings more than 25 years of experience
    in executive roles with high-growth SaaS cloud companies in the
    areas of digital marketing, content management, customer experience
    (CX), and data executive roles with platforms.</p>"
	/>
);

export const Editorial = () => (
	<ArticleArea
		type="Editorial"
		imgSrc="https://via.placeholder.com/375x396"
		imgSrcDesktop="https://via.placeholder.com/470x280"
		imgAlt="Alt"
		imgTitle="Title"
		meta="Optional Post Meta"
		title="<h2>Headline for for full article editorial template page design goes in this placeholder</h2>"
		subTitle="When brands start with empathy, they are empowered to always know what to do next"
	/>
);
