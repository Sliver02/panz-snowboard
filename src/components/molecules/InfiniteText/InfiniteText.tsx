"use client";
import classNames from "classnames";
import styles from "./InfiniteText.module.scss";
import { Mountain } from "lucide-react";
import { CSSProperties } from "react";
import Marquee from "react-fast-marquee";

export interface InfiniteTextProps {
	items: string[];
	backgroundColor?: string;
}

export const InfiniteText = ({
	items,
	backgroundColor = "var(--primary-light)",
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
						<Mountain className={classNames(styles.icon)} size={28} strokeWidth={2} />
					</h3>
				))}
			</Marquee>
		</div>
	);
};
