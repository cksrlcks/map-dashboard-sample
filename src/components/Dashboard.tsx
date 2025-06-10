import type { PropsWithChildren } from "react";
import styles from "./Dashboard.module.css";

export default function Dashboard({ children }: PropsWithChildren) {
  return (
    <div className={styles.dashboard}>
      <div className={styles.inner}>{children}</div>
    </div>
  );
}
