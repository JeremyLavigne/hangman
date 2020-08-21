// Utils 
import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'

// Others
import scoresService from '../../services/scores'
import { addNewPlayer } from '../../reducers/scoreReducer'


// ---------------------------------------------------------------------------------
const LoseMsg = ({language}) => {

    const dispatch = useDispatch()
    const [ playerName, setPlayerName ] = useState('')
    const [ disableButton, setDisableButton ] = useState(false)

    const score = useSelector(state => state.score.score)
    const bestPlayers = useSelector(state => state.score.bestPlayers)
    const tenthScore = bestPlayers[9].score

    console.log('your score : ', score, ' 10th score : ', tenthScore)

    const saveScore = (playername) => {

        const newPlayer = {
          id : (100000 * Math.random()).toFixed(0),
          name : playername,
          score : score
        }

        console.log(newPlayer, ' is added')

        scoresService
          .addScore(language.name, newPlayer)
          .then(newPlayer => {
            dispatch(addNewPlayer(newPlayer))
        })

        setDisableButton(true)
    }

    return (
        <div>
            <div className="is-size-3 has-text-centered has-text-danger mt-3 mb-3">
                {language.gamePage.loseMsg}
            </div>
            <div className="is-size-4 has-text-centered">
                {score > tenthScore ? language.gamePage.recordScore : language.gamePage.noRecord}
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
                            disabled={disableButton}
                        >
                            {language.gamePage.recordName}
                        </button> 
                    </div>
                    : null}
            </div>
        </div>
    )
}

export default LoseMsg