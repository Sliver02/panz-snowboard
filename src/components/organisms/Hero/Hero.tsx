"use client";
import { BaseProps } from "@/common/globalInterfaces";
import { Breadcrumb, BreadcrumbItem } from "@/components/atoms/Breadcrumb";
import { Col, Container, Row } from "@/components/atoms/Grid";
import { Justify } from "@/components/atoms/Grid/interfaces";
import { useScroll } from "@/hooks/useScroll";
import classNames from "classnames";
import Image, { StaticImageData } from "next/image";
import { CSSProperties, ReactNode } from "react";
import styles from "./Hero.module.scss";

const PARALLAX_FACTOR = 0.05;
const PARALLAX_MAX_OFFSET = 24;

export interface HeroProps extends BaseProps {
	title: ReactNode;
	subtitle: ReactNode;
	backgroundImage: {
		/** Import the image so Next generates its blur placeholder. */
		src: StaticImageData;
		alt: string;
		position?: "top" | "center" | "bottom" | "left" | "right";
	};
	compact?: boolean;
	negative?: boolean;
	breadcrumbItems?: BreadcrumbItem[];
}

export const Hero = ({
	className,
	title,
	subtitle,
	compact = false,
	negative = false,
	backgroundImage,
	breadcrumbItems,
}: HeroProps) => {
	const { scrollY } = useScroll();
	const parallaxOffset = Math.min(scrollY * PARALLAX_FACTOR, PARALLAX_MAX_OFFSET);

	return (
		<div
			className={classNames(className, styles.hero, {
				[styles.compact]: compact,
				[styles.negative]: negative,
			})}
			id={compact ? undefined : "home"}
		>
			<Image
				className={classNames(
					className,
					styles.backgroundImage,
					`${styles.backgroundImage}--position-${backgroundImage.position || "center"}`
				)}
				alt={backgroundImage.alt}
				src={backgroundImage.src}
				placeholder="blur"
				priority
				fill
				style={{ "--parallax-offset": `${parallaxOffset}px` } as CSSProperties}
			/>

			<div
				className={classNames(styles.textWrapper, {
					"text--align-center": !compact,
				})}
			>
				<Container>
					<Row xsJustify={compact ? Justify.start : Justify.center}>
						<Col xs={12} lg={10}>
							<h1 className={classNames(styles.title)}>{title}</h1>
							<p
								className={classNames(
									styles.subtitle,
									"text--strong",
									"text--strong"
								)}
							>
								{subtitle}
							</p>
						</Col>
						{breadcrumbItems && breadcrumbItems.length > 0 && (
							<Col xs={12}>
								<Breadcrumb items={breadcrumbItems} />
							</Col>
						)}
					</Row>
				</Container>
			</div>
		</div>
	);
};
