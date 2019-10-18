import { Action, ActionTypes, triggerAnyThing, writeMessage } from "../app/actions";
import { takeEvery } from "../app/middleware";

export async function me(): Promise<Action> {
  // API request
  return writeMessage("It's me mario");
}

async function you(): Promise<Action> {
  // API request
  return triggerAnyThing("It's No one");
}

export function* dashBoardMiddleware() {
  yield takeEvery(ActionTypes.INCREASE, me);
  yield takeEvery(ActionTypes.SAGA_HELLO, you);
}
