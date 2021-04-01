const firstDiv = document.getElementById('first');
const secondDiv = document.getElementById('second');
const thirdDiv = document.getElementById('third');
const fourthDiv = document.getElementById('fourth');
const firstButton = document.getElementById('firstButton');
const secondButton = document.getElementById('secondButton');
const additionButton = document.getElementById('addition');
const subtractionButton = document.getElementById('subtraction');
const multiplicationButton = document.getElementById('multiplication');
const divisionButton = document.getElementById('division');
const textResult = document.getElementById('textResult');
const another = document.getElementById('another');
let result;

function hideFirst(){
  firstDiv.setAttribute('hidden', '');
  secondDiv.removeAttribute('hidden', '');
};

function hideSecond(){
  secondDiv.setAttribute('hidden', '');
  thirdDiv.removeAttribute('hidden', '');
}

function addition () {
  let firstValue = document.getElementById('firstValue').valueAsNumber;
  let secondValue = document.getElementById('secondValue').valueAsNumber;
  result = firstValue + secondValue;
  thirdDiv.setAttribute('hidden', '');
  fourthDiv.removeAttribute('hidden', '');
  textResult.innerHTML = `O resultado é ${result}.`;  
};

function subtraction () {
  let firstValue = document.getElementById('firstValue').valueAsNumber;
  let secondValue = document.getElementById('secondValue').valueAsNumber;
  result = firstValue - secondValue;
  thirdDiv.setAttribute('hidden', '');
  fourthDiv.removeAttribute('hidden', '');
  textResult.innerHTML = `O resultado é ${result}.`;  
};

function multiplication () {
  let firstValue = document.getElementById('firstValue').valueAsNumber;
  let secondValue = document.getElementById('secondValue').valueAsNumber;
  result = firstValue * secondValue;
  thirdDiv.setAttribute('hidden', '');
  fourthDiv.removeAttribute('hidden', '');
  textResult.innerHTML = `O resultado é ${result}.`;  
};

function division () {
  let firstValue = document.getElementById('firstValue').valueAsNumber;
  let secondValue = document.getElementById('secondValue').valueAsNumber;
  result = firstValue / secondValue;
  thirdDiv.setAttribute('hidden', '');
  fourthDiv.removeAttribute('hidden', '');
  textResult.innerHTML = `O resultado é ${result}.`;  
};

function newOperation () {
  fourthDiv.setAttribute('hidden', '');
  firstDiv.removeAttribute('hidden', '');
}