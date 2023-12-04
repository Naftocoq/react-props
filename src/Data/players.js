/*Create a file called players.js, 
which is going to have an array of JSON Objects 
containing the player’s details (At least four players) */
import messiImg from "../Images/messi.png"
import ronaldoImg from "../Images/ronaldo.png"
import mbappeImg from "../Images/mbappe.png"
import salahImg from "../Images/salah.png"

const players = [
  {
    id: 1,
    name: "Lionel Messi",
    team: "Inter Miami",
    nationality: "Argentinian",
    jerseyNumber: 10,
    age: 36,
    imageUrl: messiImg,
  },
  {
    id: 2,
    name: "Cristiano Ronaldo",
    team: "Al Nassr",
    nationality: "Portuguese",
    jerseyNumber: 7,
    age: 38,
    imageUrl: ronaldoImg,
  },
  {
    id: 3,
    name: "Kylian Mbappé",
    team: "PSG",
    nationality: "French",
    jerseyNumber: 7,
    age: 24,
    imageUrl: mbappeImg,
  },
  {
    id: 4,
    name: "Mohamed Salah",
    team: "Liverpool",
    nationality: "Egyptian",
    jerseyNumber: 11,
    age: 31,
    imageUrl: salahImg,
  },
]

export default players
