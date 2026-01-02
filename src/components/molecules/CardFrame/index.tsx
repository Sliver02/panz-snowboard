import { BaseProps } from "@/common/globalInterfaces";
import classNames from "classnames";
import styles from "./styles.module.scss";
import Image from "next/image";

export interface CardFrameProps extends BaseProps {
  image: string;
  imageFormat?: string;
  alt?: string;
}

const CardFrame = ({
  className,
  image,
  imageFormat = "jpg",
  alt,
}: CardFrameProps) => {
  return (
    <div className={classNames(className, styles.cardFrame)}>
      <div className={classNames(styles.imageContainer)}>
        <Image
          className={classNames(styles.backgroundImage)}
          alt={alt ?? ""}
          src={"/images/" + image + "." + imageFormat}
          placeholder="blur"
          blurDataURL={"/images/" + image + "_placeholder." + imageFormat}
          fill
        />

        <div className={classNames(styles.frame)} />
      </div>
    </div>
  );
};

export default CardFrame;
