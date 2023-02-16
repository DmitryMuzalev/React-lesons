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

const userData = [
  { name: 'John', id: '1' },
  { name: 'Oliver', id: '2' },
  { name: 'Harry', id: '3' },
  { name: 'Charley', id: '4' },
  { name: 'Oscar', id: '5' },
  { name: 'Noah', id: '6' },
];

const personsData = userData.map((user) => {
  return <PersonItem id={user.id} name={user.name} />;
});

const messagesData = [
  {
    text: 'Id velit ut tortor pretium viverra suspendisse potenti nullam ac.Purus gravida quis blandit turpis cursus.',
  },
  {
    text: 'Ut porttitor leo a diam sollicitudin tempor id eu nisl.',
  },
  {
    text: 'Non sodales neque sodales ut etiam sit amet nisl. Morbi blandit cursus risus at ultrices mi tempus.',
  },
  {
    text: 'Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu feugiat.',
  },
  {
    text: 'Ac orci phasellus egestas tellus rutrum tellus pellentesque eu. Ut morbi tincidunt augue interdum.',
  },
  {
    text: 'Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu feugiat.',
  },
  {
    text: 'Id velit ut tortor pretium viverra suspendisse potenti nullam ac.Purus gravida quis blandit turpis cursus.',
  },
  {
    text: 'Ut porttitor leo a diam sollicitudin tempor id eu nisl.',
  },
  {
    text: 'Non sodales neque sodales ut etiam sit amet nisl. Morbi blandit cursus risus at ultrices mi tempus.',
  },
  {
    text: 'Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu feugiat.',
  },
  {
    text: 'Ac orci phasellus egestas tellus rutrum tellus pellentesque eu. Ut morbi tincidunt augue interdum.',
  },
  {
    text: 'Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu feugiat.',
  },
];

const messagesHistory = messagesData.map((message) => {
  return <Message text={message.text} />;
});

export default function Messages() {
  return (
    <div>
      <h2>Messages</h2>
      <div className={style.messagesWrapper}>
        <ul className={style.personList}>{personsData}</ul>
        <div className={style.messages}>{messagesHistory}</div>
      </div>
    </div>
  );
}
