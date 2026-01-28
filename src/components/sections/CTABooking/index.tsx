"use client";

import Link from "next/link";
import classNames from "classnames";
import styles from "./styles.module.scss";
import { RouteEnum } from "@/common/routeEnum";
import { BaseProps } from "@/common/globalInterfaces";
import { useTranslations } from "next-intl";

const CTABooking = ({ className }: BaseProps) => {
  const t = useTranslations("activities");

  return (
    <section className={classNames(styles.cta, className)}>
      <div className={styles.inner}>
        <h2>{t("bookButton")}</h2>
        <p>{t("ctaDescription")}</p>
        <br />
        <Link href={RouteEnum.BOOKING} className={styles.button}>
          {t("bookButton")}
        </Link>
      </div>
    </section>
  );
};

export default CTABooking;
