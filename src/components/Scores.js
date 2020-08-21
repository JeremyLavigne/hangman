import React from 'react'

const Scores = ({language, bestPlayers}) => {

    return (
        <div>
            <p className="is-strong mb-3 ml-1 mt-2">{language.scorePage.title}</p>
            <ul>
                {bestPlayers.map(player => <li className="ml-4" key={player.id}>{player.name} - {player.score} pts</li>)}
            </ul>
        </div>
    )
}

export default Scores