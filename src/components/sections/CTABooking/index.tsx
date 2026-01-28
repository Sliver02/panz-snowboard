import Link from "next/link";
import classNames from "classnames";
import styles from "./styles.module.scss";
import { RouteEnum } from "@/common/routeEnum";
import { BaseProps } from "@/common/globalInterfaces";

const CTABooking = ({ className }: BaseProps) => {
  return (
    <section className={classNames(styles.cta, className)}>
      <div className={styles.inner}>
        <h2>Book now</h2>
        <p>Secure your spot — private lessons and guided days.</p>
        <br />
        <Link href={RouteEnum.BOOKING} className={styles.button}>
          Book now
        </Link>
      </div>
    </section>
  );
};

export default CTABooking;
