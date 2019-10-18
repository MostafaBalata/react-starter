import * as React from "react";

import { Action, ActionTypes, useActions } from "./actions";

import { applyMiddleware } from "./middleware";

export interface State {
  num: number;
  message: string;
}

interface ProviderProps {
  children: React.ReactNode;
}

export interface ActionCreator {
  trigger: (action: Action) => Action;

}

export interface Dispatcher {
  enhancedDispatch: (action: Action) => void;
  actions: ActionCreator
}

const Unknown = undefined as unknown

// Define our initialState
export const initState: State = {
  num: 0,
  message: "Hello",
};

const stateContext = React.createContext<State>(Unknown as State);
const dispatchContext = React.createContext<Dispatcher>(Unknown as Dispatcher);
const StoreConsumer = stateContext.Consumer;

function reducer(state: State = initState, action: Action): State {
  switch (action.type) {
    case ActionTypes.INCREASE:
      const num: number = state.num + 1;
      return {
        ...state,
        num,
      };

    case ActionTypes.SAGA_HELLO:
      const message = action.payload || "Nothing";
      return {
        ...state,
        message,
      };
    default:
      return state;
  }
}

const StoreProvider = (props: ProviderProps) => {
  const [state, dispatch] = React.useReducer(reducer, initState);

  const StateContext = stateContext;
  const DispatchContext = dispatchContext;

  const enhancedDispatch = applyMiddleware(dispatch);
  const actions = useActions(enhancedDispatch);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={{ enhancedDispatch, actions }}>
        {props.children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
};


function useState() {
  const context = React.useContext(stateContext);

  if (context === undefined) {
    throw new Error("useState must be used within a ِAppProvider");
  }
  return context;
}

function useDispatch() {
  const context = React.useContext(dispatchContext);

  if (context === undefined) {
    throw new Error("useState must be used within a AppProvider");
  }
  return context;
}


export {
  StoreConsumer,
  StoreProvider,
  useState,
  useDispatch
}