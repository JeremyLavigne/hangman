import React from 'react'

const HangmanImg = ({count}) => {

    const numberImg = 8 - count
    const image = require(`../../images/hangman/hangman${numberImg}.jpg`)




    return (
        <div className="column mt-6 has-text-centered">
            <img src={image} alt={`hangman img n° ${numberImg}`} />
        </div>
    )
}

export default HangmanImg