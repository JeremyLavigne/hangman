import React from 'react'
import { useSelector } from 'react-redux'


// ---------------------------------------------------------------------------------
const HangmanImg = () => {

    const count = useSelector(state => state.word.count)
    const numberImg = 8 - count
    const image = require(`../../images/hangman/hangman${numberImg}.jpg`)

    return (
        <div className="column mt-6 has-text-centered">
            <img src={image} alt={`hangman img n° ${numberImg}`} />
        </div>
    )
}

export default HangmanImg