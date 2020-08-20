import React from 'react'

const GameHeader = ({language, count, score}) => {

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