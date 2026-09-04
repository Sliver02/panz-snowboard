"use client";

import { BaseProps } from "@/common/globalInterfaces";
import classNames from "classnames";
import styles from "./CardFrame.module.scss";
import Image, { StaticImageData } from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useMemo, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

type Point = { x: number; y: number };

// The photo's jagged crop is itself the "frame" — no separate border/icons.
// These are its four corners at rest; scroll position morphs each corner
// toward its own randomized target as the photo travels through the
// viewport, so the cut visibly shifts instead of barely nudging.
const SHAPE_REST: Point[] = [
	{ x: 10, y: 10 },
	{ x: 98, y: 2 },
	{ x: 100, y: 100 },
	{ x: 10, y: 98 },
];

// Every corner moves by at least MIN_JITTER (so the effect always reads as
// deliberate, never near-zero by chance) up to MAX_JITTER, in a random
// direction — generated once per mounted instance so several CardFrames on
// the same page don't morph in lockstep.
const MIN_JITTER = 6;
const MAX_JITTER = 16;

const randomJitter = () => {
	const magnitude = MIN_JITTER + Math.random() * (MAX_JITTER - MIN_JITTER);
	return Math.random() < 0.5 ? -magnitude : magnitude;
};

const clampPercent = (value: number) => Math.min(100, Math.max(0, value));

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

export interface CardFrameProps extends BaseProps {
	/** Import the image so Next generates its blur placeholder. */
	image: StaticImageData;
	alt?: string;
}

export const CardFrame = ({ className, image, alt }: CardFrameProps) => {
	const containerRef = useRef<HTMLDivElement>(null);
	const imageRef = useRef<HTMLImageElement>(null);

	const shapeScrolled = useMemo<Point[]>(
		() =>
			SHAPE_REST.map((point) => ({
				x: clampPercent(point.x + randomJitter()),
				y: clampPercent(point.y + randomJitter()),
			})),
		[]
	);

	useEffect(() => {
		const container = containerRef.current;
		const imageEl = imageRef.current;
		if (!container || !imageEl) return;

		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

		const shapeToClipPath = (t: number) => {
			const points = SHAPE_REST.map((p, i) => ({
				x: lerp(p.x, shapeScrolled[i].x, t),
				y: lerp(p.y, shapeScrolled[i].y, t),
			}));
			return `polygon(${points.map((p) => `${p.x}% ${p.y}%`).join(", ")})`;
		};

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
	}, [shapeScrolled]);

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
