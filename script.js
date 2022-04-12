var darkCard = document.querySelector('#dark-text')
var lightCard = document.querySelector('#light-text')
var inspireCard = document.querySelector('#inspire-text')
var despireCard = document.querySelector('#despire-text')


document.getElementById("lightButton").addEventListener("click", lightJoke);
function lightJoke() {
    var jokeLight = "https://v2.jokeapi.dev/joke/Any?safe-mode"  
 fetch(jokeLight)
    .then(function (response) {
      return response.json()
    })
    .then(function (data) {
      console.log(data)
      lightCard.textContent=((data.setup) + (" ") + (data.delivery))
      
    })
}

document.getElementById("darkButton").addEventListener("click", darkJoke);
function darkJoke() {
    var jokeDark = "https://v2.jokeapi.dev/joke/Any?"
fetch(jokeDark)
    .then(function (response) {
      return response.json()
    })
    .then(function (data) {
      console.log(data)
      darkCard.textContent=((data.setup) + (" ") + (data.delivery))
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
      inspireCard.textContent=((data.setup) + (" ") + (data.delivery))
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
      despireCard.textContent=((data.setup) + (" ") + (data.delivery))
    })
}

/*modal funtion--------------------------------------------------------------------------------------*/
$(document).ready(function(){
    $('.modal').modal();
    $('.modal').modal('open')
  });

