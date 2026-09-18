import { RouteEnum } from "@/common/routeEnum";

export interface TeachingLocation {
	id: string;
	name: string;
	longitude: number;
	latitude: number;
	route: RouteEnum;
}

// Single source of truth for every pin on the map. Coordinates are
// town/landmark centers, not street-level geocodes.
//
// Zoldo/Civetta pin: placed at Forno di Zoldo (a real, geocodable
// settlement matching the route name) rather than the Civetta massif,
// which is a mountain range with no single sensible point.
//
// Cadore has two pins that both route to RouteEnum.CADORE: the home base
// at Pieve di Cadore, and a second pin at Auronzo di Cadore (Tre Cime
// access, already named in the cadore page copy). They sit ~13km apart so
// they never visually overlap.
export const TEACHING_LOCATIONS: TeachingLocation[] = [
	{
		id: "home",
		name: "Pieve di Cadore",
		longitude: 12.3741,
		latitude: 46.4285,
		route: RouteEnum.CADORE,
	},
	{
		id: "cortina",
		name: "Cortina d'Ampezzo",
		longitude: 12.1361,
		latitude: 46.5403,
		route: RouteEnum.CORTINA,
	},
	{
		id: "sappada",
		name: "Sappada",
		longitude: 12.683,
		latitude: 46.567,
		route: RouteEnum.SAPPADA,
	},
	{
		id: "zoldo",
		name: "Forno di Zoldo",
		longitude: 12.183,
		latitude: 46.35,
		route: RouteEnum.ZOLDO_CIVETTA,
	},
	{
		id: "cadoreLandmark",
		name: "Auronzo di Cadore",
		longitude: 12.433,
		latitude: 46.55,
		route: RouteEnum.CADORE,
	},
];

export interface MapFocus {
	longitude: number;
	latitude: number;
	zoom: number;
}

// Default viewport when no focus is passed: fits all 5 pins.
export const DEFAULT_MAP_FOCUS: MapFocus = {
	longitude: 12.3,
	latitude: 46.46,
	zoom: 9.3,
};
