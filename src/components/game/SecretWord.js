import React from 'react'
import { useSelector } from 'react-redux'

const SecretWord = () => {

    const word = useSelector(state => state.word.word)
    const displayedWord = useSelector(state => state.word.displayedWord)
    const wordIsNotDiscoverAtEnd = useSelector(state => state.word.wordIsNotDiscoverAtEnd)

    console.log('Word to discover : ', word ) // For cheating :)

    return (
        <div className="is-size-2 has-text-centered mt-6">

            {wordIsNotDiscoverAtEnd ? word : displayedWord}
            
        </div>
    )
}

export default SecretWord