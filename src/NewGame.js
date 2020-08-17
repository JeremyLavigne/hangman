import React, { useState} from 'react'
import Game from './Game'
import franceFlag from './images/flag/franceFlag.png'
import swedenFlag from './images/flag/swedenFlag.png'
import ukFlag from './images/flag/ukFlag.png'
import { french, english, swedish } from './languages/languages'

const NewGame = () => {

    const blocStyle = {
        justifyContent : 'space-around'
    }

    const imgStyle = {
        width: '10%',
        minWidth: '64px',
        cursor: 'pointer'
    }

    const buttonStyle = {
        width: '10%',
        minWidth: '64px',
        cursor: 'pointer'
    }

    const footerStyle = {
        position: 'fixed',
        bottom: 0,
        width: '100%'
    }

    const [ language, setLanguage ] = useState(english)
    const [ launchGame, setLaunchGame ] = useState(false)

    const chooseLanguage = (language) => {
        switch (language) {
            case 'french' :
                setLanguage(french)
                break
            case 'swedish' :
                setLanguage(swedish)
                break
            case 'english' :
                setLanguage(english)
                break
            default : setLanguage(english)
        }
    }

    const play = () => {
        setLaunchGame(true)
    }

    const chooseLanguageForm = () => {
        return (
            <div>
                <h2 className="has-text-centered is-size-4 mt-4 mb-6">{language.newGamePage.choose}</h2>
    
                <div className="is-flex m-4" style={blocStyle}>
                    
                    <img onClick={(language) => chooseLanguage('french')} style={imgStyle} src={franceFlag} alt="frenchFlag" />
    
                    <img onClick={(language) => chooseLanguage('swedish')} style={imgStyle} src={swedenFlag} alt="swedenFlag" />
    
                    <img onClick={(language) => chooseLanguage('english')} style={imgStyle} src={ukFlag} alt="ukFlag" />
    
                </div>
    
                <div className="is-flex mt-6" style={blocStyle}>
                    <div>
                        <p className="has-text-weight-bold is-strong mb-3">{language.newGamePage.title}</p>
                        <p>{language.newGamePage.dictionary}</p>
                        <p>{language.newGamePage.bestScore}</p>
                    </div>
                    
                    <button className="button is-link is-medium" style={buttonStyle} 
                            onClick={play}>
                        {language.newGamePage.go}
                    </button>
                </div>

                <footer className="has-background-grey-dark has-text-white-ter has-text-right is-size-7" style={footerStyle}>
                    <a href={language.newGamePage.source}>{language.newGamePage.footer}</a>
                </footer>

            </div>
        )
    }

    const displayGame = () => {
        return (
            <Game 
                language={language}
                firstVisit={false}
            />
        )
    }

    return (
        <div>
            {launchGame ? displayGame() : chooseLanguageForm()}
        </div>
    )
}

export default NewGame