// get list of songs
export const getListSong = () => {
  return {
    type: "GET_LIST_SONG",
    payload: {
      listSong: [
        { title: "Hay trao cho anh", duration: "4:50" },
        { title: "Chay ngay di", duration: "4:37" },
        { title: "Noi nay co anh", duration: "4:23" },
        { title: "Lac troi", duration: "4:09" },
        { title: "Chung ta khong thuoc ve nhau", duration: "3:57" },
        { title: "Buong doi tay nhau ra", duration: "4:39" }
      ]
    }
  };
};
// select a song
export const selectSong = selectedSong => {
  return {
    type: "SELECT_SONG",
    payload: {
      selectedSong
    }
  };
};
