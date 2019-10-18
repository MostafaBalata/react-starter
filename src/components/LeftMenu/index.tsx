// React & libs
import * as React from "react";

// styles
import * as styles from "./styles.scss";

// componets
import { LeftMenuHeader } from "../../components/LeftMenuHeader";
import { LeftMenuLink } from "../LeftMenuLink";

export const LeftMenu: React.FunctionComponent = () => {
  return (
    <div className={styles.leftMenu}>
      <LeftMenuHeader />

      <div className={styles.leftMenuLinkContainer}>
        <ul className={styles.list}>
          <LeftMenuLink content={"Dashboard"} icon={"home"} link={"/dashboard"} />
          <LeftMenuLink content={"Not found"} icon="stop-circle" link={"/not-found"} />
        </ul>
      </div>
    </div>
  );
};
