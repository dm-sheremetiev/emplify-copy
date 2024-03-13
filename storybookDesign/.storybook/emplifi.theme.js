// .storybook/YourTheme.js

import { create } from "@storybook/theming";

export default create({
	base: "light",

	colorPrimary: "#003A5D",
	colorSecondary: "#A30C65",

	// UI
	appBg: "#eee",
	appContentBg: "white",
	appBorderColor: "grey",
	appBorderRadius: 4,

	// Typography
	// fontBase: '"Open Sans", sans-serif',
	// fontCode: "monospace",

	// Text colors
	textColor: "black",
	textInverseColor: "rgba(255,255,255,0.9)",

	// Toolbar default and active colors
	barTextColor: "#414142",
	barSelectedColor: "black",
	barBg: "#eee",

	// Form colors
	inputBg: "white",
	inputBorder: "silver",
	inputTextColor: "black",
	inputBorderRadius: 4,

	brandTitle: "Emplifi",
	brandUrl: "https://emplifi.io",
	brandImage:
		"https://images.ctfassets.net/cpumif18y1gd/3PacG8Xa6hoTkIMhGZ0DPW/afc304550196f0881600386628e5d93d/color-emplifi-logo-RGB.svg",
});
