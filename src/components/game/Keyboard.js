import React from 'react'

const Keyboard = ({language, onClick, discoveredLetters, missedLetters}) => {

    let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ]
    
    if (language.name === "swedish") {
        alphabet = alphabet.concat(['Å', 'Ä', 'Ö' ])
    }

    const style = {
        success : {
            backgroundColor : 'green'
        },
        failed : {
            backgroundColor : 'red'
        }
    }

    return (
        <div className="has-text-centered mt-6">
            {alphabet.map(letter => 
                <button 
                    className="button px-2 mx-1 my-1" 
                    key={letter}
                    onClick={() => onClick(letter)}
                    style={
                            discoveredLetters.includes(letter) ? style.success : 
                        missedLetters.includes(letter) ? style.failed : null
                    }
                    disabled={(discoveredLetters.includes(letter) || missedLetters.includes(letter)) ? true : false}
                    >
                    {letter}
                </button>)
            }
        </div>
    )
}

export default Keyboard