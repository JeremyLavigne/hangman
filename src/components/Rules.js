import React from 'react'

const Rules = ({language}) => {

    return (
        <div className="ml-2 mr-2">
            <h2 className="title has-text-centered mt-5">{language.rulesPage.title}</h2>

            <p className="has-text-justified mt-4 mb-5">{language.rulesPage.intro}</p>

            <div className="mt-3">
                <h3 className="has-text-weight-bold is-strong mb-3" >{language.rulesPage.scoreInfoTitle}</h3>
                <ul>
                    {language.rulesPage.scoreInfo.map(info => <li key={info} className="ml-5">- {info}</li>)}
                </ul>
            </div>

            <p className="is-italic has-text-right mt-5">{language.rulesPage.goodLuck}</p>
        </div>
    )
}

export default Rules