import { RouteEnum } from "@/common/routeEnum";
import { pageMeta } from "@/common/seo";

export const generateMetadata = pageMeta(RouteEnum.CADORE);

export default function CadoreLayout({ children }: { children: React.ReactNode }) {
	return <>{children}</>;
}
