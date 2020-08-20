import React from 'react'

const SuccessForm = ({language, nextWordIsAsked}) => {

    return (
        <div className="is-size-2 has-text-centered has-text-success">
            {language.gamePage.winMsg}
            <br />
            <button className="button is-success mt-1 mb-3" onClick={nextWordIsAsked}>{language.gamePage.nextWord}</button>
        </div>
    )
}

export default SuccessForm