import * as React from "react";
import * as styles from "./styles.scss";

export const NotFoundPage: React.SFC = () => (
  <div className={styles.notFound}>
    <h1 className="big-title">Page not found</h1>
    <h1 className={styles.danger}>404</h1>
  </div>
);
