import { combineReducers } from "redux";

const songs = () => {
  return [
    {
      title: 'No scrubs',
      duration: '4:05'
    },
    {
      title: 'Macarena',
      duration: '3:12'
    },
    {
      title: 'Song #2',
      duration: '2:32'
    },
    {
      title: 'Smeels like teen spirit',
      duration: '4:01'
    }
  ];
}

const selectedSong = (selectedSong = null, action) => {
  if(action.type === 'SONG_SELECTED') {
    return action.payload;
  }
  return selectedSong;
}

export default combineReducers({
  songs,
  selectedSong
});