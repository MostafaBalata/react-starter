import * as React from "react";
import * as styles from "./styles.scss";

export const Header: React.FunctionComponent = () => {
  return (
    <div className={styles.header}>
      <h2>Admin Dashboard</h2>
    </div>
  );
};
