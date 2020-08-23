import React from 'react'
import { useSelector } from 'react-redux'

const Footer = () => {

  const language = useSelector(state => state.gameMode.language)

  const footerStyle = {
    position : 'fixed',
    bottom : 0,
    width: '100%'
  }

  return (
    <footer 
      className="has-background-grey-dark has-text-white-ter has-text-right is-size-7 mt-4" 
      style={footerStyle}
    >
      <i>{language.footer}</i>
    </footer>
  )
}


export default Footer