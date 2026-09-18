import { RouteEnum } from "@/common/routeEnum";
import { pageMeta } from "@/common/seo";

export const generateMetadata = pageMeta(RouteEnum.ZOLDO_CIVETTA);

export default function ZoldoCivettaLayout({ children }: { children: React.ReactNode }) {
	return <>{children}</>;
}
