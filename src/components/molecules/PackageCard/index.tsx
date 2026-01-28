"use client";
import classNames from "classnames";
import styles from "./styles.module.scss";
import { BaseProps } from "@/common/globalInterfaces";
import Button from "@/components/atoms/Button";
import { use } from "react";
import { useTranslations } from "use-intl";

export interface PackageCardProps extends BaseProps {
  image?: string;
  title: string;
  subtitle?: string;
  price?: string;
  features?: string[] | unknown;
  onClick?: () => void;
}

const PackageCard = ({
  className,
  image,
  title,
  subtitle,
  price,
  features = [],
  onClick,
}: PackageCardProps) => {
  const t = useTranslations("activities");

  return (
    <div className={classNames(styles.card, className)}>
      {image && (
        <div
          className={styles.media}
          style={{ backgroundImage: `url(/images/${image}.jpg)` }}
        />
      )}
      <div className={styles.body}>
        <div className={styles.header}>
          <h3 className={styles.title}>{title}</h3>
          {price && <div className={styles.price}>{price}</div>}
        </div>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        {Array.isArray(features) && features.length > 0 && (
          <ul className={styles.features}>
            {features.map((f: unknown, i: number) => (
              <li key={i}>{String(f)}</li>
            ))}
          </ul>
        )}
        {onClick && (
          <div className={styles.cta}>
            <Button onClick={onClick}>{t("bookButton")}</Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PackageCard;
