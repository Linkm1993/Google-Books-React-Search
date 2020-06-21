import React from "react";
import Books from "./pages/Books";
import Nav from "./components/Nav";
import SearchBar from "./components/SearchBar"

function App() {
  return (
    <div>
      <Nav />
      <SearchBar />
      <Books />
    </div>
  );
}

export default App;
