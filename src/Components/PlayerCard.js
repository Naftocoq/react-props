import React from "react"
import Card from "react-bootstrap/Card"
import unknownImg from "../Images/il_570xN.659766248_4hml.jpg"

/*destruturing attributes*/

const Player = ({player}) => {
  const cardPlayerStyle = {
    width: "20rem",
    marginTop: "10px",
    textAlign: "center",
    backgroundColor: "#f5f5f5",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  }
  return (
    <Card style={cardPlayerStyle}>
      <Card.Img src={player.imageUrl} />
      <Card.Body>
        <Card.Title style={{ fontSize: "30px" }}>
          <b>{player.name}</b>
        </Card.Title>
        <Card.Text>
          <b>Team : </b> {player.team} <br />
          <b>Nationality :</b> {player.nationality} <br />
          <b>Jersey Number : </b> {player.jerseyNumber} <br />
          <b>Age :</b> {player.age}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

// Default props
Player.defaultProps = {
  name: "Unknown",
  team: "Unknown",
  nationality: "Unknown",
  jerseyNumber: 0,
  age: 0,
  imageUrl: unknownImg,
}

export default Player
