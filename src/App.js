import React from "react";
import "./App.css";
import Wrapper from "./components/Wrapper";
import Jumbotron from "./components/Jumbotron";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <Wrapper>
      <Jumbotron />
      <SearchBar />
    </Wrapper>
  );
}

export default App;
