const sendButton = document.getElementById('sendButton');
const tryAgainButton = document.getElementById('tryAgainButton');
const nextButton = document.getElementById('nextButton');
const result = document.getElementById('result');
const pokemonImg = document.getElementById('pokemonImg');

var pokemonNumber = 0;

const pokemons = [
  {
    name: "pikachu",    
    img: "./images/pikachu.png"
  },
  {
    name: "bulbasaur",
    img: "./images/bulbasaur.png"
  },
  {
    name: "squirtle",
    img: "./images/squirtle.png"
  },
  {
    name: "charmander",
    img: "./images/charmander.png"
  },
  {
    name: "psyduck",
    img: "./images/psyduck.png"
  },
  {
    name: "sandshrew",
    img: "./images/sandshrew.png"
  },
  {
    name: "gengar",
    img: "./images/gengar.png"
  }
];

showPokemon();

function showPokemon (){
  pokemonNumber = Math.floor(Math.random() * pokemons.length);
  pokemonImg.setAttribute('src', pokemons[pokemonNumber].img)
}

function checkAnswer() {
  var pokemonName = document.getElementById('pokemonName').value;
  if(pokemonName.toLowerCase() == pokemons[pokemonNumber].name.toLowerCase()){
    result.innerHTML = "Parabéns! Você acertou!";
    sendButton.setAttribute('hidden', '');
    nextButton.removeAttribute('hidden');
    pokemons.splice(pokemonNumber, 1);    
  }
  else{
    result.innerHTML = "Você errou. Tente de novo.";
    sendButton.setAttribute('hidden', '');
    tryAgainButton.removeAttribute('hidden');
    pokemons.splice(pokemonNumber, 1);
  }
};

function tryAgain(){
  tryAgainButton.setAttribute('hidden', '');
  sendButton.removeAttribute('hidden');
  result.innerHTML = "";
  showPokemon();
}

function next(){  
  nextButton.setAttribute('hidden', '');
  sendButton.removeAttribute('hidden');
  result.innerHTML = "";
  showPokemon();
}