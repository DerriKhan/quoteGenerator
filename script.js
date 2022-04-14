// card ids but variable versions
var darkCard = document.querySelector('#dark-text')
var lightCard = document.querySelector('#light-text')
var inspireCard = document.querySelector('#inspire-text')
var despireCard = document.querySelector('#despire-text')
var despireBox = document.getElementById("despire-card")
var inspireBox = document.getElementById("inspire-card")
var darkBox = document.getElementById("dark-card")
var lightBox = document.getElementById("light-card")

// puts joke in corresponding cards on button click
document.getElementById("lightButton").addEventListener("click", lightJoke);
function lightJoke() {
  var jokeLight = "https://v2.jokeapi.dev/joke/Any?safe-mode&type=twopart"
  fetch(jokeLight)
    .then(function (response) {
      return response.json()
    })
    .then(function (data) {
      console.log(data)
      lightCard.textContent = ((data.setup) + (" ") + (data.delivery))
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
      darkCard.textContent = ((data.setup) + (" ") + (data.delivery))
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
      inspireCard.textContent = ((data.quote) + (" ") + (data.author))
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
      despireCard.textContent = ((data.message) + ("  -Donald Trump"))
    })
}

// modal function
$(document).ready(function () {
  $('.modal').modal();
  $('.modal').modal('open')
});

// side nav function
$(document).ready(function () {
  $('.sidenav').sidenav();
});

// user video function????

// cards are displayed when clicked and hide other cards that are currently visible
document.getElementById("lightButton").addEventListener("click", showLight);
function showLight() {
  lightBox.style.display = "block"
  darkBox.style.display = "none"
  inspireBox.style.display = "none"
  despireBox.style.display = "none"
}

document.getElementById("darkButton").addEventListener("click", showDark);
function showDark() {
  darkBox.style.display = "block"
  lightBox.style.display = "none"
  inspireBox.style.display = "none"
  despireBox.style.display = "none"
}

document.getElementById("inspireButton").addEventListener("click", showInspire);
function showInspire() {
  darkBox.style.display = "none"
  lightBox.style.display = "none"
  inspireBox.style.display = "block"
  despireBox.style.display = "none"
}

document.getElementById("despireButton").addEventListener("click", showDespire);
function showDespire() {
  darkBox.style.display = "none"
  lightBox.style.display = "none";
  inspireBox.style.display = "none"
  despireBox.style.display = "block"
}

// setting favorite jokes to local storage
function setFavorites() {
  var lightFav = localStorage.setItem('lightFav', document.getElementById('#light-text'));
  var darkFav = localStorage.setItem('darkFav', document.getElementById('#dark-text'))
  var inspireFav = localStorage.setItem('inspireFav', document.getElementById('#inspire-text'))
  var despireFav = localStorage.setItem('despireFav', document.getElementById('#despire-text'))

  document.getElementById('fav-quote').value = lightFav
  document.getElementById('fav-quote').value = darkFav
  document.getElementById('fav-quotet').value = inspireFav
  document.getElementById('fav-quote').value = despireFav

}