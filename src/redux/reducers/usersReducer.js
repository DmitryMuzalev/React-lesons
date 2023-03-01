const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const GET_USERS = 'GET_USERS';

const followAC = (userId) => {
  return {
    type: 'FOLLOW',
    id: userId,
  };
};

const unfollowAC = (userId) => {
  return {
    type: 'UNFOLLOW',
    id: userId,
  };
};

const initialState = {
  usersList: [
    {
      id: 1,
      photo: '../../components/Users/avatar.svg',
      fullName: 'Michael Lawrence',
      location: {
        country: 'Belgium',
        city: 'Brussels',
      },
      status: 'Morning person or night owl?',
      followed: true,
    },
    {
      id: 2,
      photo: '../../components/Users/avatar.svg',
      fullName: 'Sandra Barrett',
      location: {
        country: 'Netherlands',
        city: 'Amsterdam',
      },
      status: 'We build too many walls and not enough bridges - Isaac Newton',
      followed: false,
    },
    {
      id: 2,
      photo: '../../components/Users/avatar.svg',
      fullName: 'Dana Hill',
      location: {
        country: 'Spain',
        city: 'Madrid',
      },
      status: 'Have I told you lately that you’re awesome?',
      followed: false,
    },
  ],
};

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case FOLLOW: {
      return state.usersList.map((u) => {
        if (u.id === action.id) return { ...u, followed: true };
        return u;
      });
    }
    case UNFOLLOW: {
      return state.usersList.map((u) => {
        if (u.id === action.id) return { ...u, followed: false };
        return u;
      });
    }
    case GET_USERS: {
      return { ...state.usersList }; //! Переделать!
    }
    default:
      return state;
  }
}

export { followAC, unfollowAC };
