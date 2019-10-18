import * as React from "react";

import { Header } from "../components/Header";

// Styles
import "../styles/main.scss";

import * as styles from "./styles.scss";

// Components & Containers
import { Route, RouteComponentProps, Switch, withRouter } from "react-router";
import { LeftMenu } from "../components/LeftMenu";
import { NotFoundPage } from "./pageNotFound";

import dashboard from "./dashboard";

class PageWrapper extends React.Component<RouteComponentProps<{}>> {
  public render(): React.ReactNode {
    return (
      <div>
        <Header />
        <div className={styles.app}>
          <div>
            <LeftMenu />

            <div className={styles.well}>
              <div className="container-fluid">
                <Switch>
                  <Route path="/dashboard" component={dashboard} />
                  <Route path="/not-found" component={NotFoundPage} />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(PageWrapper);
