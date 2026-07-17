import classNames from "classnames";
import styles from "./Section.module.scss";
import { BaseProps } from "@/common/globalInterfaces";
import { CSSProperties } from "react";
import Image from "next/image";

export interface SectionProps extends BaseProps {
	backgroundColor?: string;
	backgroundImage?: {
		src: string;
		alt: string;
		format?: "png" | "jpg" | "jpeg" | "webp";
	};
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
					src={"/images/" + backgroundImage.src + "." + (backgroundImage.format || "jpg")}
					placeholder="blur"
					blurDataURL={
						"/images/" +
						backgroundImage.src +
						"_placeholder" +
						"." +
						(backgroundImage.format || "jpg")
					}
					fill
				/>
			)}
			<span className={classNames(styles.content)}>{children}</span>
		</div>
	);
};
