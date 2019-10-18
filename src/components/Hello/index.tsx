import * as React from "react";
import { Button } from "reactstrap";

import * as styles from "./styles.scss";

interface Props {
  num: number;
  message: string;
  onClick: () => void;
}

const Hello: React.FunctionComponent<Props> = props => (
  <div className={styles.hello}>
    <h1 className="big-title">Hello!</h1>

    <h2>State</h2>
    <p>
      : : <span>{props.num}</span> : :
    </p>

    <h2>Middleware</h2>
    <p>
      : : <span>{props.message}</span> : :
    </p>

    <Button color="success" onClick={props.onClick}>
      click
    </Button>
  </div>
);

export { Hello };
