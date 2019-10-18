// React & libs
import * as React from "react";

// Styles
import * as styles from "./styles.scss";

// Utils & helpers
import { startsWith } from "lodash";

// Fonts
import { IconProp, library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

library.add(fas);

interface IProps {
  content: string;
  icon: IconProp;
  link: string;
}

const LeftMenuLink: React.SFC<IProps> = ({ content, icon, link }) => {
  const isLinkActive = startsWith(
    window.location.pathname.replace("/", "").concat("/"),
    link.replace("/", "").concat("/"),
  );
  return (
    <li className={styles.item}>
      <Link
        className={`${styles.link}  ${isLinkActive ? styles.linkActive : ""} `}
        to={{
          pathname: link,
          search: "",
        }}
      >
        <FontAwesomeIcon className={styles.linkIcon} icon={icon} />
        <span>{content} </span>
      </Link>
    </li>
  );
};

export { LeftMenuLink };
