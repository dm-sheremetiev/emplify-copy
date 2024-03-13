import React, { FC } from "react";
import "./Statistic.scss";
export type StatisticProps = React.HTMLAttributes<HTMLDivElement> & {
    description?: string;
    num?: number;
    unitKey?: string;
    unitPlacement?: string;
    className?: string;
};
declare const Statistic: FC<StatisticProps>;
export default Statistic;
