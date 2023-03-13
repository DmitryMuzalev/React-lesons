import style from './Preloader.module.css';
import preloader from './preloader.gif';

const Preloader = function () {
  return <img className={style.preloader} src={preloader} alt="Preloader" />;
};

export default Preloader;
