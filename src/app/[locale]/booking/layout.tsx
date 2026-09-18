import { RouteEnum } from "@/common/routeEnum";
import { pageMeta } from "@/common/seo";

export const generateMetadata = pageMeta(RouteEnum.BOOKING);

export default function BookingLayout({ children }: { children: React.ReactNode }) {
	return <>{children}</>;
}
