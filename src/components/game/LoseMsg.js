import React from 'react'

const LoseMsg = ({language}) => {

    return (
        <div className="is-size-2 has-text-centered has-text-danger mt-3 mb-3">
            {language.gamePage.loseMsg}
        </div>
    )
}

export default LoseMsg