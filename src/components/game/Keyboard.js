// Utils
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// Others
import { goodLetterIsClicked, badLetterIsClicked, checkIfWordDiscover } from '../../reducers/wordReducer'
import { increaseScore } from '../../reducers/scoreReducer'



// ---------------------------------------------------------------------------------
const Keyboard = () => {

    const dispatch = useDispatch()
    const language = useSelector(state => state.gameMode.language)

    // Variables
    let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ]
    if (language.name === "swedish") {
        alphabet = alphabet.concat(['Å', 'Ä', 'Ö' ])
    }

    const discoveredLetters = useSelector(state => state.word.discoveredLetters)
    const missedLetters = useSelector(state => state.word.missedLetters)
    const word = useSelector(state => state.word.word)
    const wordIsNotDiscoverAtEnd = useSelector(state => state.word.wordIsNotDiscoverAtEnd)
    const wordIsDiscoverBeforeEnd = useSelector(state => state.word.wordIsDiscoverBeforeEnd)
    const count = useSelector(state => state.word.count)


    // Keep an eye on victory
    useEffect(() => {
        if (wordIsDiscoverBeforeEnd) {
            dispatch(increaseScore(count))
        }
      }, [count, dispatch, wordIsDiscoverBeforeEnd])


    // Handle click on letter
    const clickOnALetter = (letter) => {

        // Prevent click if game is already Over
        if (wordIsNotDiscoverAtEnd || wordIsDiscoverBeforeEnd) {
          return null
        }
    
        // If the clicked letter is in the word
        if (word.split('').includes(letter)) {

            dispatch(goodLetterIsClicked(letter))
            dispatch(checkIfWordDiscover(letter))

        } else {
            dispatch(badLetterIsClicked(letter))
        }
    }

    return (
        <div className="has-text-centered mt-6">

            {alphabet.map(letter => 
                <button 
                    className={`button px-2 mx-1 my-1 ${
                        discoveredLetters.includes(letter) ? "has-background-success"  : 
                        missedLetters.includes(letter) ? "has-background-danger" : ""
                    }`}
                    key={letter}
                    onClick={() => clickOnALetter(letter)}
                    disabled={(discoveredLetters.includes(letter) || missedLetters.includes(letter)) ? true : false}
                    >
                    {letter}
                </button>)
            }
            
        </div>
    )
}

export default Keyboard