export const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SELECT_SONG") {
    return action.payload.selectedSong;
  }
  return selectedSong;
};
