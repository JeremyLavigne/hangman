/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import { Link } from "react-router-dom"
import NewGame from '../NewGame'

const NavBar = ({language}) => {

  const [ activeBurger, setActiveBurger ] = useState(false)
  const [ currentGamePageActive, setCurrentGamePageActive ] = useState(true)
  const [ newGameLaunched, setNewGameLaunched ] = useState(false)

  const burgerIsActive = activeBurger ? 'navbar-menu is-active' : 'navbar-menu'

  const clickOnBurger = () => {
   if (activeBurger === false) {
       setActiveBurger(true)
    } else {
      setActiveBurger(false)
    }
  }

  const currentGamePageIsNotActive = () => {
    setCurrentGamePageActive(false)
  }
  const currentGamePageIsActive = () => {
    setCurrentGamePageActive(true)
  }

  const desactiveBurger = () => {
       setActiveBurger(false)
   }

  const launchNewGame = () => {
    console.log('new game')
    setNewGameLaunched(true)
  }

  const clickOnNewGame = () => {
    desactiveBurger()
    launchNewGame()
  }
  const clickOnBackToGame = () => {
    desactiveBurger()
    currentGamePageIsActive()
  }
  const clickOnRulesOrScore = () => {
    desactiveBurger()
    currentGamePageIsNotActive()
  }

  if (newGameLaunched){
    return (
      <NewGame />
    )
  }

  return (
   
    <nav className="navbar has-background-dark" role="navigation" aria-label="main navigation">

      <div className="navbar-brand">
        {currentGamePageActive ?
          <div className="navbar-item has-text-white" onClick={clickOnNewGame}>
              {language.nav[0]}
          </div>
          :
          <Link 
            className="navbar-item has-text-white" 
            onClick={clickOnBackToGame} 
            to="/">
              {language.nav[3]}
          </Link>
        }

        <a role="button" onClick={clickOnBurger} className="navbar-burger burger has-text-white" aria-label="menu" aria-expanded="false" data-target="navbarMenu">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarMenu" className={burgerIsActive} >
        <Link 
          className="navbar-item" 
          onClick={clickOnRulesOrScore} 
          to="/scores">
            {language.nav[1]}
        </Link>

        <Link 
          className="navbar-item" 
          onClick={clickOnRulesOrScore} 
          to="/rules">
            {language.nav[2]}
        </Link>
      </div>

    </nav>

    )
}

export default NavBar