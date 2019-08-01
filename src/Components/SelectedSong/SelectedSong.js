import React, { Fragment } from "react";
import { connect } from "react-redux";
import "./SelectedSong.css";

const SelectedSong = ({ song }) => {
  const template = () => {
    if (!song) return <p>Please select a song</p>;
    return (
      <Fragment>
        <p>{song.title}</p>
        <p>{song.duration}</p>
      </Fragment>
    );
  };
  return <div className="ui segment fullCenter">{template()}</div>;
};

const mapStateToProps = state => {
  return {
    song: state.selectedSong
  };
};

export default connect(mapStateToProps)(SelectedSong);
