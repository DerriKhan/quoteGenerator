var darkCard = document.querySelector('#dark-text')
var lightCard = document.querySelector('#light-text')
var inspireCard = document.querySelector('#inspire-text')
var despireCard = document.querySelector('#despire-text')


document.getElementById("lightButton").addEventListener("click", lightJoke);
function lightJoke() {
var jokeLight = "https://v2.jokeapi.dev/joke/Any?safe-mode&type=twopart"
fetch(jokeLight)
    .then(function (response) {
      return response.json()
    })
    .then(function (data) {
      console.log(data)

      var quoteLocation = document.createElement('p')

      quoteLocation.textContent = ((data.setup) + (" ") + (data.delivery))

      LJ.append(quoteLocation)
    })
}

document.getElementById("darkButton").addEventListener("click", darkJoke);
function darkJoke() {
var jokeDark = "https://v2.jokeapi.dev/joke/Any?&type=twopart"
fetch(jokeDark)
    .then(function (response) {
      return response.json()
    })
    .then(function (data) {
      console.log(data)
      var quoteLocation = document.createElement('p')

      quoteLocation.textContent = ((data.setup) + (" ") + (data.delivery))

      DJ.append(quoteLocation)
    })
}

document.getElementById("inspireButton").addEventListener("click", inspire);
function inspire() {
    var inspiration = "https://api.goprogram.ai/inspiration"
fetch(inspiration)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var quoteLocation = document.createElement('p')

      quoteLocation.textContent = ((data.setup) + (" ") + (data.delivery))

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
      var quoteLocation = document.createElement('p')

      quoteLocation.textContent = ((data.setup) + (" ") + (data.delivery))

      desp.append(quoteLocation)
    })
}

/*modal funtion--------------------------------------------------------------------------------------*/
$(document).ready(function () {
  $('.modal').modal();
  $('.modal').modal('open')
});
/*----------------------------------------------------------------------------------------------------*/

// changing theme by button click
// 
// function themeLight('css/light-theme.css') {
//   $('#color_theme').attr("href", 'css/light-theme.css');
//   document.getElementById('color_theme').removeAttribute('href');
//   document.getElementById('color_theme').setAttribute('href', 'css/light-theme.css');
// };

//
// function themeDark('css/dark-theme.css') {
//   $('#color_theme').attr("href", 'css/dark-theme.css');
//   document.getElementById('color_theme').removeAttribute('href');
//   document.getElementById('color_theme').setAttribute('href', 'css/dark-theme.css');
// };

// 
// function themeInspire('css/light-theme.css') {
//   $('#color_theme').attr("href", 'css/light-theme.css');
//   document.getElementById('color_theme').removeAttribute('href');
//   document.getElementById('color_theme').setAttribute('href', 'css/light-theme.css');
// };

//
// function themeDespire('css/dark-theme.css') {
//   $('#color_theme').attr("href", 'css/dark-theme.css');
//   document.getElementById('color_theme').removeAttribute('href');
//   document.getElementById('color_theme').setAttribute('href', 'css/dark-theme.css');
// };


// showing card on button click
document.getElementById("lightButton").addEventListener("click", showLight);
function showLight() {
  var lightCard = document.getElementById("light-card");
  if (lightCard.style.display === "none") {
    lightCard.style.display = "block";
  }
  themeLight()
}

document.getElementById("darkButton").addEventListener("click", showDark);
function showDark() {
  var darkCard = document.getElementById("dark-card");
  if (darkCard.style.display === "none") {
    darkCard.style.display = "block";
  }
  themeDark()
}

document.getElementById("inspireButton").addEventListener("click", showInspire);
function showInspire() {
  var inspireCard = document.getElementById("inspire-card");
  if (inspireCard.style.display === "none") {
    inspireCard.style.display = "block";
  }
  themeInspire()
}

document.getElementById("despireButton").addEventListener("click", showDespire);
function showDespire() {
  var despireCard = document.getElementById("despire-card");
  if (despireCard.style.display === "none") {
    despireCard.style.display = "block";
  }
  themeDespire()
}
