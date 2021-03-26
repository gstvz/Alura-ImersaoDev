const convertButton = document.getElementById('convertButton');

function celsiusToFahrenheit () {
  let celsius = document.getElementById('celsiusInput').value.replace(',', '.');
  let fahrenheit = (celsius * 9 / 5) + 32;
  document.getElementById('result').innerText = `A temperatura em Fahrenheit é: ${fahrenheit.toFixed(2)} ºF`
}