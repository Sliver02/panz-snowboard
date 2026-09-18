import { RouteEnum } from "@/common/routeEnum";
import { pageMeta } from "@/common/seo";

export const generateMetadata = pageMeta(RouteEnum.TELEMARK);

export default function TelemarkLayout({ children }: { children: React.ReactNode }) {
	return <>{children}</>;
}
