import axios from '../../../axios';
import style from './PaginationItem.module.css';

export default function PaginationItem(props) {
  const currentClass = props.currentPage ? ' ' + style.current : '';
  const handlerClickOnItem = () => {
    props.setCurrentPage(props.number);
    axios
      .get(`/users?count=${props.pageSize}&page=${props.number}`)
      .then((users) => {
        props.setUsers(users.data.items);
      });
  };
  return (
    <li
      className={style.paginationItem + currentClass}
      onClick={handlerClickOnItem}
    >
      {props.number}{' '}
    </li>
  );
}
