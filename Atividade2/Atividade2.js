
function capitalLetters(words) {
    try {
        let letters = "";
        for (let i of words) {
            if (i.toUpperCase() == i) {
                letters += i
            }
        }
        console.log(letters)
    }
    catch (e) {
        console.log('ERRO', e)
    }
}

capitalLetters('StRinG5')