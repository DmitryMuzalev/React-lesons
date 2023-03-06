import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-lessons-b9c75-default-rtdb.firebaseio.com',
});

export default instance;
