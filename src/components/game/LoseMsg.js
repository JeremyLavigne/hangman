// Utils 
import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'

// Others
import scoresService from '../../services/scores'
import { addNewPlayer } from '../../reducers/scoreReducer'


// ---------------------------------------------------------------------------------
const LoseMsg = () => {

    const dispatch = useDispatch()
    const [ playerName, setPlayerName ] = useState('')
    const playerNameIsSaved = useSelector(state => state.score.playerNameIsSaved)
    const easyMode = useSelector(state => state.gameMode.easyMode)
    const language = useSelector(state => state.gameMode.language)
    const score = useSelector(state => state.score.score)
    const bestPlayers = useSelector(state => state.score.bestPlayers)
    const tenthScore = bestPlayers[9].score
    const word = useSelector(state => state.word.word)

    const saveScore = (playername) => {

        const newPlayer = {
          id : (100000 * Math.random()).toFixed(0),
          name : playername,
          score : score
        }

        scoresService
          .addScore(language.name, newPlayer, easyMode)
          .then(newPlayer => {
            dispatch(addNewPlayer(newPlayer))
        })
    }

    return (
        <div>

            <div className="is-size-3 has-text-centered has-text-danger mt-3 mb-3">
                {language.gamePage.loseMsg}
            </div>

            {!playerNameIsSaved ?
                <div className="is-size-4 has-text-centered">

                    {score > tenthScore ? 
                        language.gamePage.recordScore : language.gamePage.noRecord 
                    }

                    <br />

                    {score > tenthScore ? 
                        <div>
                            <input 
                                value={playerName} 
                                onChange={({target}) => setPlayerName(target.value)} 
                            />
                            <button 
                                className="button is-succes ml-2" 
                                onClick={() => saveScore(playerName)}
                            >
                                {language.gamePage.recordName}
                            </button> 
                        </div>
                        : null
                    }

                </div>
                :
                null
            }

            <div className="has-text-centered is-size-6 mt-5">
                <a href={language.gamePage.googleSearch + word.toLowerCase()} rel="noopener noreferrer" target="_blank" >{language.gamePage.dontUnderstand}</a>
            </div>
        </div>
    )
}

export default LoseMsg