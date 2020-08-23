import React from 'react'
import { useSelector } from 'react-redux'



// ---------------------------------------------------------------------------------
const GameHeader = () => {

    const language = useSelector(state => state.gameMode.language)
    const score = useSelector(state => state.score.score)
    const count = useSelector(state => state.word.count)


    return (
        <div className="is-flex" style={{justifyContent : 'space-between'}}>
            <p className="mt-1 ml-1">{language.gamePage.moves} : {count}</p>
            <p className="mt-1 mr-1">{language.gamePage.score} : {score}</p>
        </div>
    )
}

export default GameHeader