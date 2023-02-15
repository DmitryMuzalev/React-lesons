import { NavLink } from 'react-router-dom';
import avatar from './avatar.svg';
import style from './Messages.module.css';

export default function Messages() {
  return (
    <div>
      <h2>Messages</h2>
      <div className={style.messagesWrapper}>
        <ul className={style.personList}>
          <li>
            <NavLink className={style.person} to="/messages/1">
              <img className={style.person__avatar} src={avatar} alt="avatar" />
              <p className={style.person__name}>Jacob</p>
            </NavLink>
          </li>
          <li>
            <NavLink className={style.person} to="/messages/2">
              <img className={style.person__avatar} src={avatar} alt="avatar" />
              <p className={style.person__name}>Oliver</p>
            </NavLink>
          </li>
          <li>
            <NavLink className={style.person} to="/messages/3">
              <img className={style.person__avatar} src={avatar} alt="avatar" />
              <p className={style.person__name}>Harry</p>
            </NavLink>
          </li>
          <li>
            <NavLink className={style.person} to="/messages/4">
              <img className={style.person__avatar} src={avatar} alt="avatar" />
              <p className={style.person__name}>Charley</p>
            </NavLink>
          </li>
          <li>
            <NavLink className={style.person} to="/messages/5">
              <img className={style.person__avatar} src={avatar} alt="avatar" />
              <p className={style.person__name}>Oscar</p>
            </NavLink>
          </li>
          <li>
            <NavLink className={style.person} to="/messages/6">
              <img className={style.person__avatar} src={avatar} alt="avatar" />
              <p className={style.person__name}>Jacob</p>
            </NavLink>
          </li>
        </ul>
        <div className={style.messages}>
          <div className={style.messages__item}>
            Id velit ut tortor pretium viverra suspendisse potenti nullam ac.
            Purus gravida quis blandit turpis cursus.{' '}
          </div>
          <div className={style.messages__item}>
            Ut porttitor leo a diam sollicitudin tempor id eu nisl.
          </div>
          <div className={style.messages__item}>
            Non sodales neque sodales ut etiam sit amet nisl. Morbi blandit
            cursus risus at ultrices mi tempus.
          </div>
          <div className={style.messages__item}>
            Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu
            feugiat.
          </div>
          <div className={style.messages__item}>
            Ac orci phasellus egestas tellus rutrum tellus pellentesque eu. Ut
            morbi tincidunt augue interdum.
          </div>
          <div className={style.messages__item}>
            Id velit ut tortor pretium viverra suspendisse potenti nullam ac.
            Purus gravida quis blandit turpis cursus.{' '}
          </div>
          <div className={style.messages__item}>
            Ut porttitor leo a diam sollicitudin tempor id eu nisl.
          </div>
          <div className={style.messages__item}>
            Non sodales neque sodales ut etiam sit amet nisl. Morbi blandit
            cursus risus at ultrices mi tempus.
          </div>
          <div className={style.messages__item}>
            Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu
            feugiat.
          </div>
          <div className={style.messages__item}>
            Ac orci phasellus egestas tellus rutrum tellus pellentesque eu. Ut
            morbi tincidunt augue interdum.
          </div>
        </div>
      </div>
    </div>
  );
}
