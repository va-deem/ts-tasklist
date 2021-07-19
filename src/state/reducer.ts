import { ITaskCard } from "../types";

export type State = {
  tasks: ITaskCard[];
  titleFilter: string;
  dateRange: (Date | null)[];
};

export type Action =
  | {
      type: "FETCH_TASK_LIST";
      payload: ITaskCard[];
    }
  | {
      type: "FILTER_TITLE";
      payload: string;
    }
  | {
      type: "FILTER_DATES";
      payload: (Date | null)[];
    };

const initialState: State = {
  tasks: [],
  titleFilter: "",
  dateRange: [null, null],
};

const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case "FETCH_TASK_LIST":
      return {
        ...state,
        tasks: [...action.payload],
      };
    case "FILTER_TITLE":
      return {
        ...state,
        titleFilter: action.payload,
      };
    case "FILTER_DATES":
      return {
        ...state,
        dateRange: action.payload,
      };
    default:
      return state;
  }
};

// Action creators
export const fetchTaskList = (payload: ITaskCard[]): Action => {
  return {
    type: "FETCH_TASK_LIST",
    payload,
  };
};

export const filterTitle = (payload: string): Action => {
  return {
    type: "FILTER_TITLE",
    payload,
  };
};

export const filterDates = (payload: (Date | null)[]): Action => {
  return {
    type: "FILTER_DATES",
    payload,
  };
};

export default reducer;
