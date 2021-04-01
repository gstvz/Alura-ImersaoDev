const gamesNames =[
    "Days Gone",
    "God of War",
    "Spider-man",
    "Red Dead Redemption 2"
  ]
  
  const gamesImages = [  "./images/daysgone.jpg",
                         "./images/godofwar.jpg",
                         "./images/spiderman.jpg",
                         "./images/rdr2.jpg",
                       
   
  ];
  
  function showGames(){
    
    document.getElementById('container').style.visibility = 'hidden';
    document.getElementById('container').style.display = 'none';
    document.getElementById('gamesGrid').style.visibility = 'visible';
    document.getElementById('gamesGrid').style.display = 'flex';
    document.getElementById('returnButton').style.visibility = 'visible';
    
    for(let i = 0; i < gamesImages.length; i++){
      document.getElementById('gamesGrid').insertAdjacentHTML("beforeend", `<figure><img src="${gamesImages[i]}"><figcaption>${gamesNames[i]}</figcaption></figure> `)
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