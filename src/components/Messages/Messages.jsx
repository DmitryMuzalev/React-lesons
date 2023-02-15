import avatar from './avatar.svg';
import style from './Messages.module.css';

export default function Messages() {
  return (
    <div>
      <h2>Messages</h2>
      <div className={style.messagesWrapper}>
        <ul className={style.personList}>
          <li>
            <a className={style.person} href="#person">
              <img className={style.person__avatar} src={avatar} alt="avatar" />
              <p className={style.person__name}>Jacob</p>
            </a>
          </li>
          <li>
            <a className={style.person} href="#person">
              <img className={style.person__avatar} src={avatar} alt="avatar" />
              <p className={style.person__name}>Oliver</p>
            </a>
          </li>
          <li>
            <a className={style.person} href="#person">
              <img className={style.person__avatar} src={avatar} alt="avatar" />
              <p className={style.person__name}>Harry</p>
            </a>
          </li>
          <li>
            <a className={style.person} href="#person">
              <img className={style.person__avatar} src={avatar} alt="avatar" />
              <p className={style.person__name}>Charley</p>
            </a>
          </li>
          <li>
            <a className={style.person} href="#person">
              <img className={style.person__avatar} src={avatar} alt="avatar" />
              <p className={style.person__name}>Oscar</p>
            </a>
          </li>
          <li>
            <a className={style.person} href="#person">
              <img className={style.person__avatar} src={avatar} alt="avatar" />
              <p className={style.person__name}>Jacob</p>
            </a>
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
