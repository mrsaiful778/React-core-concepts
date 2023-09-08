import { useState } from "react"

export default function Team (){
    const [team, setTeam] = useState(11)
    const teamStyle = {
            border: '2px solid purple',
            margin: '10px',
            padding: '10px',
            borderRadius: '15px',

    }
    const addPlayer = () => {
        const newTeam = team + 1;
        setTeam(newTeam);
    }
    const removePlayer = () =>{
        setTeam(team -1);
    }
    return(
        <div style={teamStyle}>
            <h3>Players: {team}</h3>
            <button onClick={addPlayer}>Add</button>
            <button onClick={removePlayer}>Remove</button>

        </div>
    )
}