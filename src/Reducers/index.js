import { combineReducers } from "redux";
import { listSongReducer } from "./listSongReducer";
import { selectedSongReducer } from "./selectedSongReducer";

export const reducers = combineReducers({
  listSong: listSongReducer,
  selectedSong: selectedSongReducer
});
