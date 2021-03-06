import React, { useEffect } from "react";
import Song from "../Song/Song";
import { connect } from "react-redux";
import { getListSong } from "../../Actions";

const ListSong = ({ listSong, getListSong }) => {
  useEffect(() => {
    getListSong();
  }, [getListSong]);
  return (
    <div className="ui middle aligned divided list">
      {listSong.map(song => (
        <Song key={song.title} song={song} />
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    listSong: state.listSong
  };
};

export default connect(
  mapStateToProps,
  { getListSong }
)(ListSong);
