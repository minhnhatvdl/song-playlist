export const listSongReducer = (listSong = [], action) => {
  if (action.type === "GET_LIST_SONG") {
    return action.payload.listSong;
  }
  return listSong;
};
