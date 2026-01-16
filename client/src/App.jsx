import "./App.css";
import Header from "./components/Header";
import CardList from "./components/CardList";
import { useState } from "react";

function App() {
  const [searchText, setSearchText] = useState("")

  return (
    <>
      <Header searchText={searchText} setSearchText={setSearchText}/>
      <CardList searchText={searchText} setSearchText={setSearchText}/>
    </>
  )
}

export default App;
