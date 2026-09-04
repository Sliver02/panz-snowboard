"use client";

import Map, { Marker, NavigationControl, Popup } from "react-map-gl/mapbox";
import "mapbox-gl/dist/mapbox-gl.css";
import Image from "next/image";
import Link from "next/link";
import classNames from "classnames";
import { useState } from "react";
import { MapPin } from "@/components/atoms/MapPin";
import fallbackImage from "@public/images/mappa.png";
import { BaseProps } from "@/common/globalInterfaces";
import { DEFAULT_MAP_FOCUS, MapFocus, TEACHING_LOCATIONS } from "./locations";
import styles from "./LocationsMap.module.scss";

export interface LocationsMapProps extends BaseProps {
	/** Center/zoom to open on. Omit to show a viewport that fits every pin. */
	focus?: MapFocus;
}

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

export const LocationsMap = ({ className, focus }: LocationsMapProps) => {
	const [hoveredId, setHoveredId] = useState<string | null>(null);
	const viewport = focus ?? DEFAULT_MAP_FOCUS;

	if (!MAPBOX_TOKEN) {
		return (
			<div className={classNames(styles.locationsMap, className)}>
				{process.env.NODE_ENV !== "production" && (
					<div className={styles.tokenWarning}>
						NEXT_PUBLIC_MAPBOX_TOKEN missing — showing fallback map. Add it to
						.env.local.
					</div>
				)}
				<Image
					src={fallbackImage}
					placeholder="blur"
					fill
					style={{ objectFit: "cover" }}
					sizes="100vw"
					alt="Mappa delle zone di insegnamento nelle Dolomiti"
				/>
			</div>
		);
	}

	const hovered = TEACHING_LOCATIONS.find((location) => location.id === hoveredId);

	return (
		<div className={classNames(styles.locationsMap, className)}>
			<Map
				mapboxAccessToken={MAPBOX_TOKEN}
				initialViewState={viewport}
				mapStyle="mapbox://styles/mapbox/outdoors-v12"
				style={{ width: "100%", height: "100%" }}
			>
				<NavigationControl position="top-right" showCompass={false} />
				{TEACHING_LOCATIONS.map((location) => (
					<Marker
						key={location.id}
						longitude={location.longitude}
						latitude={location.latitude}
						anchor="bottom"
					>
						<Link
							href={location.route}
							className={styles.markerLink}
							aria-label={location.name}
							onMouseEnter={() => setHoveredId(location.id)}
							onMouseLeave={() => setHoveredId(null)}
							onFocus={() => setHoveredId(location.id)}
							onBlur={() => setHoveredId(null)}
						>
							<MapPin size={32} />
						</Link>
					</Marker>
				))}
				{hovered && (
					<Popup
						longitude={hovered.longitude}
						latitude={hovered.latitude}
						anchor="bottom"
						offset={36}
						closeButton={false}
						closeOnClick={false}
					>
						{hovered.name}
					</Popup>
				)}
			</Map>
		</div>
	);
};
