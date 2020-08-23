// Utils 
import React from 'react'
import { useSelector} from 'react-redux'

// Components
import Keyboard from './Keyboard'
import GameHeader from './GameHeader'
import LoseMsg from './LoseMsg'
import SuccessForm from './SuccessForm'
import SecretWord from './SecretWord'
import HangmanImg from './HangmanImg'


// ToDo : 
// - Add a message when "New game" is clicked : "Are you sure? your score won't be save"
// - Add possibility to save the score even if we didn't lose ? 
//      Or when player launch a new game  : "Are your sure? Do you wanna save your score before starting a new game?"

// ---------------------------------------------------------------------------------
const Game = () => {

    const wordIsNotDiscoverAtEnd = useSelector(state => state.word.wordIsNotDiscoverAtEnd)
    const wordIsDiscoverBeforeEnd = useSelector(state => state.word.wordIsDiscoverBeforeEnd)
    const playerNameIsSaved = useSelector(state => state.score.playerNameIsSaved)
    const language = useSelector(state => state.gameMode.language)


    if (playerNameIsSaved) {
        return (
            <div className="is-size-5 has-text-centered mt-4">
                {language.gamePage.launchNewGame}
            </div>
        )
    }


    return (
        <div>
            <GameHeader  />

            <div className="columns is-centered">

                <div className="column is-half-desktop">

                    <SecretWord />

                    <Keyboard />

                    {wordIsNotDiscoverAtEnd ? 
                        <LoseMsg />  :  wordIsDiscoverBeforeEnd ? 
                            <SuccessForm /> : null
                    }

                </div>

                <HangmanImg />
            </div>

        </div>
    )
}

export default Game