function _fetchJSON(callback) {
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open("GET", "files/answers.json", true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function () {
      if (xobj.readyState == 4 && xobj.status == "200") {
        callback(xobj.responseText);
      }
    };
    xobj.send(null);
  }

function calculaTotal(answers) {
  try {
    let filteringValues = answers.filter(item => item.value)
    let mappingArray = filteringValues.map(item => item.question.weight)
    console.log(mappingArray)
    let sumValues = mappingArray.reduce((accumulator, current) => accumulator + current)
    console.log(sumValues)
    return sumValues;
  } catch (e) {
      console.log(e)
  }
}


function buildTable(data){

    const answers = JSON.parse(data).answers;

    const _total = calculaTotal(answers);

    var span = document.getElementById('total');
    span.innerHTML = _total;

    var table = document.getElementById('myTable');
    
    for (var i = 0; i < answers.length; i++){
        if( answers[i].value == true ) {
          var row = `<tr>
                          <td>${answers[i].id}</td>
                          <td>${answers[i].value}</td>
                          <td>${answers[i].question.weight}</td>
                    </tr>`
          table.innerHTML += row;
      }
    }

}

_fetchJSON(buildTable);
