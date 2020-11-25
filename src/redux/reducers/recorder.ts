import { RootState } from "./../store";
import { Action } from "redux";

interface RecorderState {
  dateStart: string;
}

const START = "recorder/start";
const STOP = "recorder/stop";

type StartAction = Action<typeof START>;
type StopAction = Action<typeof STOP>;

export const startAction = (): StartAction => ({
  type: START,
});

export const stopAction = (): StopAction => ({
  type: STOP,
});
const initialRecorderState = {
  dateStart: "",
};

const selectRecorderState = (rootState: RootState) => {
  return rootState.recorder;
};

export const selectDateStart = (rootState: RootState) => {
  return selectRecorderState(rootState).dateStart;
};

const recorderReducer = (
  state: RecorderState = initialRecorderState,
  action: StartAction | StopAction
) => {
  switch (action.type) {
    case START:
      return {
        ...state,
        dateStart: new Date().toISOString(),
      };
    case STOP:
      return {
        ...state,
        dateStart: "",
      };
    default:
      return state;
  }
};

export default recorderReducer;
