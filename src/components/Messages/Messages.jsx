//import style from './Messages.module.css';

export default function Messages() {
  return (
    <div>
      <h2>Messages</h2>
      <div className="messagesWrapper">
        <ul className="personList">
          <li>
            <a className="person" href="#person">
              Jacob
            </a>
          </li>
          <li>
            <a className="person" href="#person">
              Lana
            </a>
          </li>
          <li>
            <a className="person" href="#person">
              Oliver
            </a>
          </li>
          <li>
            <a className="person" href="#person">
              Harry
            </a>
          </li>
          <li>
            <a className="person" href="#person">
              George
            </a>
          </li>
        </ul>
        <div className="messages">
          <div>
            Id velit ut tortor pretium viverra suspendisse potenti nullam ac.
            Purus gravida quis blandit turpis cursus.{' '}
          </div>
          <div>Ut porttitor leo a diam sollicitudin tempor id eu nisl.</div>
          <div>
            Non sodales neque sodales ut etiam sit amet nisl. Morbi blandit
            cursus risus at ultrices mi tempus.
          </div>
          <div>
            Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu
            feugiat.
          </div>
          <div>
            Ac orci phasellus egestas tellus rutrum tellus pellentesque eu. Ut
            morbi tincidunt augue interdum.
          </div>
        </div>
      </div>
    </div>
  );
}
