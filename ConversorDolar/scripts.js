const buttonConverter = document.getElementById('buttonConverter');

function valueConverter () {
  var insertValue = document.getElementById('insertValue').value.replace(',', '.');
  var convertedValue = insertValue * 5.50;
  document.getElementById('resultText').innerText = `O valor em Reais é: R$ ${convertedValue.toFixed(2)}`;
};

buttonConverter.onclick = valueConverter;