var tries = 10;
var pontos = 0;

function checkAnswer(){
  let secretNumber = parseInt(Math.random()*10);
  let userNumber = document.getElementById('userNumber').value;  
  
  while(tries > 0){
    if(userNumber == secretNumber){
      document.getElementById('text').textContent = "Você acertou!";
      pontos++;
      break;
    } else{      
      tries--;
      document.getElementById('text').textContent = `Você errou! O número era ${secretNumber}`;      
      document.getElementById('tries').textContent = `Você tem ${tries} tentativas.`;
      break;
    } 
  }
  if(tries == 0){
    document.getElementById('text').textContent = `O jogo acabou! Você fez ${pontos} ponto(s)!`;
    document.getElementById('tries').textContent = `Você não tem mais tentativas.`;
    document.getElementById('userNumber').disabled = true;
    document.getElementById('guessButton').disabled = true;
  }
}