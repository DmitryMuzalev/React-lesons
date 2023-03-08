//_Actions type:
const SET_NEWS = 'SET_NEWS';

//_Action creator:
export const setNewsAC = (news) => {
  return {
    type: SET_NEWS,
    news,
  };
};

//_Initial state:
const initialState = {
  news: [],
};

//_Reducer:
const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NEWS: {
      return { ...state, news: [...state.news, ...action.news] };
    }
    default:
      return state;
  }
};

//_Export reducer:
export default newsReducer;
