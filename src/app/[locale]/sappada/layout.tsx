import { RouteEnum } from "@/common/routeEnum";
import { pageMeta } from "@/common/seo";

export const generateMetadata = pageMeta(RouteEnum.SAPPADA);

export default function SappadaLayout({ children }: { children: React.ReactNode }) {
	return <>{children}</>;
}
