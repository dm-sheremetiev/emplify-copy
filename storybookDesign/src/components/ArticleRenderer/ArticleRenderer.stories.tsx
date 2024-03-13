import React from "react";
import ArticleRenderer from "./ArticleRenderer";
import ArticleRendererDocumentation from "./ArticleRenderer.mdx";

export default {
	title: "Article / Article Renderer",
	component: ArticleRenderer,
	// parameters: {
	// 	docs: {
	// 		page: ArticleRendererDocumentation,
	// 	},
	// },
};

export const Playground = () => {
	return (
		<ArticleRenderer
			articleBody="
      <h1>Headline 1</h1>
      <h2>Headline 2</h2>
      <h3>Headline 3</h3>
      <h4>Headline 4</h4>
      <h5>Headline 5</h5>
      <a href='#'>Link</a>
      <br/>
      <span>Eyebrow</span>
      <p>A seasoned executive, <strong>Mark brings more than 25 years of experience</strong>
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
      (CX), and data executive roles with platforms.</p>
      <blockquote>
        <p>A seasoned executive, <strong>Mark brings more than 25 years of experience</strong>
        in executive roles with high-growth SaaS cloud companies in the
        areas of digital marketing, content management, customer experience
        (CX), and <a href='#'>data executive roles with platforms (Link)</a></p>
      </blockquote>
      <ul>
        <li>A seasoned executive, Mark brings more than 25 years of experience
        in executive roles with high-growth SaaS cloud companies in the
        areas of digital marketing, content management, customer experience
        (CX), and data executive roles with platforms</li>
        <li>A seasoned executive, Mark brings more than 25 years of experience
        in executive roles with high-growth SaaS cloud companies in the
        areas of digital marketing, content management, customer experience
        (CX), and data executive roles with platforms</li>
      </ul>
      <ol>
        <li>A seasoned executive, Mark brings more than 25 years of experience
        in executive roles with high-growth SaaS cloud companies in the
        areas of digital marketing, content management, customer experience
        (CX), and data executive roles with platforms</li>
        <li>A seasoned executive, Mark brings more than 25 years of experience
        in executive roles with high-growth SaaS cloud companies in the
        areas of digital marketing, content management, customer experience
        (CX), and data executive roles with platforms</li>
        <li>A seasoned executive, Mark brings more than 25 years of experience
        in executive roles with high-growth SaaS cloud companies in the
        areas of digital marketing, content management, customer experience
        (CX), and data executive roles with platforms</li>
        <li>A seasoned executive, Mark brings more than 25 years of experience
        in executive roles with high-growth SaaS cloud companies in the
        areas of digital marketing, content management, customer experience
        (CX), and data executive roles with platforms</li>
      </ol>
      "
		/>
	);
};
