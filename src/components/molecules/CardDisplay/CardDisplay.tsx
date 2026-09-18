import classNames from "classnames";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import styles from "./CardDisplay.module.scss";
import { BaseProps } from "@/common/globalInterfaces";
import { ArrowUpRight } from "lucide-react";
import { Sport, SportIcon } from "@/components/atoms/SportIcon";

export interface CardDisplayProps extends BaseProps {
	/** Import the image so Next generates its blur placeholder. */
	image: StaticImageData;
	title?: string;
	/** Turns the whole card into a link to a detail page. */
	href?: string;
	/** Marks the card's top-left corner with the sport glyph. */
	sport?: Sport;
}

export const CardDisplay = ({ className, title, image, href, sport }: CardDisplayProps) => {
	const content = (
		<div className={classNames(styles.imageContainer)}>
			<Image
				className={classNames(styles.backgroundImage)}
				alt={title ?? ""}
				src={image}
				placeholder="blur"
				fill
			/>
			{sport && (
				<span className={classNames(styles.sport)}>
					<SportIcon sport={sport} tone="light" size={64} />
				</span>
			)}
			{title && (
				<div className={classNames(styles.titleContainer)}>
					<h4>{title}</h4>
					{href && (
						<span className={classNames(styles.badge)} aria-hidden>
							<ArrowUpRight size={16} />
						</span>
					)}
				</div>
			)}
		</div>
	);

	if (!href) {
		return <div className={classNames(className, styles.cardDisplay)}>{content}</div>;
	}

	return (
		<Link href={href} className={classNames(className, styles.cardDisplay, styles.linked)}>
			{content}
		</Link>
	);
};
