const question = document.getElementById('question');
const pokemonImg = document.getElementById('pokemonImg');
const sendButton = document.getElementById('sendButton');
const tryAgainButton = document.getElementById('tryAgainButton');
const nextButton = document.getElementById('nextButton');
const result = document.getElementById('result');

var pokemonNumber = 0;
var pontos = 0;

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
  },
  {
    name: "snorlax",
    img: "./images/snorlax.png",
  },
  {
    name: "eevee",
    img: "./images/eevee.png",
  },
  {
    name: "vaporeon",
    img: "./images/vaporeon.png"
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
    pontos++;
  }
  else{
    result.innerHTML = "Você errou. Tente de novo.";
    sendButton.setAttribute('hidden', '');
    tryAgainButton.removeAttribute('hidden');
    pokemons.splice(pokemonNumber, 1);
  }
  if(pokemons.length == 0){
    endGame();
  };
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

function endGame(){
  question.setAttribute('hidden', '');
  pokemonName.setAttribute('hidden', '');
  pokemonImg.setAttribute('hidden', '');
  sendButton.setAttribute('hidden', '');
  nextButton.setAttribute('hidden', '');
  tryAgainButton.setAttribute('hidden', '');  
  result.innerHTML = `Fim de jogo! <br> Você acertou o nome de ${pontos} pokemons!`;
}