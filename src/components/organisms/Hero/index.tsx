import { BaseProps } from "@/common/globalInterfaces";
import Breadcrumb, { BreadcrumbItem } from "@/components/atoms/Breadcrumb";
import { Col, Container, Row } from "@/components/atoms/Grid";
import { Justify } from "@/components/atoms/Grid/interfaces";
import classNames from "classnames";
import Image from "next/image";
import styles from "./styles.module.scss";
import { ReactNode } from "react";

export interface HeroProps extends BaseProps {
  title: ReactNode;
  subtitle: ReactNode;
  backgroundImage: {
    src: string;
    alt: string;
    position?: "top" | "center" | "bottom" | "left" | "right";
  };
  compact?: boolean;
  negative?: boolean;
  breadcrumbItems?: BreadcrumbItem[];
}

const Hero = ({
  className,
  title,
  subtitle,
  compact = false,
  negative = false,
  backgroundImage,
  breadcrumbItems,
}: HeroProps) => {
  const placeholderImage = backgroundImage.src.replace(
    /\.(jpg|png|jpeg)$/,
    "_placeholder.$1"
  );

  return (
    <div
      className={classNames(className, styles.hero, {
        [styles.compact]: compact,
        [styles.negative]: negative,
      })}
      id={compact ? undefined : "home"}
    >
      <Image
        className={classNames(
          className,
          styles.backgroundImage,
          `${styles.backgroundImage}--position-${
            backgroundImage.position || "center"
          }`
        )}
        alt={backgroundImage.alt}
        src={backgroundImage.src}
        placeholder="blur"
        blurDataURL={placeholderImage}
        priority
        fill
      />

      <div
        className={classNames(styles.textWrapper, {
          "text--align-center": !compact,
        })}
      >
        <Container>
          <Row xsJustify={compact ? Justify.start : Justify.center}>
            <Col xs={12} lg={10}>
              <h1>{title}</h1>
              <p
                className={classNames(
                  "text--strong",
                  "text--p-xxl",
                  "text--strong"
                )}
              >
                {subtitle}
              </p>
            </Col>
            {breadcrumbItems && breadcrumbItems.length > 0 && (
              <Col xs={12}>
                <Breadcrumb items={breadcrumbItems} />
              </Col>
            )}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Hero;
