const FOLLOW_TOGGLE = 'FOLLOW_TOGGLE';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT_USER = 'SET_TOTAL_COUNT_USER';
const PRELOADER_TOGGLE = 'PRELOADER_TOGGLE';

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

export const setCurrentPageAC = (currentPage) => {
  return {
    type: SET_CURRENT_PAGE,
    currentPage,
  };
};

export const setTotalCountUserAC = (totalCountUser) => {
  return {
    type: SET_TOTAL_COUNT_USER,
    totalCountUser,
  };
};

export const switchPreloaderToggleAC = (isLoaded) => {
  return {
    type: 'PRELOADER_TOGGLE',
    isLoaded,
  };
};

const initialState = {
  users: [],
  pageSize: 10,
  currentPage: 1,
  totalCountUser: 30,
  isLoaded: true,
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
      return { ...state, users: action.users };
    }
    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.currentPage };
    }
    case SET_TOTAL_COUNT_USER: {
      return { ...state, totalCountUser: action.totalCountUser };
    }
    case PRELOADER_TOGGLE: {
      return { ...state, isLoaded: action.isLoaded };
    }

    default:
      return state;
  }
};

export default usersReducer;
