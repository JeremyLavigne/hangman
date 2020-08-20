import React from 'react'

const Footer = ({language}) => {

    const style = {
        position: 'fixed',
        bottom: 0,
        width: '100%'
    }

    return (
      <footer className="has-background-grey-dark has-text-white-ter has-text-right is-size-7 mt-4" style={style}>
        <i>{language.footer}</i>
      </footer>
    )
}


export default Footer