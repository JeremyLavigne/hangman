import React from 'react'
import { useSelector } from 'react-redux'



// ---------------------------------------------------------------------------------
const Scores = () => {

    const language = useSelector(state => state.gameMode.language)
    const bestPlayers = useSelector(state => state.score.bestPlayers)

    return (
        <div className="content">

            <p className="is-strong mb-3 ml-1 mt-2">
                {language.scorePage.title}
            </p>

            <ol type="1">
                {bestPlayers.map(player => 
                    <li className="ml-4" key={player.id}>
                        {player.name} - {player.score} pts
                    </li>)}
            </ol>
            
        </div>
    )
}

export default Scores