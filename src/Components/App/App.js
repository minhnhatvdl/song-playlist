import React from "react";
import ListSong from "../ListSong/ListSong";

class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <h1>List of songs</h1>
        <div className="ui grid">
          <div className="eight wide column">
            <ListSong />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
