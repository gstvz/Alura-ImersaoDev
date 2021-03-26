const sendButton = document.getElementById('sendButton');
const tryAgainButton = document.getElementById('tryAgainButton');
const nextButton = document.getElementById('nextButton');
const result = document.getElementById('result');
const pokemonImg = document.getElementById('pokemonImg');

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

let pokemonNumber = 0;

function showPokemon (){
  pokemonNumber = Math.floor(Math.random() * pokemons.length);
  pokemonImg.setAttribute('src', pokemons[pokemonNumber].img)
}

showPokemon();

function checkAnswer() {
  let pokemonName = document.getElementById('pokemonName').value;
  if(pokemonName.toLowerCase() == pokemons[pokemonNumber].name.toLowerCase()){
    result.innerHTML = "Parabéns! Você acertou!";
    nextButton.removeAttribute('hidden');
  }
  else{
    result.innerHTML = "Você errou. Tente de novo.";
    tryAgainButton.removeAttribute('hidden');
  }
};

function tryAgain(){
  tryAgainButton.setAttribute('hidden', '');
  result.innerHTML = "";
  showPokemon();
}

function next(){  
  nextButton.setAttribute('hidden', '');
  result.innerHTML = "";
  showPokemon();
}