import { BaseProps } from "@/common/globalInterfaces";
import classNames from "classnames";
import styles from "./CardFrame.module.scss";
import Image, { StaticImageData } from "next/image";

export interface CardFrameProps extends BaseProps {
	/** Import the image so Next generates its blur placeholder. */
	image: StaticImageData;
	alt?: string;
}

export const CardFrame = ({ className, image, alt }: CardFrameProps) => {
	return (
		<div className={classNames(className, styles.cardFrame)}>
			<div className={classNames(styles.imageContainer)}>
				<Image
					className={classNames(styles.backgroundImage)}
					alt={alt ?? ""}
					src={image}
					placeholder="blur"
					fill
				/>

				<div className={classNames(styles.frame)} />
			</div>
		</div>
	);
};
