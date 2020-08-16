/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import { Link } from "react-router-dom"

const NavBar = () => {

  const [ activeBurger, setActiveBurger ] = useState(false)

  const burgerIsActive = activeBurger ? 'navbar-menu is-active' : 'navbar-menu'

  const clickOnBurger = () => {
   if (activeBurger === false) {
       setActiveBurger(true)
    } else {
      setActiveBurger(false)
    }
  }

  const desactiveBurger = () => {
       setActiveBurger(false)
   }


  return (
   
    <nav className="navbar has-background-dark" role="navigation" aria-label="main navigation">

      <div className="navbar-brand">
        <Link className="navbar-item has-text-white" onClick={desactiveBurger} to="/">New Game</Link>

        <a role="button" onClick={clickOnBurger} className="navbar-burger burger has-text-white" aria-label="menu" aria-expanded="false" data-target="navbarMenu">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarMenu" className={burgerIsActive} >
        <Link className="navbar-item" onClick={desactiveBurger} to="/scores">Best Scores</Link>
        <Link className="navbar-item" onClick={desactiveBurger} to="/rules">Rules</Link>
      </div>

    </nav>

    )
}

export default NavBar