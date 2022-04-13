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

      quoteLocation.textContent = ((data.setup) + (" ") + (data.delivery))

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

      quoteLocation.textContent = ((data.setup) + (" ") + (data.delivery))

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

      quoteLocation.textContent = ((data.setup) + (" ") + (data.delivery))

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

      quoteLocation.textContent = ((data.setup) + (" ") + (data.delivery))

      desp.append(quoteLocation)
    })
}
console.log('linked');
/*modal funtion--------------------------------------------------------------------------------------*/
$(document).ready(function () {
  $('.modal').modal();
  $('.modal').modal('open')
});


// changing theme by button click
// document.getElementById("lightButton").addEventListener("click", themeLight);
// function themeLight('css/light-theme.css') {
//   $('#color_theme').attr("href", 'css/light-theme.css');
//   document.getElementById('color_theme').removeAttribute('href');
//   document.getElementById('color_theme').setAttribute('href', 'css/light-theme.css');
// };

// document.getElementById("darkButton").addEventListener("click", themeDark);
// function themeDark('css/dark-theme.css') {
//   $('#color_theme').attr("href", 'css/dark-theme.css');
//   document.getElementById('color_theme').removeAttribute('href');
//   document.getElementById('color_theme').setAttribute('href', 'css/dark-theme.css');
// };

// document.getElementById('css/dark-theme.css').addEventListener("click", themeInspire);
// function themeInspire('css/light-theme.css') {
//   $('#color_theme').attr("href", 'css/light-theme.css');
//   document.getElementById('color_theme').removeAttribute('href');
//   document.getElementById('color_theme').setAttribute('href', 'css/light-theme.css');
// };

// document.getElementById("despireButton").addEventListener("click", themeDespire);
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
}

document.getElementById("darkButton").addEventListener("click", showDark);
function showDark() {
  var darkCard = document.getElementById("dark-card");
  if (darkCard.style.display === "none") {
    darkCard.style.display = "block";
  }
}

document.getElementById("inspireButton").addEventListener("click", showInspire);
function showInspire() {
  var inspireCard = document.getElementById("inspire-card");
  if (inspireCard.style.display === "none") {
    inspireCard.style.display = "block";
  }
}

document.getElementById("despireButton").addEventListener("click", showDespire);
function showDespire() {
  var despireCard = document.getElementById("despire-card");
  if (despireCard.style.display === "none") {
    despireCard.style.display = "block";
  }
}