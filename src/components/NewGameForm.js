import React from 'react'
import {Link } from "react-router-dom"

import franceFlag from '../images/flag/franceFlag.png'
import swedenFlag from '../images/flag/swedenFlag.png'
import ukFlag from '../images/flag/ukFlag.png'

const NewGameForm = ({language, chooseLanguage, bestPlayer, newGameIsAsked}) => {

    let score = 0
    let player = "Unknown"

    if (!(typeof bestPlayer === 'undefined')) {
        score = bestPlayer.score
        player = bestPlayer.name
    }

    const style = {
        bloc : {
            justifyContent : 'space-around'
        },
        img : {
            width: '10%',
            minWidth: '64px',
            cursor: 'pointer'
        },
        button : {
            width: '10%',
            minWidth: '64px',
            cursor: 'pointer'
        },
        footer : {
            position: 'fixed',
            bottom: 0,
            width: '100%'
        }
    }

    return (
        <div>

            <h2 className="has-text-centered is-size-4 mt-4 mb-6">
                {language.newGamePage.choose}
            </h2>

            <div className="is-flex m-4" style={style.bloc}>
                
                <img onClick={(language) => chooseLanguage('french')} style={style.img} src={franceFlag} alt="frenchFlag" />

                <img onClick={(language) => chooseLanguage('swedish')} style={style.img} src={swedenFlag} alt="swedenFlag" />

                <img onClick={(language) => chooseLanguage('english')} style={style.img} src={ukFlag} alt="ukFlag" />

            </div>

            <div className="is-flex mt-6" style={style.bloc}>
                <div>
                    <p className="has-text-weight-bold is-strong mb-3">{language.newGamePage.title}</p>
                    <p>{language.newGamePage.dictionary}</p>
                    <p>{language.newGamePage.bestScore} {score} {language.newGamePage.pts} - ({player})</p>
                </div>
                
                <Link className="button is-link is-medium" style={style.button}
                        onClick={newGameIsAsked} 
                        to="/game">
                    {language.newGamePage.go}
                </Link>
            </div>

            <footer className="has-background-grey-dark has-text-white-ter has-text-right is-size-7" style={style.footer}>
                <a href={language.newGamePage.source}>{language.newGamePage.footer}</a>
            </footer>

        </div>
    )
}

export default NewGameForm