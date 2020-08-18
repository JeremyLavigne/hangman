import React, { useState } from 'react'
import Keyboard from './Keyboard'

const Game = ({language, secretWord}) => {

    const word = secretWord.toUpperCase()
    const [ displayedWord, setDisplayedWord ] = useState(word.split('').map(char => '_ '))
    const [ discoveredLetters, setDiscoveredLetters ] = useState([])

    console.log('Word to discover : ', word)

    const clickOnALetter = (letter) => {
        console.log('you clicked on ', letter)

        if (word.split('').includes(letter)) {
            setDiscoveredLetters(discoveredLetters.concat(letter))
            setDisplayedWord(word.split('').map(l => (discoveredLetters.includes(l) || l === letter ) ? l : '_ '))
        }

        console.log(discoveredLetters)
    }

    return (
        <div>
            <div className="is-size-2 has-text-centered mt-6">
                {displayedWord}
            </div>

            <Keyboard language={language} onClick={clickOnALetter}/>
        </div>
    )
}

// Add something when the word is discover : "I don't understand the word" which lead to a google search on another window
export default Game