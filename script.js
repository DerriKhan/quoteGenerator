

document.getElementById("lightButton").addEventListener("click", lightJoke);
function lightJoke() {
var jokeLight = "https://v2.jokeapi.dev/joke/Any?safe-mode"

fetch(jokeLight)
    .then(function (response) {
      return response.json()
    })
    .then(function (data) {
      console.log(data)
    })
}

document.getElementById("darkButton").addEventListener("click", darkJoke);
function darkJoke() {
    var jokeDark = "https://v2.jokeapi.dev/joke/Any"
fetch(jokeDark)
    .then(function (response) {
      return response.json()
    })
    .then(function (data) {
      console.log(data)
    })
}

document.getElementById("inspireButton").addEventListener("click", inspire);
function inspire() {
    var inspiration = "https://api.goprogram.ai/inspiration"
fetch(inspiration)
    .then(function (response) {
      return response.json()
    })
    .then(function (data) {
      console.log(data)
    })
}

document.getElementById("despireButton").addEventListener("click", despire);
function despire() {
    var despiration = "https://api.whatdoestrumpthink.com/api/v1/quotes/random"
fetch(despiration)
    .then(function (response) {
      return response.json()
    })
    .then(function (data) {
      console.log(data)
    })
}
console.log('linked');
/*modal funtion--------------------------------------------------------------------------------------*/
$(document).ready(function(){
    $('.modal').modal();
  });

