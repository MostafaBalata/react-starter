/*
 * We're defining every action name constant here
 * We're using Typescript's enum
 * Typescript understands enum better
 */
export enum ActionTypes {
  INCREASE = "INCREASE",
  SAGA_HELLO = "SAGA_HELLO",
  ANYTHING = "ANYTHING",
}

export interface Action {
  type: string;
  payload?: string;
}

/*
 * Define return types of our actions
 */
export interface Increase extends Action {
  type: ActionTypes.INCREASE;
}

export interface WriteMessage extends Action {
  type: ActionTypes.SAGA_HELLO;
  payload: string;
}

/*
 * Define the Action type
 * It can be one of the types defining in our action file
 * It will be useful to tell typescript about our types in our reducer
 */

/*
 * Define our actions creators
 * We are returning the right Action for each function
 */
export function increaseNumber(): Increase {
  return {
    type: ActionTypes.INCREASE,
  };
}

/*
 * Define our actions creators
 * We are returning the right Action for each function
 */
export function writeMessage(message: string): WriteMessage {
  return {
    type: ActionTypes.SAGA_HELLO,
    payload: message,
  };
}

/*
 * Define our actions creators
 * We are returning the right Action for each function
 */
export function triggerAnyThing(message: string): Action {
  return {
    type: ActionTypes.ANYTHING,
    payload: message,
  };
}

export const useActions = (dispatch: any) => ({
  trigger: (action: Action) => dispatch({ type: action.type, payload: action.payload }),
});
