import React from "react";
import ListSong from "../ListSong/ListSong";
import SelectedSong from "../SelectedSong/SelectedSong";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <h1>List of songs</h1>
        <div className="ui grid">
          <div className="eight wide column">
            <ListSong />
          </div>
          <div className="eight wide column flexCenter">
            <SelectedSong />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
