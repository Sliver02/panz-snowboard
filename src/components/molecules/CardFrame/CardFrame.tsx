"use client";

import { BaseProps } from "@/common/globalInterfaces";
import classNames from "classnames";
import styles from "./CardFrame.module.scss";
import Image, { StaticImageData } from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

type Point = { x: number; y: number };

// The photo's jagged crop is itself the "frame" — no separate border/icons.
// These are its four corners at rest and at full scroll, in that order;
// scroll position morphs linearly between them so the cut shifts as the
// photo travels through the viewport instead of sitting static.
const SHAPE_REST: Point[] = [
	{ x: 10, y: 10 },
	{ x: 98, y: 2 },
	{ x: 100, y: 100 },
	{ x: 10, y: 98 },
];
const SHAPE_SCROLLED: Point[] = [
	{ x: 3, y: 4 },
	{ x: 93, y: 10 },
	{ x: 97, y: 96 },
	{ x: 7, y: 91 },
];

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

const shapeToClipPath = (t: number) => {
	const points = SHAPE_REST.map((p, i) => ({
		x: lerp(p.x, SHAPE_SCROLLED[i].x, t),
		y: lerp(p.y, SHAPE_SCROLLED[i].y, t),
	}));
	return `polygon(${points.map((p) => `${p.x}% ${p.y}%`).join(", ")})`;
};

export interface CardFrameProps extends BaseProps {
	/** Import the image so Next generates its blur placeholder. */
	image: StaticImageData;
	alt?: string;
}

export const CardFrame = ({ className, image, alt }: CardFrameProps) => {
	const containerRef = useRef<HTMLDivElement>(null);
	const imageRef = useRef<HTMLImageElement>(null);

	useEffect(() => {
		const container = containerRef.current;
		const imageEl = imageRef.current;
		if (!container || !imageEl) return;

		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

		const ctx = gsap.context(() => {
			// Runs across the photo's entire transit through the viewport — from
			// the moment it first appears at the bottom to the moment it fully
			// exits the top — so the shape actually shifts noticeably rather than
			// flashing near the top of the page.
			ScrollTrigger.create({
				trigger: container,
				start: "top bottom",
				end: "bottom top",
				scrub: 0.8,
				invalidateOnRefresh: true,
				onUpdate: (self) => {
					const clipPath = shapeToClipPath(self.progress);
					imageEl.style.clipPath = clipPath;
					imageEl.style.setProperty("-webkit-clip-path", clipPath);
				},
			});
		}, container);

		return () => ctx.revert();
	}, []);

	return (
		<div ref={containerRef} className={classNames(className, styles.cardFrame)}>
			<div className={classNames(styles.imageContainer)}>
				<Image
					ref={imageRef}
					className={classNames(styles.backgroundImage)}
					alt={alt ?? ""}
					src={image}
					placeholder="blur"
					fill
				/>
			</div>
		</div>
	);
};
