import "./App.css"
import React from "react"
import PlayersList from "./Components/PlayersList"
import Navbara from "./Components/Navbara"

function App() {
  return (
    <div className="App">
      <Navbara />
      <h1 style={{ textAlign: "center", fontSize: "50px", margin: "20px" }}>
        <b>FIFA Player Cards</b>
      </h1>
      <PlayersList />
    </div>
  )
}

export default App
