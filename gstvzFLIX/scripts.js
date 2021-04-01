const games = [
  {
    name: "Days Gone",
    img: "./images/daysgone.jpg"
  },
  {
    name: "God of War",
    img: "./images/godofwar.jpg"
  },
  {
    name: "Spider-man",
    img: "./images/spiderman.jpg"
  },
  {
    name: "Red Dead Redemption 2",
    img: "./images/rdr2.jpg"
  }
]

const cinema = [
  {
    name: "Soul",
    img: "./images/soul.jpg"
  },
  {
    name: "Spider-man",
    img: "./images/mspider-man.jpg"
  },
  {
    name: "Wonder Woman: 1984",
    img: "./images/ww84.jpg"
  },
  {
    name: "Snyder's Cut",
    img: "./images/snydercut.jpg"
  },
  {
    name: "Shingeki no Kyojin: The Final Season",
    img: "./images/snk.jpg"
  }
]

const books = [
  {
    name: "O Velho E o Mar",
    img: "./images/ovelhoeomar.jpg"
  },
  {
    name: "O Último Desejo",
    img: "./images/oultimodesejo.jpg"
  },
  {
    name: "A Espada do Destino",
    img: "./images/aespadadodestino.jpg"
  },
  {
    name: "Mitologia Nórdica",
    img: "./images/mitologianordica.jpg"
  },
  {
    name: "Deuses Americanos",
    img: "./images/deusesamericanos.jpg"
  }
]

function showCinema(){
  
  document.getElementById('container').style.visibility = 'hidden';
  document.getElementById('container').style.display = 'none';
  document.getElementById('gamesGrid').style.visibility = 'visible';
  document.getElementById('gamesGrid').style.display = 'flex';
  document.getElementById('returnButton').style.visibility = 'visible';
  
  for(let i = 0; i < cinema.length; i++){
    document.getElementById('gamesGrid').insertAdjacentHTML("beforeend", `<figure><img src="${cinema[i].img}"><figcaption>${cinema[i].name}</figcaption></figure> `)
  }
};

function showGames(){
  
  document.getElementById('container').style.visibility = 'hidden';
  document.getElementById('container').style.display = 'none';
  document.getElementById('gamesGrid').style.visibility = 'visible';
  document.getElementById('gamesGrid').style.display = 'flex';
  document.getElementById('returnButton').style.visibility = 'visible';
  
  for(let i = 0; i < games.length; i++){
    document.getElementById('gamesGrid').insertAdjacentHTML("beforeend", `<figure><img src="${games[i].img}"><figcaption>${games[i].name}</figcaption></figure> `)
  }
};

function showBooks(){
  
  document.getElementById('container').style.visibility = 'hidden';
  document.getElementById('container').style.display = 'none';
  document.getElementById('gamesGrid').style.visibility = 'visible';
  document.getElementById('gamesGrid').style.display = 'flex';
  document.getElementById('returnButton').style.visibility = 'visible';
  
  for(let i = 0; i < books.length; i++){
    document.getElementById('gamesGrid').insertAdjacentHTML("beforeend", `<figure><img src="${books[i].img}"><figcaption>${books[i].name}</figcaption></figure> `)
  }
};

function returnPage(){
  document.getElementById('container').style.visibility = 'visible';
  document.getElementById('container').style.display = '';
  
  document.getElementById('gamesGrid').style.visibility = 'hidden';
  document.getElementById('gamesGrid').style.display = 'none';
  document.getElementById('returnButton').style.visibility = 'hidden';
  
  document.getElementById('gamesGrid').textContent = "";
};