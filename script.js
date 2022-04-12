

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
$(document).ready(function () {
  $('.modal').modal();
  $('.modal').modal('open')
});


// changing theme by button section
document.querySelector('#despireButton').addEventListener('click', () => {
  document.querySelector('#despire-card').classList.add('dark-card');
}); 

document.querySelector('#darkButton').addEventListener('click', () => {
  document.querySelector('#dark-card').classList.add('dark-card');
}); 

document.querySelector('#inspireButton').addEventListener('click', () => {
  document.querySelector('#inspire-card').classList.add('light-card');
}); 

document.querySelector('#lightButton').addEventListener('click', () => {
  document.querySelector('#light-card').classList.add('light-card');
}); 