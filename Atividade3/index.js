let answers = require('./answers.json').answers
try {
    let filteringValues = answers.filter(item => item.value)
    let mappingArray = filteringValues.map(item => item.question.weight)
    console.log(mappingArray)
    let sumValues = mappingArray.reduce((accumulator, current) => accumulator + current)
    console.log(sumValues)
} catch (e) {
    console.log(e)
}
