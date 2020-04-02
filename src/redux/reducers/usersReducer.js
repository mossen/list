import { types } from "../types/usersTypes";

const initialState = {
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.USERS.REQUEST: {
      return {
        ...state,
        loading: true
      };
    }

    case types.USERS.SUCCESS: {
      return {
        ...state,
        loading: false,
        ...action.payload
      };
    }

    case types.USERS.FAILURE: {
      return {
        ...state,
        loading: false
      };
    }

    default:
      return state;
  }
};
