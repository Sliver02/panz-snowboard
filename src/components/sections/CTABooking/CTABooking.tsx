"use client";

import Link from "next/link";
import classNames from "classnames";
import styles from "./CTABooking.module.scss";
import { RouteEnum } from "@/common/routeEnum";
import { BaseProps } from "@/common/globalInterfaces";
import { Button } from "@/components/atoms/Button";
import { Col, Container, Row } from "@/components/atoms/Grid";
import { Justify } from "@/components/atoms/Grid/interfaces";
import { Section } from "@/components/organisms/Section";
import { Contact } from "@/components/sections/Contact";
import { useTranslations } from "next-intl";
import { CalendarCheck, MessageCircle } from "lucide-react";
import bandImage from "@public/images/PXL_20241207_092505122.jpg";

export const CTABooking = ({ className }: BaseProps) => {
	const t = useTranslations("activities");
	const tc = useTranslations("contact");

	return (
		<Section
			id="contact"
			className={classNames(styles.cta, className)}
			backgroundImage={bandImage}
			backgroundOverlay={<div className={styles.scrim} />}
		>
			<Container className={styles.contentWrapper}>
				<Row xsJustify={Justify.center}>
					<Col xs={12} lg={8}>
						<h2 className={classNames(styles.title, "text--align-center")}>
							{t("bookButton")}
						</h2>
						<p
							className={classNames(
								styles.description,
								"text--p-lg",
								"text--align-center"
							)}
						>
							{t("ctaDescription")}
						</p>
						<div className={styles.actions}>
							<Link href={RouteEnum.BOOKING}>
								<Button size="large" icon={<CalendarCheck size={18} />}>
									{t("bookButton")}
								</Button>
							</Link>
							<Contact
								trigger={
									<Button
										size="large"
										variant="outlined"
										className={styles.secondaryButton}
										icon={<MessageCircle size={18} />}
									>
										{tc("title")}
									</Button>
								}
							/>
						</div>
					</Col>
				</Row>
			</Container>
		</Section>
	);
};
