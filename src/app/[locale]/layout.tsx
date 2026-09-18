import "@/designSystem/globals.scss";
import classNames from "classnames";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Urbanist } from "next/font/google";
import { SmoothScroll } from "@/components/atoms/SmoothScroll";
import { rootMeta } from "@/common/seo";
import { structuredData } from "@/common/seoContent";

// Free variable stand-in for Brandon Grotesque (double-story a, similar width, 100–900 + italics).
const urbanist = Urbanist({
	subsets: ["latin"],
	style: ["normal", "italic"],
	display: "swap",
	variable: "--font-urbanist",
});

export const generateMetadata = rootMeta;

export default async function RootLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: Promise<{ locale: string }>;
}) {
	// Extract the locale from the route params (async for Next.js App Router)
	const { locale } = await params;

	// Load the translation messages for the selected locale
	const messages = await getMessages({ locale });

	return (
		<html
			lang={locale}
			data-theme="light"
			className={classNames(urbanist.variable)}
		>
			<head>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(structuredData(locale)),
					}}
				/>
			</head>
			<body>
				<NextIntlClientProvider messages={messages}>
					<SmoothScroll>
						<div className={classNames("root")}>{children}</div>
					</SmoothScroll>
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
