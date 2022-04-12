document.getElementById("lightButton").addEventListener("click", lightJoke);
function lightJoke() {
  var jokeLight = "https://v2.jokeapi.dev/joke/Any?safe-mode"

  fetch(jokeLight)
    .then(function (response) {
      return response.json()
    })
    .then(function (data) {
      console.log(data)

      var quoteLocation = document.createElement('p')

      quoteLocation.textContent=((data.setup) + (" ") + (data.delivery))
      
      LJ.append(quoteLocation)
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
      var quoteLocation = document.createElement('p')

      quoteLocation.textContent=((data.setup) + (" ") + (data.delivery))
      
      DJ.append(quoteLocation)
    })
}

document.getElementById("inspireButton").addEventListener("click", inspire);
function inspire() {
  var inspiration = "https://api.goprogram.ai/inspiration"
  fetch(inspiration)
    .then(function (response) {
      console.log(data)
      return response.json()
    })
    .then(function (data) {
      var quoteLocation = document.createElement('p')

      quoteLocation.textContent=((data.setup) + (" ") + (data.delivery))
      
      insp.append(quoteLocation)
    })
}

document.getElementById("despireButton").addEventListener("click", despire);
function despire() {
  var despiration = "https://api.whatdoestrumpthink.com/api/v1/quotes/random"
  fetch(despiration)
    .then(function (response) {
      console.log(data)
      return response.json()
    })
    .then(function (data) {
      var quoteLocation = document.createElement('p')

      quoteLocation.textContent=((data.setup) + (" ") + (data.delivery))
      
      desp.append(quoteLocation)
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