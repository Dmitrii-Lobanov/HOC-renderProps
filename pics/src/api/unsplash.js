import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID B8CQWTq9daZMwj3_PLmDn8L2Z7C-WYYNzc_EZ5A1gE0'
  }
});