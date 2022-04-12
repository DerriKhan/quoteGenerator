var darkCard = document.querySelector('#dark-text')
var lightCard = document.querySelector('#light-text')
var inspireCard = document.querySelector('#inspire-text')
var despireCard = document.querySelector('#despire-text')


document.getElementById("lightButton").addEventListener("click", lightJoke);
function lightJoke() {
    var jokeLight = "https://v2.jokeapi.dev/joke/Any?safe-mode"  
 fetch(jokeLight)
var jokeLight = "https://v2.jokeapi.dev/joke/Any?safe-mode&type=twopart"
var LJ = document.querySelector('#LJ')
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
    var jokeDark = "https://v2.jokeapi.dev/joke/Any?&type=twopart"
    var DJ = document.querySelector('#DJ')

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
    var insp = document.querySelector('#insp')
fetch(inspiration)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);

      var quoteLocation = document.createElement('p')

      quoteLocation.textContent=((data.quote) + (" ") + (data.author))
      
      insp.append(quoteLocation)
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
    var desp = document.querySelector('#desp')
fetch(despiration)
    .then(function (data) {
      return data.json()
    })
    .then(function (data) {
      console.log(data);

      var quoteLocation = document.createElement('p')

      quoteLocation.textContent=(data.message + (" - Donald Trump"))
      
      desp.append(quoteLocation)
    })
}

$(document).ready(function(){
    $('.modal').modal();
    $('.modal').modal('open')
  });