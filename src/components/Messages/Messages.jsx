import Message from './Message/Message';
import style from './Messages.module.css';
import NewMessage from './NewMessage/NewMessage';
import PersonItem from './PersonItem/PersonItem';

export default function Messages(props) {
  const personsData = props.persons.map((user) => {
    return <PersonItem id={user.id} name={user.name} key={user.id} />;
  });

  const messagesHistory = props.messages.map((message) => {
    return <Message text={message.text} key={message.id} />;
  });

  return (
    <div>
      <h2>Messages</h2>
      <div className={style.messagesWrapper}>
        <ul className={style.personList}>{personsData}</ul>
        <div className={style.messages}>
          {messagesHistory}
          <NewMessage
            valueInput={props.valueInput}
            createNewMessage={props.createNewMessage}
            changeMessageInput={props.changeMessageInput}
          />
        </div>
      </div>
    </div>
  );
}
