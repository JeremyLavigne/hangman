const randomWord = (language) => {

    let lastWordIndex 
    let dictionary

    switch (language) {
        case "english" :
            lastWordIndex = 55178
            dictionary = require ('./english')
            break
        case "french" :
            lastWordIndex = 15072
            dictionary = require ('./french')
            break
        case "swedish" :
            lastWordIndex = 7762
            dictionary = require ('./swedish')
            break
        default :
            lastWordIndex = 55178
    }

    const wordNumber = Math.floor(Math.random() * Math.floor(lastWordIndex))
    console.log('word number ', wordNumber )

    return dictionary.default[wordNumber]

}

export default randomWord