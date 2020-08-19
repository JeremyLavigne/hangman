import React, { useState, useEffect } from 'react'
import Keyboard from './Keyboard'

const Game = ({language, secretWord}) => {

    const word = secretWord.toUpperCase()
    console.log('Word to discover : ', word)

    const [ displayedWord, setDisplayedWord ] = useState(word.split('').map(char => '_ '))
    const [ discoveredLetters, setDiscoveredLetters ] = useState([])
    const [ missedLetters, setMissedLetters ] = useState([])
    const [ count, setCount ] = useState(7)
    const [ gameIsLost, setGameIsLost ] = useState(false)
    const [ gameIsWon, setGameIsWon ] = useState(false)

    useEffect(() => {
        if (count === 0) {
            setGameIsLost(true)
            console.log('JULES TU PUES ET EN PLUS TES MOCHE')
        }

        if (!displayedWord.includes('_ ')){
            setGameIsWon(true)
        }
    }, [count, displayedWord])

    // Deal with every click
    const clickOnALetter = (letter) => {
        console.log('you clicked on ', letter)

        if (gameIsLost) {
            return null
        }

        if (gameIsWon) {
            console.log('You win')
            return null
        }

        // If the clicked letter is in the word
        if (word.split('').includes(letter)) {
            // Add it to the Array of already discovered letters
            setDiscoveredLetters(discoveredLetters.concat(letter))
            setDisplayedWord(word.split('').map(l => (discoveredLetters.includes(l) || l === letter ) ? l : '_ '))

        } else {
            setMissedLetters(missedLetters.concat(letter))
            setCount(count-1)
        }
    }



    return (
        <div>
            <div>
                <p>Reamining moves : {count}</p>
            </div>

            <div className="is-size-2 has-text-centered mt-6">
                {displayedWord}
            </div>

            <Keyboard 
                language={language} 
                onClick={clickOnALetter}
                discoveredLetters={discoveredLetters}
                missedLetters={missedLetters}
            />

            <div className={"is-size-1 has-text-centered " + gameIsLost ? "has-text-danger" : "has-text-success"}>
                {gameIsLost ? "You Lose" : null}
                {gameIsWon ? "You Won" : null}
            </div>
        </div>
    )
}

// Add something when the word is discover : "I don't understand the word" which lead to a google search on another window
export default Game