import React from 'react'
import { useSelector } from 'react-redux'

const GameHeader = ({language}) => {

    const score = useSelector(state => state.score.score)
    const count = useSelector(state => state.word.count)

    const style = {
        display : 'flex',
        justifyContent : 'space-between'
    }

    return (
        <div style={style}>
            <p className="mt-1 ml-1">{language.gamePage.moves} : {count}</p>
            <p className="mt-1 mr-1">{language.gamePage.score} : {score}</p>
        </div>
    )
}

export default GameHeader