import React from 'react'
import Keyboard from './Keyboard'
import GameHeader from './GameHeader'
import LoseMsg from './LoseMsg'
import SuccessForm from './SuccessForm'
import SecretWord from './SecretWord'
import HangmanImg from './HangmanImg'


const Game = ({language, word, nextWordIsAsked, count, gameIsLost, gameIsWon, discoveredLetters, displayedWord, missedLetters, clickOnALetter, score, scores, saveScore}) => {


    console.log('Word to discover : ', word) // For cheating :)

    return (
        <div>
            <GameHeader 
                language={language} 
                score={score} 
                count={count} 
            />

            <div className="columns is-centered">

                <div className="column is-half-desktop">

                    <SecretWord 
                        gameIsLost={gameIsLost} 
                        word={word} 
                        displayedWord={displayedWord}
                    />

                    <Keyboard 
                        language={language} 
                        onClick={clickOnALetter}
                        discoveredLetters={discoveredLetters}
                        missedLetters={missedLetters}
                    />

                    {gameIsLost ? 
                        <LoseMsg language={language} score={score} tenthScore={scores[9].score} saveScore={saveScore}/> : 
                            gameIsWon ? 
                            <SuccessForm language={language} nextWordIsAsked={nextWordIsAsked}/> : 
                                null}

                </div>

                <HangmanImg count={count} />
            </div>

        </div>
    )
}

// ToDo : Add something when the word is discover : "I don't understand the word" which lead to a google search on another window

export default Game