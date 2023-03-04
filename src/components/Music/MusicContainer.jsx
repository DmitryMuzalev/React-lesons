import { connect } from 'react-redux';
import {
  changeSearchFieldAC,
  playToggleAC,
  searchAC,
  setSongsAC,
} from '../../redux/reducers/musicReducer';
import Music from './Music';

const mapStateToProps = (state) => {
  return {
    songs: state.musicPage.songs,
    valueInput: state.musicPage.valueInput,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    search: () => {
      dispatch(searchAC());
    },
    changeSearchField: (text) => {
      dispatch(changeSearchFieldAC(text));
    },
    playToggle: (songId) => {
      dispatch(playToggleAC(songId));
    },
    setSongs: (songs) => {
      dispatch(setSongsAC(songs));
    },
  };
};

const MusicContainer = connect(mapStateToProps, mapDispatchToProps)(Music);

export default MusicContainer;
