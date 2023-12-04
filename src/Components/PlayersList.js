import React from "react"
import Data from "../Data/players"
import PlayerCard from "./PlayerCard"

const PlayersList = () => {
  return (
    <div style={{display :'flex', justifyContent:'space-around', flexWrap:'wrap' }}>
      {Data.map((player) => (
        <PlayerCard player={player} key ={player.id} />
      ))}
    </div>
  )
}

export default PlayersList
