// Utils
import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from "react-router-dom"

// Images
import franceFlag from '../images/flag/franceFlag.png'
import swedenFlag from '../images/flag/swedenFlag.png'
import ukFlag from '../images/flag/ukFlag.png'

// Others
import { initialize, setEasyMode } from '../reducers/wordReducer'
import { scoreToZero } from '../reducers/scoreReducer'



// ---------------------------------------------------------------------------------
const NewGameForm = ({language, chooseLanguage, bestPlayer, easyModeChoice, easyMode}) => {

    // Prevent read property of 'undefined'
    if (typeof bestPlayer === 'undefined'){
        bestPlayer = {id:0, name:"unknowm", score:"10000"}
    }

    const dispatch = useDispatch()

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
            
                <img onClick={(language) => chooseLanguage('french')} style={imgStyle} src={franceFlag} alt="frenchFlag" />

                <img onClick={(language) => chooseLanguage('swedish')} style={imgStyle} src={swedenFlag} alt="swedenFlag" />

                <img onClick={(language) => chooseLanguage('english')} style={imgStyle} src={ukFlag} alt="ukFlag" />

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
                    onChange={easyModeChoice}
                    checked={easyMode ? 'checked' : null}
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

export default NewGameForm