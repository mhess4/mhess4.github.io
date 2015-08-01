var fahrenheitInput;
var celsiusInput;

document.getElementById("clickCelsius").onclick = calculateCelsius;
document.getElementById("clickFahrenheit").onclick = calculateFahrenheit;

function calculateCelsius() {
	fahrenheitInput = document.getElementById("fahrenheitInput").value;
	
	var celsiusOutput = (fahrenheitInput - 32) * 5 / 9;
	document.getElementById("celsiusOutput").innerHTML = celsiusOutput;

}

function calculateFahrenheit() {
	celsiusInput = document.getElementById("celsiusInput").value;

	var fahrenheitOutput = (celsiusInput * 9) / 5 + 32;
	document.getElementById("fahrenheitOutput").innerHTML = fahrenheitOutput;

}