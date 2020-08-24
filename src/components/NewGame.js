// Utils
import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom"
import scoresService from '../services/scores'

// Images
import franceFlag from '../images/flag/franceFlag.png'
import swedenFlag from '../images/flag/swedenFlag.png'
import ukFlag from '../images/flag/ukFlag.png'

// Others
import { initialize, setEasyMode } from '../reducers/wordReducer'
import { scoreToZero, initializeBestPlayers } from '../reducers/scoreReducer'
import { chooseLanguage, changeMode } from '../reducers/gameModeReducer'


 
// ---------------------------------------------------------------------------------
const NewGame = () => {

    const dispatch = useDispatch()
    const easyMode = useSelector(state => state.gameMode.easyMode)
    const language = useSelector(state => state.gameMode.language)
    const bestPlayers = useSelector(state => state.score.bestPlayers)

    // Prevent read property of 'undefined'
    let bestPlayer
    if (typeof bestPlayers[0] === 'undefined') {
        bestPlayer = {score:10000, name: "unknown"}
    } else {
        bestPlayer = bestPlayers[0]
    }

    // Get the best scores/players for selected language/mode
    useEffect(() => {
        scoresService
          .getScores(language.name, easyMode)
          .then(bestPlayers => dispatch(initializeBestPlayers(bestPlayers.sort(function(score1, score2) {
            return score2.score - score1.score;
          }).slice(0,10))))
    
      }, [dispatch, language, easyMode])
    
    // Clear all when a new game is asked
    const newGameIsAsked = (languageName) => {
        dispatch(initialize(languageName))
        dispatch(setEasyMode(easyMode))
        dispatch(scoreToZero())
    }


    const imgStyle = {
        width: '10%',
        minWidth: '64px',
        cursor: 'pointer'
    }
    const footerStyle = {
        position : 'fixed',
        bottom : 0,
        width: '100%'
    }

    return (
        <div>

            <h2 className="has-text-centered is-size-4 mt-4 mb-6">
                {language.newGamePage.choose}
            </h2>

            <div className="is-flex m-4" style={{justifyContent : 'space-around'}}>
            
                <img onClick={() => dispatch(chooseLanguage('french'))} style={imgStyle} src={franceFlag} alt="frenchFlag" />

                <img onClick={() => dispatch(chooseLanguage('swedish'))} style={imgStyle} src={swedenFlag} alt="swedenFlag" />

                <img onClick={() => dispatch(chooseLanguage('english'))} style={imgStyle} src={ukFlag} alt="ukFlag" />

            </div>

            <div className="is-flex mt-6" style={{justifyContent : 'space-around'}}>

                <div>

                    <p className="has-text-weight-bold is-strong mb-3">
                        {language.newGamePage.title}
                    </p>

                    <p>{language.newGamePage.dictionary}</p>

                    <p>{language.newGamePage.bestScore} {bestPlayer.score} {language.newGamePage.pts} - ({bestPlayer.name})</p>

                </div>
                
                <Link className="button is-link is-medium"
                    onClick={() => newGameIsAsked(language.name)} 
                    to="/game"
                >
                    {language.newGamePage.go}
                </Link>

            </div>

            <div className="field has-text-centered mt-6">
                <input id="switchRoundedInfo" 
                    type="checkbox" 
                    name="switchRoundedInfo" 
                    className="switch is-rounded is-info"
                    onChange={() => dispatch(changeMode())}
                    checked={easyMode ? "checked" : false }
                />
                <label htmlFor="switchRoundedInfo">
                    {language.newGamePage.easyMode} 
                </label>
                <span 
                    className="has-text-info has-tooltip-bottom has-tooltip-multiline has-tooltip-info"
                    data-tooltip={language.newGamePage.easyModeInfo}
                    style={{cursor:'help'}}
                > ? </span>
            </div>

            <footer className="has-background-grey-dark has-text-right is-size-7" style={footerStyle}>

                <a className="has-text-white-ter" href={language.newGamePage.source}>{language.newGamePage.footer}</a>
                
            </footer>

        </div>
    )
}

export default NewGame