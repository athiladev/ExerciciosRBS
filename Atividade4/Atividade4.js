function exercise() {
    try {
        let str = '#abc123Z'
        let stringSize;
        let capitalLetters = /[A-Z]/ //REGEX
        let smallLetters = /[a-z]/
        let characters = /[!,@,#,$]/
        let numbers = /[0-9]/

        let hasCapitalLetters = capitalLetters.test(str)
        let hasLowercaseLetter = smallLetters.test(str)
        let hasCharacter = characters.test(str)
        let hasNumber = numbers.test(str)
        if (str.length >= 8 && str.length <= 12) {
            stringSize = true;
        }
        if (hasCapitalLetters && hasLowercaseLetter && hasNumber && stringSize && hasCharacter) {
            console.log('Validado!')
        } else {
            console.log('Não Validado!')
        }
    } catch (e) {
        console.log('Erro', e)
    }
}



exercise()