import { RouteEnum } from "@/common/routeEnum";
import { pageMeta } from "@/common/seo";

export const generateMetadata = pageMeta(RouteEnum.PRIVACY_POLICY);

export default function PrivacyPolicyLayout({ children }: { children: React.ReactNode }) {
	return <>{children}</>;
}
