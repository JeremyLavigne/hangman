import React from 'react'

const Keyboard = ({language, onClick}) => {

    let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ]
    
    if (language.name === "swedish") {
        alphabet = alphabet.concat(['Å', 'Ä', 'Ö' ])
    }

    return (
        <div className="has-text-centered mt-6">
            {alphabet.map(letter => 
                <button className="button px-2 mx-1 my-1" key={letter}
                    onClick={() => onClick(letter)}>
                    {letter}
                </button>)
            }
        </div>
    )
}

export default Keyboard