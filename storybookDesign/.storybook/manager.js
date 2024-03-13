// .storybook/manager.js

import { addons } from "@storybook/addons";
import emplifi from "./emplifi.theme";

addons.setConfig({
	isFullscreen: false,
	showNav: true,
	showPanel: true,
	panelPosition: "bottom",
	enableShortcuts: true,
	isToolshown: true,
	theme: emplifi,
	selectedPanel: undefined,
	initialActive: "sidebar",
	sidebar: {
		showRoots: false,
		collapsedRoots: ["other"],
	},
	toolbar: {
		title: { hidden: false },
		zoom: { hidden: false },
		eject: { hidden: false },
		copy: { hidden: false },
		fullscreen: { hidden: false },
	},
});
