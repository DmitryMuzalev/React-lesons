import style from './PaginationItem.module.css';

export default function PaginationItem(props) {
  const currentClass = props.currentPage ? ' ' + style.current : '';

  return (
    <li
      className={style.paginationItem + currentClass}
      onClick={() => {
        props.handlerClickOnItem(props.number);
      }}
    >
      {props.number}
    </li>
  );
}
