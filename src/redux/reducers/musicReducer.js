//_Action type:
const SEARCH = 'SEARCH';
const CHANGE_SEARCH_FIELD = 'CHANGE_SEARCH_FIELD';
const PLAY_TOGGLE = 'PLAY_TOGGLE';
const SET_SONGS = 'SET_SONGS';

//_Action creator:
export const searchAC = () => {
  return {
    type: SEARCH,
  };
};
export const changeSearchFieldAC = (text) => {
  return {
    type: CHANGE_SEARCH_FIELD,
    text,
  };
};
export const playToggleAC = (songId) => {
  return {
    type: PLAY_TOGGLE,
    songId,
  };
};
export const setSongsAC = (songs) => {
  return {
    type: SET_SONGS,
    songs,
  };
};

//_Initial state:
const initialState = {
  songs: [],
  valueInput: '',
};

//_Reducer:
export default function musicReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH: {
      return { ...state, valueInput: '' };
    }
    case CHANGE_SEARCH_FIELD: {
      return { ...state, valueInput: action.text };
    }
    case PLAY_TOGGLE: {
      return {
        ...state,
        songs: [
          ...state.songs.map((s) => {
            if (s.id === action.songId) {
              return { ...s, play: !s.play };
            }
            return s;
          }),
        ],
      };
    }
    case SET_SONGS: {
      return { ...state, songs: [...state.songs, ...action.songs] };
    }
    default: {
      return state;
    }
  }
}
