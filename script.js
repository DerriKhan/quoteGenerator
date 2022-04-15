// card ids but variable versions
var darkCard = document.querySelector('#dark-text')
var lightCard = document.querySelector('#light-text')
var inspireCard = document.querySelector('#inspire-text')
var despireCard = document.querySelector('#despire-text')
var saveButton = document.getElementById('save')
var saveButton2 = document.getElementById('save2')
var saveButton3 = document.getElementById('save3')
var saveButton4 = document.getElementById('save4')
var quoteText = ("")
var saved = document.querySelector("#fav-quote")

// var despireBox = document.getElementById("despire-card")
// var inspireBox = document.getElementById("inspire-card")
// var darkBox = document.getElementById("dark-card")
// var lightBox = document.getElementById("light-card")


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
      quoteText = lightCard.textContent = ((data.setup) + (" ") + (data.delivery))
    })
}

document.getElementById("darkButton").addEventListener("click", darkJoke);
function darkJoke() {
  var jokeDark = "https://v2.jokeapi.dev/joke/Spooky?&type=twopart"
  fetch(jokeDark)
    .then(function (response) {
      return response.json()
    })
    .then(function (data) {
      console.log(data)
      quoteText = darkCard.textContent = ((data.setup) + (" ") + (data.delivery))
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
     quoteText = inspireCard.textContent = ((data.quote) + (" ") + (data.author))
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
     quoteText = despireCard.textContent = ((data.message) + ("  -Donald Trump"))
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
  lightBox.style.display = "block"
  inspireBox.style.display = "none"
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
/*save button function---------------------------------------------------------------------------------------------------------*/
  saveButton.addEventListener("click", function(){
    console.log("clicked")
    localStorage.setItem('text', quoteText)
    /*favorite quote array layout------------------------*/
        var favorite = {
            quoteType: "light",
            quote: quoteText
          }
          console.log(favorite)
    /*we add favorite quote into array favorites---------*/
        var favorites = localStorage.getItem("favorites")
        if (favorites === null) {
          favorites = [];
        }
        else {
          favorites = JSON.parse(favorites);
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
        savedLocation.textContent = (localStorage.getItem("quote"))
        saved.append(savedLocation)
  })

  saveButton2.addEventListener("click", function(){
    console.log("clicked")
    localStorage.setItem('text', quoteText)
  /*favorite quote array layout------------------------*/
      var favorite = {
          quoteType: "dark",
          quote: quoteText
        }
        console.log(favorite)
  /*we add favorite quote into array favorites---------*/
      var favorites = localStorage.getItem("favorites")
      if (favorites === null) {
        favorites = [];
      }
      else {
        favorites = JSON.parse(favorites);
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
      savedLocation.textContent = (localStorage.getItem("quote"))
      saved.append(savedLocation)
})

saveButton3.addEventListener("click", function(){
  console.log("clicked")
  localStorage.setItem('text', quoteText)
  /*favorite quote array layout------------------------*/
      var favorite = {
          quoteType: "inspire",
          quote: quoteText
        }
        console.log(favorite)
  /*we add favorite quote into array favorites---------*/
      var favorites = localStorage.getItem("favorites")
      if (favorites === null) {
        favorites = [];
      }
      else {
        favorites = JSON.parse(favorites);
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
      savedLocation.textContent = (localStorage.getItem("quote"))
      saved.append(savedLocation)
})

saveButton4.addEventListener("click", function(){
  console.log("clicked")
  localStorage.setItem('text', quoteText)
  /*favorite quote array layout------------------------*/
      var favorite = {
          quoteType: "despire",
          quote: quoteText
        }
        console.log(favorite)
  /*we add favorite quote into array favorites---------*/
      var favorites = localStorage.getItem("favorites")
      if (favorites === null) {
        favorites = [];
      }
      else {
        favorites = JSON.parse(favorites);
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
      savedLocation.textContent = (localStorage.getItem("quote"))
      saved.append(savedLocation)
})