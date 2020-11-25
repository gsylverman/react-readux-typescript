import { AnyAction } from "redux";

interface UserEvent {
  id: number;
  title: string;
  dateStart: string;
  dateEnd: string;
  img: string;
}

interface UseEventState {
  byIds: Record<UserEvent["id"], UserEvent>;
  allIds: Array<UserEvent["id"]>;
}

const initialState = {
  byIds: {},
  allIds: [],
};

const useEventReducer = (
  state: UseEventState = initialState,
  action: AnyAction
) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default useEventReducer;
