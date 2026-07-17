import { BaseProps } from "@/common/globalInterfaces";
import classNames from "classnames";
import styles from "./SectionTitle.module.scss";

export interface SectionTitleProps extends BaseProps {
	text: string;
	center?: boolean;
	highlight?: boolean;
	uppercase?: boolean;
}

export const SectionTitle = ({ text, center, highlight, uppercase }: SectionTitleProps) => {
	return (
		<span
			className={classNames(
				styles["sectionTitle"],
				center && styles["sectionTitle--center"],
				highlight && styles["sectionTitle--highlight"],
				uppercase && styles["sectionTitle--uppercase"]
			)}
		>
			<span className={classNames(styles.highlight)}>
				<h3>{text}</h3>
			</span>
		</span>
	);
};
