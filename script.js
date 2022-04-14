// card ids but variable versions
var darkCard = document.querySelector('#dark-text')
var lightCard = document.querySelector('#light-text')
var inspireCard = document.querySelector('#inspire-text')
var despireCard = document.querySelector('#despire-text')

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

// showing card on button click and hiding other cards when one is displayed
function hideCurrentcard() {

}

document.getElementById("lightButton").addEventListener("click", showLight);
function showLight() {
  var lightCard = document.getElementById("light-card");
  if (lightCard.style.display === "none") {
    lightCard.style.display = "block";
  }
  // hideCurrentcard();
}

document.getElementById("darkButton").addEventListener("click", showDark);
function showDark() {
  var darkCard = document.getElementById("dark-card");
  if (darkCard.style.display === "none") {
    darkCard.style.display = "block";
  }
  // hideCurrentcard();
}

document.getElementById("inspireButton").addEventListener("click", showInspire);
function showInspire() {
  var inspireCard = document.getElementById("inspire-card");
  if (inspireCard.style.display === "none") {
    inspireCard.style.display = "block";
  }
  // hideCurrentcard();
}

document.getElementById("despireButton").addEventListener("click", showDespire);
function showDespire() {
  var despireCard = document.getElementById("despire-card");
  if (despireCard.style.display === "none") {
    despireCard.style.display = "block";
  }
  // hideCurrentcard();
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