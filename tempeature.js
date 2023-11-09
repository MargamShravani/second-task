document.getElementById("convert").addEventListener("click", function () {
    // Get input values
    const celsius = parseFloat(document.getElementById("celsius").value);
    const fahrenheit = parseFloat(document.getElementById("fahrenheit").value);

    // Check which input is empty and perform the conversion
    if (!isNaN(celsius)) {
        // Convert from Celsius to Fahrenheit
        const resultFahrenheit = (celsius * 9/5) + 32;
        document.getElementById("fahrenheit").value = resultFahrenheit.toFixed(2);
    } else if (!isNaN(fahrenheit)) {
        // Convert from Fahrenheit to Celsius
        const resultCelsius = (fahrenheit - 32) * 5/9;
        document.getElementById("celsius").value = resultCelsius.toFixed(2);
    } else {
        alert("Please enter a valid temperature value.");
    }
});
