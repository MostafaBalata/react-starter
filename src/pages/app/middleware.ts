import match from "conditional-expression";
import { Action } from "./actions";

import { dashBoardMiddleware } from "../dashboard/api";

interface TakeEvery {
  actionName: string;
  functionCall: () => Promise<Action>;
}
const middlewares = [dashBoardMiddleware];

export function takeEvery(actionName: string, functionCall: () => Promise<Action>): TakeEvery {
  return {
    actionName,
    functionCall,
  };
}

/***
 * applyMiddleware is the function that will be executed before any dispatched event
 * @TODO: 1- the function is checking always check each action agains all the registered middlewares and actions;
 */
export const applyMiddleware = (dispatch: any) => (action: Action) =>
  dispatch(action) ||
  middlewares.forEach(useMiddleware => {
    let value = null;
    const middleWare = useMiddleware();

    do {
      value = middleWare.next().value as TakeEvery;

      if (value !== undefined) {
        match(value)
          .on((take: TakeEvery) => take.actionName === action.type)
          .then((takeEveryResult: TakeEvery) =>
            takeEveryResult.functionCall().then(callResult => {
              if (callResult) {
                applyMiddleware(dispatch)(callResult);
              }
            }),
          );
      }
    } while (value !== undefined);
  });
