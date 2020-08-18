import React from 'react'
import randomWord from '../dictionaries/randomWord'

const Game = ({language}) => {

    const word = randomWord(language.name).toUpperCase()

    return (
        <div>
            Current Game - Word to discover : {word}
        </div>
    )
}

export default Game