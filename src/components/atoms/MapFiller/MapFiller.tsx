import classNames from "classnames";
import { BaseProps } from "@/common/globalInterfaces";
import styles from "./MapFiller.module.scss";

export interface MapFillerProps extends BaseProps {
	/** Which edge of the parent (must be position: relative + overflow: hidden) it bleeds off. */
	side?: "left" | "right";
	/** Swap artwork so two nearby sections never show the identical shape. Defaults to "lg". */
	variant?: "lg" | "sm";
}

/** Decorative contour-map artwork, skewed and bled off a section's top/side edge. */
export const MapFiller = ({ side = "right", variant = "lg", className }: MapFillerProps) => (
	<img
		src={`/images/mapfiller/map-${variant}.svg`}
		alt=""
		aria-hidden="true"
		className={classNames(styles.mapFiller, styles[side], className)}
	/>
);
