// React & libs
import * as React from "react";

import { State, StoreConsumer, StoreProvider } from "./store";

export function withAppContext<P>(Component: React.ComponentType<P>) {
  return function WrapperComponent(props: P) {
    return (
      <StoreProvider>
        <StoreConsumer>{(state: State) => <Component {...props} context={state} />}</StoreConsumer>
      </StoreProvider>
    );
  };
}
