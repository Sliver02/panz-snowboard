import { SVGProps } from "react";

export interface MapPinProps extends Omit<SVGProps<SVGSVGElement>, "width" | "height"> {
	/** Icon edge length in px (width = height). */
	size?: number;
}

// Branded map marker (not the default Mapbox pin): a teardrop filled with
// the site's primary orange, matching --primary-main.

export const MapPin = ({ size = 32, ...props }: MapPinProps) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		role="img"
		viewBox="0 0 24 24"
		width={size}
		height={size}
		aria-hidden="true"
		{...props}
	>
		<path
			d="M12 0C7.03 0 3 4.03 3 9c0 6.75 9 15 9 15s9-8.25 9-15c0-4.97-4.03-9-9-9z"
			fill="var(--primary-main)"
			stroke="var(--palette-neutral-900)"
			strokeWidth="0.5"
		/>
		<circle cx="12" cy="9" r="3.5" fill="var(--palette-neutral-0)" />
	</svg>
);
