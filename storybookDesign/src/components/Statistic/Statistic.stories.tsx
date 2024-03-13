import { number, text, withKnobs } from "@storybook/addon-knobs";
import React from "react";
import Statistic from "./Statistic";

export default {
	title: "Statistic / Statistic",
	component: Statistic,
	decorators: [withKnobs],
	argTypes: {
		description: { control: { type: "text" } },
		num: { control: { type: "range", min: 1, max: 999, step: 1 } },
		unitKey: {
			options: ["percent", "usd", null],
			control: { type: "select" },
		},
		unitPlacement: {
			options: ["left", "right"],
			control: { type: "select" },
		},
	},
};
export const Playground = ({
	description,
	num,
	unitKey,
	unitPlacement,
}: any) => (
	<div>
		<Statistic
			description={description}
			num={num}
			unitKey={unitKey}
			unitPlacement={unitPlacement}
		/>
	</div>
);

Statistic.defaultProps = {
	description:
		"of customers <strong>stop doing business</strong> with a brand they love after only <a href='#'><em>one</em> bad experience</a>",
	num: 32,
	unitKey: "percent",
	// unitPlacement: "right",
};
