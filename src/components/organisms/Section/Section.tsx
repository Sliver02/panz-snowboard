import classNames from "classnames";
import styles from "./Section.module.scss";
import { BaseProps } from "@/common/globalInterfaces";
import { CSSProperties, ReactNode } from "react";
import Image, { StaticImageData } from "next/image";

export interface SectionProps extends BaseProps {
	backgroundColor?: string;
	/** Decorative background — import the image so Next generates its blur placeholder. */
	backgroundImage?: StaticImageData;
	/**
	 * Full-bleed layer between the background image and the content — e.g. a
	 * color scrim for legibility. Rendered as a direct sibling of the image (not
	 * nested inside the content wrapper), so it always spans the section's full
	 * box regardless of how tall the content itself is.
	 */
	backgroundOverlay?: ReactNode;
	/**
	 * Spacing presets for the section. Defaults to 'default'.
	 * - 'default': current spacing
	 * - 'tight': reduced vertical padding/min-height
	 * - 'none': no padding (useful for full-bleed content)
	 * - 'large': larger vertical padding
	 */
	spacing?: "default" | "tight" | "none" | "large";
}

export const Section = ({
	id,
	style,
	className,
	children,
	backgroundColor,
	backgroundImage,
	backgroundOverlay,
	spacing = "default",
}: SectionProps) => {
	const cssVar = {
		["--background-color"]: backgroundColor,
	} as CSSProperties;

	const spacingClass = styles[`spacing-${spacing}` as keyof typeof styles] || "";

	return (
		<div
			id={id}
			className={classNames(className, styles.section, spacingClass)}
			style={{ ...cssVar, ...style }}
		>
			{backgroundImage && (
				<Image
					className={classNames(styles.backgroundImage)}
					alt=""
					src={backgroundImage}
					placeholder="blur"
					fill
				/>
			)}
			{backgroundOverlay && (
				<div className={styles.backgroundOverlay}>{backgroundOverlay}</div>
			)}
			<span className={classNames(styles.content)}>{children}</span>
		</div>
	);
};
