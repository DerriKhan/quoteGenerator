// card ids but variable versions
var darkCard = document.querySelector('#dark-text')
var lightCard = document.querySelector('#light-text')
var inspireCard = document.querySelector('#inspire-text')
var despireCard = document.querySelector('#despire-text')
var saveButton = document.getElementById('save')
var quoteText = ("")
var saved = document.querySelector("#fav-quote")

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
      lightCard.quoteText = ((data.setup) + (" ") + (data.delivery))
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
// $(document).ready(function () {
//   $('.modal').modal();
//   $('.modal').modal('open')
// });

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

// function setFavorites() {
//   var lightFav = localStorage.setItem('lightFav', document.getElementById('#light-text'));
//   var darkFav = localStorage.setItem('darkFav', document.getElementById('#dark-text'))
//   var inspireFav = localStorage.setItem('inspireFav', document.getElementById('#inspire-text'))
//   var despireFav = localStorage.setItem('despireFav', document.getElementById('#despire-text'))

//   document.getElementById('fav-quote').value = lightFav
//   document.getElementById('fav-quote').value = darkFav
//   document.getElementById('fav-quotet').value = inspireFav
//   document.getElementById('fav-quote').value = despireFav
// }

/*function to display quote in card---------------------------------------------------------------------------------------------*/
var displayQuote = document.querySelector("#light-text")
displayQuote.addEventListener("click", function(){
  fetch(quoteText)
  .then(function (response) {
    return response.json()
  })
  .then(function (quoteText) {
    console.log(quoteText)
    quoteText = display.quoteText= (data.quote)
  })
})
/*save button function---------------------------------------------------------------------------------------------------------*/
  saveButton.addEventListener("click", function(){
    localStorage.setItem('text', quoteText)
    /*favorite quote array layout------------------------*/
        var favorite = {
            quoteType: "light",
            quote: quoteText
          }
    /*we add favorite quote into array favorites---------*/
        var favorites = localStorage.getItem("favorites")
        if (favorites === null) {
          favorites = [];
        }
        else {
          favorites = JSON.parse('favorites');
        }
    /*we push our favorite quote into favorites--------------*/
        favorites.push(favorite)
    /*we create an all favorites to save our favorites inside of so that what we save doesn't get saved over for new quotes*/
        var allFavorites = JSON.stringify(favorites)
        favorites = (localStorage.getItem("favorites"))
        localStorage.setItem("favorites", allFavorites);
        localStorage.setItem("quote", quoteText)
    /*list element dynamically created and with each saved quote the list will grow*/
        var savedLocation = document.createElement('li')
        savedLocation.quoteText = (localStorage.getItem("quote"))
        saved.append(savedLocation)
})