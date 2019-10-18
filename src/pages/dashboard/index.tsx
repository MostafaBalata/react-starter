// React & libs
import * as React from "react";
import { increaseNumber } from "../app/actions";
import { withAppContext } from "../app/context";
import { ActionCreator, useDispatch, useState } from "../app/store";

// componets
import { Hello } from "../../components/Hello";
// styles
import * as styles from "./styles.scss";


const increase = (actions: ActionCreator) => () => {
  actions.trigger(increaseNumber());
}

const Dashboard: React.FunctionComponent = () => {
  const { message, num } = useState();
  const { actions } = useDispatch();

  return (
    <div className={styles.homePage}>
      <Hello
        message={message}
        num={num}
        onClick={increase(actions)}
      />
    </div>
  );
};

export default withAppContext(Dashboard);
