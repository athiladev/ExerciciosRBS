try {
    let checkPreposition = item => {
        let preposition = ['to'] // para
        return preposition.indexOf(item) == -1
    }

    let validate = (word) => {
        let words = word.trim().split(" ");
        let wordsWithoutPrepositions = words.filter(checkPreposition)
        let amountOfWords = wordsWithoutPrepositions.length
        return amountOfWords > 2 && amountOfWords < 10
    }
    let testing = validate('hi how to')
    console.log(testing)

} catch (e) {
    console.log(e)
}

