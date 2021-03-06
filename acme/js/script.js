//General variables and calling functions
const s = localStorage;
const nav = document.getElementById('page-nav');
const title = document.getElementById('content-title');
const t = document.getElementById('page-title');
const img = document.getElementById('img');
const desc = document.getElementById('desc');
const manu = document.getElementById('manu');
const rev = document.getElementById('rev');
const price = document.getElementById('price');

//Fetching the JSON data
const json = '/acme/js/acme.json';

//Function to build the navigation
buildNav(json);
function buildNav(json) {
  console.log(json);
  // Build the remaining list items using a for loop
  fetch(json)
    .then(function (response) {
      if (response.ok) {
        return response.json();
      }
      throw new ERROR('Network response was not OK.');
    })
    .then(function (data) {
      console.log(data);
      let d = data['Titles'];
      console.log(d);
      nav.innerHTML += '<li><a onclick="home()" title="Home">Home</a></li>';
      for (let i = 1; i < 5; i++) {
        nav.innerHTML += '<li><a onclick="' + d[i] + '()" title="' + d[i] + '">' + d[i] + '</a></li>';
      }
    })
    .catch(function (error) {
      console.log('There was a fetch problem: ', error.message);
    })
}

function home() {
  title.innerHTML = 'Welcome to Acme!';
  t.innerHTML = 'Home | Acme Inc.';
  document.getElementById('home').setAttribute('class', "");
  document.getElementById('basic').setAttribute('class', "hide");
}

function Anvils() {
  t.innerHTML = 'Anvils | Acme Inc.';
  document.getElementById('home').setAttribute('class', 'hide');
  document.getElementById('basic').setAttribute('class', 'basic');
  buildPage(json, 'Anvils');
}

function Explosives() {
  t.innerHTML = 'Explosives | Acme Inc.';
  document.getElementById('home').setAttribute('class', 'hide');
  document.getElementById('basic').setAttribute('class', 'basic');
  buildPage(json, 'Explosives');
}

function Decoys() {
  t.innerHTML = 'Decoys | Acme Inc.';
  document.getElementById('home').setAttribute('class', 'hide');
  document.getElementById('basic').setAttribute('class', 'basic');
  buildPage(json, 'Decoys');
}

function Traps() {
  t.innerHTML = 'Traps | Acme Inc.';
  document.getElementById('home').setAttribute('class', 'hide');
  document.getElementById('basic').setAttribute('class', 'basic');
  buildPage(json, 'Traps');
}

function buildPage(json, page) {
  fetch(json)
    .then(function (response) {
      if (response.ok) {
        return response.json();
      }
      throw new ERROR('Network response was not OK.');
    })
    .then(function (data) {
      console.log(data);
      let d = data[page];
      console.log(d);
      title.innerHTML = d['name'];
      img.innerHTML = '<img src="' + d['path'] + '" alt="image of ' + page + '">';
      desc.innerHTML = d['description'];
      manu.innerHTML = '<strong>Made by: </strong>' + d['manufacturer '];
      rev.innerHTML = '<strong>Reviews: </strong>' + d['reviews '] + 'stars ';
      price.innerHTML = 'Price: $' + d['price'];
    })
    .catch(function (error) {
      console.log('There was a fetch problem: ', error.message);
    })
}