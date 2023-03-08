import { connect } from 'react-redux';
import { setNewsAC } from '../../redux/reducers/newsReducer';
import News from './News';

const mapStateToProps = (state) => {
  return {
    news: state.newsPage.news,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setNews: (news) => {
      dispatch(setNewsAC(news));
    },
  };
};

const NewsContainer = connect(mapStateToProps, mapDispatchToProps)(News);

export default NewsContainer;
