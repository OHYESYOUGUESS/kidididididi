import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import DeepSearchPC from "./components/main/DeepSearchPC";
import ContainerPC from "./components/main/ContainerPC";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ContainerPC />
        <DeepSearchPC />
      </div>
    );
  }
}

export default App;
