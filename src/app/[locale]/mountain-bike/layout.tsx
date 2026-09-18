import { RouteEnum } from "@/common/routeEnum";
import { pageMeta } from "@/common/seo";

export const generateMetadata = pageMeta(RouteEnum.MOUNTAIN_BIKE);

export default function MountainBikeLayout({ children }: { children: React.ReactNode }) {
	return <>{children}</>;
}
