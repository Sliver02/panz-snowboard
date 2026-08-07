"use client";
import classNames from "classnames";
import styles from "./PackageCard.module.scss";
import { BaseProps } from "@/common/globalInterfaces";
import { Button } from "@/components/atoms/Button";
import { StaticImageData } from "next/image";
import { useTranslations } from "use-intl";

export interface PackageCardProps extends BaseProps {
	/** Import the image so Next generates its blur placeholder. */
	image?: StaticImageData;
	title: string;
	subtitle?: string;
	price?: string;
	onClick?: () => void;
}

export const PackageCard = ({
	className,
	image,
	title,
	subtitle,
	price,
	onClick,
}: PackageCardProps) => {
	const t = useTranslations("activities");

	return (
		<div className={classNames(styles.card, className)}>
			{image && (
				<div
					className={styles.media}
					style={{ backgroundImage: `url(${image.src}), url(${image.blurDataURL})` }}
				/>
			)}
			<div className={styles.body}>
				<div className={styles.header}>
					<h3 className={styles.title}>{title}</h3>
					{price && <div className={styles.price}>{price}</div>}
				</div>
				{subtitle && <p className={styles.subtitle}>{subtitle}</p>}

				{onClick && (
					<div className={styles.cta}>
						<Button onClick={onClick}>{t("bookButton")}</Button>
					</div>
				)}
			</div>
		</div>
	);
};
