import heart from './../icons/heart.svg';
import share from './../icons/share.svg';
import comment from './../icons/comment.svg';
import view from './../icons/view.svg';
import style from './NewsItem.module.css';

const NewsItem = (props) => {
  return (
    <li className={style.newsItem}>
      <div className={style.newsItem__body}>
        <div className={style.newsItem__header}>
          <div className={style.newsItem__logo}>
            <img src={props.logo} alt={props.author} />
          </div>
          <div className={style.newsItem__info}>
            <p className={style.newsItem__author}>{props.author}</p>
            <p
              className={style.newsItem__date}
            >{`${props.date.day} in ${props.date.time}`}</p>
          </div>
        </div>
        <div className={style.newsItem__message}>
          <h3>{props.message.title}</h3>
          <div>{props.message.text}</div>
          <div className={style.newsItem__messageImage}>
            <img src={props.message.image} alt={props.author} />
          </div>
        </div>
        <div className={style.newsItem__footer}>
          <div>
            <img src={heart} alt="heart" />
            <p>{props.likes}</p>
          </div>
          <div>
            <img src={comment} alt="comment" />
            <p>{props.comments}</p>
          </div>
          <div>
            <img src={share} alt="share" />
            <p>{props.reposts}</p>
          </div>
          <div>
            <img src={view} alt="view" />
            <p>{props.views}</p>
          </div>
        </div>
      </div>
    </li>
  );
};

export default NewsItem;
