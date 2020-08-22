// Utils 
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

// Components
import Keyboard from './Keyboard'
import GameHeader from './GameHeader'
import LoseMsg from './LoseMsg'
import SuccessForm from './SuccessForm'
import SecretWord from './SecretWord'
import HangmanImg from './HangmanImg'

// Others
import { initialize } from '../../reducers/wordReducer'



// ---------------------------------------------------------------------------------
const Game = ({language}) => {

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
                        <LoseMsg language={language} /> 
                        : 
                        wordIsDiscoverBeforeEnd ? 
                            <SuccessForm 
                                language={language} 
                                nextWordIsAsked={nextWordIsAsked}
                            /> 
                            : 
                            null
                    }

                </div>

                <HangmanImg />
            </div>

        </div>
    )
}

// ToDo : Add something when the word is discover : "I don't understand the word" which lead to a google search on another window

export default Game