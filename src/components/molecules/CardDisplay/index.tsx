import classNames from "classnames";
import Image from "next/image";
import styles from "./styles.module.scss";
import { BaseProps } from "@/common/globalInterfaces";
import { ReactNode } from "react";
import Button, { ButtonProps } from "@/components/atoms/Button";

export interface CardDisplayProps extends BaseProps {
  image: string;
  imageFormat?: string;
  title?: string;
  description?: ReactNode;
  button?: ButtonProps;
}

const CardDisplay = ({
  className,
  title,
  description,
  image,
  imageFormat = "jpg",
  button,
}: CardDisplayProps) => {
  return (
    <div className={classNames(className, styles.cardDisplay)}>
      <div className={classNames(styles.imageContainer)}>
        <Image
          className={classNames(styles.backgroundImage)}
          alt={title ?? ""}
          src={"/images/" + image + "." + imageFormat}
          placeholder="blur"
          blurDataURL={"/images/" + image + "_placeholder." + imageFormat}
          fill
        />
        {title && (
          <div
            className={classNames(styles.titleContainer, "text--align-right")}
          >
            <h4>{title}</h4>
          </div>
        )}
      </div>
      {description && (
        <div className={classNames(styles.descriptionContainer)}>
          <p className={classNames("text--p-lg")}>{description}</p>
        </div>
      )}
      {button && (
        <Button
          className={classNames(styles.button)}
          variant="outlined"
          {...button}
        />
      )}
    </div>
  );
};

export default CardDisplay;
