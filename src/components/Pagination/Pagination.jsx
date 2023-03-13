import style from './Pagination.module.css';
import PaginationItem from './PaginationItem/PaginationItem';

export default function Pagination(props) {
  const items = [];
  for (let i = 1; i <= props.quantityPage; i++) {
    items.push(
      <PaginationItem
        number={i}
        key={i}
        currentPage={i === props.currentPage}
        setCurrentPage={props.setCurrentPage}
        pageSize={props.pageSize}
        setUsers={props.setUsers}
      />
    );
  }
  return <ul className={style.pagination}>{items}</ul>;
}
