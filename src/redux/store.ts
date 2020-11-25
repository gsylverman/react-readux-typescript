import { combineReducers, createStore } from "redux";
import userEventsReducer from "./reducers/user-events-reducer";
import recorderReducer from "./reducers/recorder";

const rootReducer = combineReducers({
  userEvents: userEventsReducer,
  recorder: recorderReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer);

export default store;
