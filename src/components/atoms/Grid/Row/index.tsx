import styles from "./styles.module.scss";
import { RowProps } from "../interfaces";
import classNames from "classnames";

const Row = ({ className, children, ...props }: RowProps) => {
  const customization = (Object.keys(props) as Array<keyof typeof props>).map(
    (key) => {
      const value = props[key];
      if (value === undefined || value === null || value === false) return;

      // boolean flags (e.g. mdReverse) map to a class without a value suffix
      if (typeof value === "boolean") {
        return styles[`${key}`];
      }

      // other props (numbers/strings) map to key-value classes like mdOrder-1
      return styles[`${key}-${value}`];
    },
  );

  return (
    <div className={classNames(styles.row, className, customization)}>
      {children}
    </div>
  );
};

export default Row;
