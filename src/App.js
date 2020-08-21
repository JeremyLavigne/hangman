import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch, Route
} from "react-router-dom"

import Scores from './components/Scores'
import Rules from './components/Rules'
import Footer from './components/header-footer/Footer'
import NavBar from './components/header-footer/NavBar'
import Game from './components/game/Game'
import NewGameForm from './components/NewGameForm'

import { english, french, swedish } from './languages/languages'
import randomWord from './dictionaries/randomWord'

import scoresService from './services/scores'


const App = () => {

  const [ language, setLanguage] = useState(english)
  const [ scores, setScores ] = useState([]) // Array with all best scores

  // Get the best scores
  useEffect(() => {
    scoresService
      .getScores(language.name)
      .then(initialScores => {
        setScores(initialScores.sort(function(score1, score2) {
          return score2.score - score1.score;
        }).slice(0,10))
      })

  }, [language])

  // No useful, try to solve the next issue : If you ask for a new game without changing the language, there is no re-init
  const newGameIsAsked = () => {
    setNewGameAsked(true)
  }

  // Define the language at the beginning via the NewGame page
  const NewGame = () => {

    const chooseLanguage = (languageName) => {
      switch (languageName) {
        case 'french':
          setLanguage(french)
          break
        case 'swedish':
          setLanguage(swedish)
          break
        case 'english':
          setLanguage(english)
          break
        default: setLanguage(english)
      }
    }

    return (
      <NewGameForm language={language} chooseLanguage={chooseLanguage} bestPlayer={scores[0]} newGameIsAsked={newGameIsAsked}/>
    )
  }

  // Variables
  const [ word, setWord] = useState(randomWord(language.name).toUpperCase()) // Effective word to discover
  const [ displayedWord, setDisplayedWord] = useState(word.split('').map(char => '_ ')) // What appears in the user screen
  const [ discoveredLetters, setDiscoveredLetters] = useState([]) // Use to set good letter in the keyboard
  const [ missedLetters, setMissedLetters] = useState([]) // Use to set wrong letter in the keyboard
  const [ count, setCount] = useState(7) // Reamining moves
  const [ gameIsLost, setGameIsLost] = useState(false) // Obvious
  const [ gameIsWon, setGameIsWon] = useState(false)
  const [ nextWordAsked, setNextWordAsked] = useState(false) // True if "Next Word" button is clicked after win
  const [ newGameAsked, setNewGameAsked] = useState(false)
  const [ score, setScore ] = useState(0) // Record score

  // Keep an eye on Win/Lose status
  useEffect(() => {
    if (count === 0) {
      setGameIsLost(true)
    } else if (!displayedWord.includes('_ ')) {
      setGameIsWon(true)
    }
  }, [count, displayedWord])


  // After success, re-init the game with a new word - keep the score
  useEffect(() => {
    const initialize = () => {
      setCount(7)
      setGameIsWon(false)
      setDiscoveredLetters([])
      setMissedLetters([])
      setDisplayedWord(word.split('').map(char => '_ '))
    }
    // Prevent Initialize if player check an other page during the game
    // Initialze only if a new word is asked
    if (nextWordAsked || newGameAsked) {
      initialize()
    }
  }, [word, nextWordAsked, newGameAsked])

  const nextWordIsAsked = () => {
    nextWord()
    setNextWordAsked(true)
  }
  const nextWord = () => {
    setWord(randomWord(language.name).toUpperCase())
  }


  // Set the right score after a word has been discover
  useEffect(() => {
    if (gameIsWon) {
        modifiyScore()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameIsWon])

  const modifiyScore = () => {
    switch (count) {
        case 7 : 
            setScore(score + 100)
            break
        case 6 : 
            setScore(score + 50)
            break
        case 5 : 
            setScore(score + 35)
            break
        case 4 : 
            setScore(score + 25)
            break
        case 3 : 
            setScore(score + 15)
            break
        case 2 : 
            setScore(score + 10)
            break
        case 1 : 
            setScore(score + 5)
            break
        default : 
            setScore(score)
    }
  }

  const saveScore = (playername) => {
    const newObject = {
      id : (100000 * Math.random()).toFixed(0),
      name : playername,
      score : score
    }
    scoresService
      .addScore(language.name, newObject)
      .then(newObject => {
        setScores(scores.concat(newObject))
      })
  }


  // Deal with every click on keyboard
  const clickOnALetter = (letter) => {
    console.log('you clicked on ', letter)

    // Prevent click if game is already Over
    if (gameIsLost || gameIsWon) {
      return null
    }

    // If the clicked letter is in the word
    if (word.split('').includes(letter)) {

      // Add it to the Array of already discovered letters
      setDiscoveredLetters(discoveredLetters.concat(letter))
      setDisplayedWord(word.split('').map(l => (discoveredLetters.includes(l) || l === letter) ? l : '_ '))

    } else {
      setMissedLetters(missedLetters.concat(letter))
      setCount(count - 1)
    }
  }

  // 4 routes : "Home" page = "New game" page

  return (
    <Router>

      <Switch>

        <Route path="/scores">
          <NavBar language={language} />
          <Scores language={language} scores={scores}/>
          <Footer language={language} />
        </Route>

        <Route path="/rules">
          <NavBar language={language} />
          <Rules language={language} />
          <Footer language={language} />
        </Route>

        <Route path="/game">
          <NavBar language={language} />
          <Game
            language={language}
            word={word}
            nextWordIsAsked={nextWordIsAsked}
            gameIsLost={gameIsLost}
            gameIsWon={gameIsWon}
            discoveredLetters={discoveredLetters}
            missedLetters={missedLetters}
            displayedWord={displayedWord}
            count={count}
            clickOnALetter={clickOnALetter}
            score={score}
            scores={scores}
            saveScore={saveScore}
          />
          <Footer language={language} />
        </Route>

        <Route path="/">
          <NewGame />
        </Route>

      </Switch>

    </Router>
  )
}

export default App
