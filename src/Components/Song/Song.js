import React from "react";
import { connect } from "react-redux";
import { selectSong } from "../../Actions";
import "./Song.css";

const Song = ({ song, selectedSong, selectSong }) => {
  return (
    <div className="item flexCenterEnd">
      <div className="content">{song.title}</div>
      <div className="right floated content">
        <div className={`ui button ${selectedSong && song.title === selectedSong.title? "blue": ""}`} onClick={() => selectSong(song)}>
          Select
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    selectedSong: state.selectedSong
  };
};

export default connect(
  mapStateToProps,
  { selectSong }
)(Song);
