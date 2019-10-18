// React & Libs
import * as React from "react";

// Styles
import * as styles from "./styles.scss";

const LeftMenuHeader: React.SFC = () => {
  return (
    <div className={styles.leftMenuHeader}>
      <a href="/" className={styles.leftMenuHeaderLink}>
        <span className={styles.projectName}>Admin Dashboard</span>
      </a>
    </div>
  );
};

export { LeftMenuHeader };
