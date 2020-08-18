import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch, Route
} from "react-router-dom"

import Scores from './components/Scores'
import Rules from './components/Rules'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import Game from './components/Game'
import NewGameForm from './components/NewGameForm'

import { english , french, swedish } from './languages/languages'
import randomWord from './dictionaries/randomWord'


const App = () => {

  // Define the language at the beginning via the NewGame page
  // Go back here every time a new game is launch

  const [ language, setLanguage ] = useState(english)
  const [ secretWord, setSecretWord ] = useState('')

  const NewGame = () => {

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
        setSecretWord(randomWord(language))
    }

    return (
        <NewGameForm language={language} chooseLanguage={chooseLanguage} />
    )
}

// 4 routes : "Home" page = "New game" page
  
  return (
    <Router> 

      <Switch>

        <Route path="/scores">
          <NavBar language={language}/>
          <Scores />
          <Footer language={language}/>
        </Route>

        <Route path="/rules">
          <NavBar language={language}/>
          <Rules language={language}/>
          <Footer language={language}/>
        </Route>

        <Route path="/game">
          <NavBar language={language}/>
          <Game language={language} secretWord={secretWord}/>
          <Footer language={language}/>
        </Route>

        <Route path="/">
          <NewGame />
        </Route>

      </Switch> 

    </Router>
  )
}

export default App
