import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Keyboard from './Keyboard'
import GameHeader from './GameHeader'
import LoseMsg from './LoseMsg'
import SuccessForm from './SuccessForm'
import SecretWord from './SecretWord'
import HangmanImg from './HangmanImg'

import { initialize } from '../../reducers/wordReducer'


const Game = ({language, scores, saveScore}) => {

    const dispatch = useDispatch()
    const wordIsNotDiscoverAtEnd = useSelector(state => state.word.wordIsNotDiscoverAtEnd)
    const wordIsDiscoverBeforeEnd = useSelector(state => state.word.wordIsDiscoverBeforeEnd)

    const nextWordIsAsked = () => {
        dispatch(initialize(language.name))
      }

    return (
        <div>
            <GameHeader 
                language={language} 
            />

            <div className="columns is-centered">

                <div className="column is-half-desktop">

                    <SecretWord />

                    <Keyboard language={language} />

                    {wordIsNotDiscoverAtEnd ? 
                        <LoseMsg language={language} tenthScore={scores[9].score} saveScore={saveScore}/> : 
                            wordIsDiscoverBeforeEnd ? 
                            <SuccessForm language={language} nextWordIsAsked={nextWordIsAsked}/> : 
                                null}

                </div>

                <HangmanImg />
            </div>

        </div>
    )
}

// ToDo : Add something when the word is discover : "I don't understand the word" which lead to a google search on another window

export default Game