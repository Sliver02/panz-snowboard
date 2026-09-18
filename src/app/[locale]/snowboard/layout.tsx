import { RouteEnum } from "@/common/routeEnum";
import { pageMeta } from "@/common/seo";

export const generateMetadata = pageMeta(RouteEnum.SNOWBOARD);

export default function SnowboardLayout({ children }: { children: React.ReactNode }) {
	return <>{children}</>;
}
