const FOLLOW_TOGGLE = 'FOLLOW_TOGGLE';
const SET_USERS = 'SET_USERS';
const DELETE_USERS = 'DELETE_USERS';

export const followToggleAC = (userId) => {
  return {
    type: FOLLOW_TOGGLE,
    userId,
  };
};

export const setUsersAC = (users) => {
  return {
    type: SET_USERS,
    users,
  };
};

export const deleteUsersAC = () => {
  return {
    type: DELETE_USERS,
  };
};

const initialState = {
  users: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW_TOGGLE: {
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) return { ...u, followed: !u.followed };
          return u;
        }),
      };
    }
    case SET_USERS: {
      return { ...state, users: [...state.users, ...action.users] };
    }
    case DELETE_USERS: {
      return { ...state, users: [] };
    }
    default:
      return state;
  }
};

export default usersReducer;
