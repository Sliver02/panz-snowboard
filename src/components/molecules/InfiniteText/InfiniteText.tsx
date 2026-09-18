"use client";
import classNames from "classnames";
import styles from "./InfiniteText.module.scss";
import { Sport, SportIcon } from "@/components/atoms/SportIcon";
import { CSSProperties } from "react";
import Marquee from "react-fast-marquee";

// Separators cycle through the sport glyphs in order.
const SEPARATORS: Sport[] = ["snowboard", "telemark", "bike", "skateboard"];

export interface InfiniteTextProps {
	items: string[];
	backgroundColor?: string;
}

export const InfiniteText = ({
	items,
	backgroundColor = "var(--color-bg-sunken)",
}: InfiniteTextProps) => {
	const cssVar = {
		["--background-color"]: backgroundColor,
	} as CSSProperties;

	return (
		<div className={classNames(styles.infiniteText)} style={cssVar}>
			<Marquee>
				{items.map((item, index) => (
					<h3 key={index} className={classNames(styles.item)}>
						{item.toUpperCase()}
						<SportIcon
							sport={SEPARATORS[index % SEPARATORS.length]}
							size={44}
							className={classNames(styles.icon)}
						/>
					</h3>
				))}
			</Marquee>
		</div>
	);
};
