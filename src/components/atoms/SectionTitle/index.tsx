import { BaseProps } from "@/common/globalInterfaces";
import classNames from "classnames";
import styles from "./styles.module.scss";

export interface SectionTitleProps extends BaseProps {
  text: string;
  center?: boolean;
  highlight?: boolean;
}

const SectionTitle = ({ text, center, highlight }: SectionTitleProps) => {
  return (
    <span
      className={classNames(
        styles["sectionTitle"],
        center && styles["sectionTitle--center"],
        highlight && styles["sectionTitle--highlight"]
      )}
    >
      <span className={classNames(styles.highlight)}>
        <h3>{text}</h3>
      </span>
    </span>
  );
};

export default SectionTitle;
