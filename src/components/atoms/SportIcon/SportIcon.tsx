import classNames from "classnames";
import { BaseProps } from "@/common/globalInterfaces";
import styles from "./SportIcon.module.scss";

export type Sport = "snowboard" | "telemark" | "bike" | "skateboard";

export interface SportIconProps extends BaseProps {
	sport: Sport;
	/** "light" for dark surfaces, "dark" for light ones. Defaults to "dark". */
	tone?: "light" | "dark";
	/** Icon height in px; width follows the artwork's aspect ratio. */
	size?: number;
}

/** Decorative line-art sport glyph from public/images/UI. */
export const SportIcon = ({
	sport,
	tone = "dark",
	size = 48,
	className,
	style,
}: SportIconProps) => (
	<img
		src={`/images/UI/icon_${sport}_${tone}.svg`}
		alt=""
		aria-hidden="true"
		className={classNames(styles.sportIcon, className)}
		style={{ height: size, ...style }}
	/>
);
