import { NavLink } from 'react-router-dom';
import avatar from './avatar.svg';
import style from './Messages.module.css';

const PersonItem = (props) => {
  return (
    <li>
      <NavLink className={style.person} to={'/messages/' + props.id}>
        <img className={style.person__avatar} src={avatar} alt="avatar" />
        <p className={style.person__name}>{props.name}</p>
      </NavLink>
    </li>
  );
};

const Message = (props) => {
  return <div className={style.messages__item}>{props.text}</div>;
};

export default function Messages() {
  return (
    <div>
      <h2>Messages</h2>
      <div className={style.messagesWrapper}>
        <ul className={style.personList}>
          <PersonItem name="John" id="1" />
          <PersonItem name="Oliver" id="2" />
          <PersonItem name="Harry" id="3" />
          <PersonItem name="Charley" id="4" />
          <PersonItem name="Oscar" id="5" />
          <PersonItem name="Oscar" id="6" />
        </ul>

        <div className={style.messages}>
          <Message
            text=" Id velit ut tortor pretium viverra suspendisse potenti nullam ac.
            Purus gravida quis blandit turpis cursus."
          />
          <Message text="Ut porttitor leo a diam sollicitudin tempor id eu nisl." />
          <Message
            text="Non sodales neque sodales ut etiam sit amet nisl. Morbi blandit
            cursus risus at ultrices mi tempus."
          />
          <Message
            text="Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu
            feugiat."
          />
          <Message
            text="Ac orci phasellus egestas tellus rutrum tellus pellentesque eu. Ut
            morbi tincidunt augue interdum."
          />
          <Message
            text=" Id velit ut tortor pretium viverra suspendisse potenti nullam ac.
            Purus gravida quis blandit turpis cursus."
          />
          <Message text="Ut porttitor leo a diam sollicitudin tempor id eu nisl." />
          <Message
            text="Non sodales neque sodales ut etiam sit amet nisl. Morbi blandit
            cursus risus at ultrices mi tempus."
          />
          <Message
            text="Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu
            feugiat."
          />
          <Message
            text="Ac orci phasellus egestas tellus rutrum tellus pellentesque eu. Ut
            morbi tincidunt augue interdum."
          />
        </div>
      </div>
    </div>
  );
}
