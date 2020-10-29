import axios from 'axios';

const KEY = 'AIzaSyBCLqXk6krZpshroxRWDxr0UZ3DPR1AMPo';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: '5',
    key: `${KEY}`
  }
});