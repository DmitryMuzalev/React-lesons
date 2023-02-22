const store = {
  _state: {
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
  },
  _rerenderDOM() {},

  getState() {
    return this._state;
  },
  subscriber(observer) {
    this._rerenderDOM = observer;
  },

  dispatch(action) {
    if (action.type === 'CREATE-NEW-POST') {
      let newPost = {
        id: this._state.profilePage.posts.length + 1,
        message: this._state.profilePage.valueInput,
        like: 0,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.valueInput = '';
      this._rerenderDOM(this._state);
    } else if (action.type === 'CREATE-NEW-MESSAGE') {
      let newMessage = {
        text: this._state.messagesPage.valueInput,
      };
      this._state.messagesPage.messages.push(newMessage);
      this._state.messagesPage.valueInput = '';
      this._rerenderDOM(this._state);
    } else if (action.type === 'CHANGE-PROFILE-INPUT') {
      this._state.profilePage.valueInput = action.text;
      this._rerenderDOM(this._state);
    } else if (action.type === 'CHANGE-MESSAGES-INPUT') {
      this._state.messagesPage.valueInput = action.text;
      this._rerenderDOM(this._state);
    }
  },
};

export default store;
