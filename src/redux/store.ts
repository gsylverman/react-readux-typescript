import { combineReducers, createStore } from "redux";
import userEventsReducer from "./reducers/user-events-reducer";

const rootReducer = combineReducers({
  userEvents: userEventsReducer,
});

export type RootType = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer);

export default store;
