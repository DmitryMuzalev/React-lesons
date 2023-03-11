import axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '49b2cc1a-c89a-478d-b4f1-1e14c1f96129',
  },
});

export default instance;
