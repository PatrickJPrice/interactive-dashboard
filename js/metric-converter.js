// Add event listener to handle form submission
document.getElementById("converter-form").addEventListener("submit", function (event) {
    // Prevent default form submission / page reload
    event.preventDefault();

    // Get values from the input field
    var inputValue = parseFloat(document.getElementById("conversion-input").value);
    var outputElement = document.getElementById("converter-output");

    // Capture selected option value using getElementsByTagName as required by assignment prompt
    var selectElement = document.getElementById("conversion-type");
    var selectedIndex = selectElement.selectedIndex;
    var conversionType = document.getElementsByTagName("option")[selectedIndex].value;

    // Validate if the input is a valid number
    if (isNaN(inputValue)) {
        outputElement.innerHTML = "Please enter a valid number.";
        return;
    }

    var result = 0;
    var outputText = "";

    // Perform conversion using switch statement
    switch (conversionType) {
        case "inch-to-cm":
            result = inputValue * 2.54;
            outputText = inputValue + " inches is " + result.toFixed(2) + " centimeters.";
            break;
        case "cm-to-inch":
            result = inputValue / 2.54;
            outputText = inputValue + " centimeters is " + result.toFixed(2) + " inches.";
            break;
        case "foot-to-m":
            result = inputValue * 0.3048;
            outputText = inputValue + " feet is " + result.toFixed(2) + " meters.";
            break;
        case "m-to-foot":
            result = inputValue / 0.3048;
            outputText = inputValue + " meters is " + result.toFixed(2) + " feet.";
            break;
        case "yard-to-m":
            result = inputValue * 0.9144;
            outputText = inputValue + " yards is " + result.toFixed(2) + " meters.";
            break;
        case "m-to-yard":
            result = inputValue / 0.9144;
            outputText = inputValue + " meters is " + result.toFixed(2) + " yards.";
            break;
        case "mile-to-km":
            result = inputValue * 1.60934;
            outputText = inputValue + " miles is " + result.toFixed(2) + " kilometers.";
            break;
        case "km-to-mile":
            result = inputValue / 1.60934;
            outputText = inputValue + " kilometers is " + result.toFixed(2) + " miles.";
            break;
        default:
            outputText = "Invalid selection.";
    }

    // Display result using innerHTML as required
    outputElement.innerHTML = outputText;
});