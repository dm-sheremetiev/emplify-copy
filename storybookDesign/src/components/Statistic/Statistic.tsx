import React, { useRef, useEffect, FC, ReactNode } from "react";
import "./Statistic.scss";

export type StatisticProps = React.HTMLAttributes<HTMLDivElement> & {
	description?: string;
	num?: number;
	unitKey?: string;
	unitPlacement?: string;
	className?: string;
};

const Statistic: FC<StatisticProps> = (props: StatisticProps) => {
	const { description, num, unitKey, unitPlacement } = props;
	const HTMLProps = { ...props } as any;
	delete HTMLProps.description;
	delete HTMLProps.num;
	delete HTMLProps.unitKey;
	delete HTMLProps.unitPlacement;

	let banner = useRef<HTMLDivElement>(null);
	let placement = unitPlacement ? unitPlacement : "right";
	let unitValue = "";
	switch (props.unitKey) {
		case "percent":
			unitValue = "%";
			break;
		case "usd":
			unitValue = "$";
			break;
	}
	return (
		<div
			{...HTMLProps}
			id={props.id}
			ref={banner}
			className={[
				"emplifi-statistic",
				"emplifi-statistic--unit-" + placement,
				props?.className,
			].join(" ")}
		>
			<div className={`emplifi-statistic__content`}>
				{num && <span className="emplifi-statistic__number">{num}</span>}
				{unitValue?.length > 0 && (
					<span className="emplifi-statistic__unit">{unitValue}</span>
				)}
				{description?.length && (
					<span
						className="emplifi-statistic__description"
						dangerouslySetInnerHTML={{ __html: description || "" }}
					/>
				)}
			</div>
		</div>
	);
};

export default Statistic;
