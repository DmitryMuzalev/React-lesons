const state = {
  profilePage: {
    posts: [
      {
        id: 1,
        message:
          'Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Elit eget gravida cum sociis natoque penatibus et magnis.',
        like: 5,
      },
      {
        id: 2,
        message:
          'Elementum curabitur vitae nunc sed velit dignissim sodales ut eu. Augue eget arcu dictum varius duis at consectetur.',
        like: 13,
      },
      {
        id: 3,
        message:
          'Sed enim ut sem viverra aliquet eget. Eu scelerisque felis imperdiet proin fermentum leo vel orci. Ultrices gravida dictum fusce ut placerat orci nulla pellentesque.',
        like: 20,
      },
      {
        id: 4,
        message:
          'Leo integer malesuada nunc vel risus commodo viverra maecenas.',
        like: 17,
      },
    ],
    valueInput: '',
  },

  messagesPage: {
    messages: [
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
    ],
    valueInput: '',
    persons: [
      { name: 'John', id: 1 },
      { name: 'Oliver', id: 2 },
      { name: 'Harry', id: 3 },
      { name: 'Charley', id: 4 },
      { name: 'Oscar', id: 5 },
      { name: 'Noah', id: 6 },
    ],
  },
};

export default state;

let rerenderDOM;

function createNewPost() {
  let newPost = {
    id: state.profilePage.posts.length + 1,
    message: state.profilePage.valueInput,
    like: 0,
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.valueInput = '';
  rerenderDOM(state);
}

function createNewMessage() {
  let newMessage = {
    text: state.messagesPage.valueInput,
  };
  state.messagesPage.messages.push(newMessage);
  state.messagesPage.valueInput = '';
  rerenderDOM(state);
}

function changeProfileInput(text) {
  state.profilePage.valueInput = text;
  rerenderDOM(state);
}

function changeMessagesInput(text) {
  state.messagesPage.valueInput = text;
  rerenderDOM(state);
}

function subscriber(observer) {
  rerenderDOM = observer;
}

export {
  createNewPost,
  createNewMessage,
  changeProfileInput,
  changeMessagesInput,
  subscriber,
};
