import classNames from "classnames";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import styles from "./CardDisplay.module.scss";
import { BaseProps } from "@/common/globalInterfaces";
import { ArrowUpRight } from "lucide-react";

export interface CardDisplayProps extends BaseProps {
	/** Import the image so Next generates its blur placeholder. */
	image: StaticImageData;
	title?: string;
	/** Turns the whole card into a link to a detail page. */
	href?: string;
}

export const CardDisplay = ({ className, title, image, href }: CardDisplayProps) => {
	const content = (
		<div className={classNames(styles.imageContainer)}>
			<Image
				className={classNames(styles.backgroundImage)}
				alt={title ?? ""}
				src={image}
				placeholder="blur"
				fill
			/>
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
