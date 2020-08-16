import React, { useState} from 'react'
import App from './App'
import franceFlag from './images/flag/franceFlag.png'
import swedenFlag from './images/flag/swedenFlag.png'
import ukFlag from './images/flag/ukFlag.png'
import { french, english, swedish } from './languages'

const NewGame = () => {

    const blocImgStyle = {
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
        console.log('on va joue ren ', language.name)
        setLaunchGame(true)
    }

    const chooseLanguageForm = () => {
        return (
            <div>
                <h2 className="has-text-centered is-size-4 mt-4 mb-6">{language.choose}</h2>
    
                <div className="is-flex m-4" style={blocImgStyle}>
                    
                    <img onClick={(language) => chooseLanguage('french')} style={imgStyle} src={franceFlag} alt="frenchFlag" />
    
                    <img onClick={(language) => chooseLanguage('swedish')} style={imgStyle} src={swedenFlag} alt="swedenFlag" />
    
                    <img onClick={(language) => chooseLanguage('english')} style={imgStyle} src={ukFlag} alt="ukFlag" />
    
                </div>
    
                <div className="has-text-centered mt-6">
                    <button className="button is-link is-medium" style={buttonStyle} onClick={play}>{language.go}</button>
                </div>
            </div>
        )
    }

    const displayGame = () => {
        return (
            <App 
                language={language}
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