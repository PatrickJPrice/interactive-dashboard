# Interactive Productivity Dashboard

This project is a web-based dashboard built for WEB-115 to demonstrate interactive JavaScript features.

## TODO: Future Enhancements

- [x] Add a metric conversion tool.
- [x] Add a Magic Eight Ball game.
- [ ] Integrate a task list with array storage.
- [ ] Add JavaScript logic for a live clock.
- [x] Add a weekly task goal calculator

## Magic Eight Ball

The Magic Eight Ball feature allows users to type a yes/no question into a form field, click on the Eight Ball image, and view a randomly selected response.

### Features
* **Input Checking:** Validates that a question was entered before running, alerting the user if the input field is empty.
* **Randomized Output:** Uses `Math.random()` and `Math.floor()` to select a random answer from an array and display it inside the white center circle.
* **Reset Button:** Clears and hides the inner circle display when clicked.
* **Add Response Button (Bonus):** Prompts the user to enter a new response to push into the answers array, then logs the new answer and updated array length to the browser console.

## Imperial/Metric Converter

This application provides an interactive tool for converting distance and length measurements between Imperial and Metric units. Users can convert values across inches, feet, yards, miles, centimeters, meters, and kilometers.

### Logic and Pseudocode

```text
START
  GET numeric input_value from form
  GET selected conversion_type from dropdown
  CONVERT input_value to float using parseFloat()

  IF input_value is NOT a valid number THEN
    DISPLAY "Please enter a valid number."
    EXIT
  ENDIF

  SWITCH conversion_type:
    CASE "inch-to-cm":
      result = input_value * 2.54
      output = input_value + " inches is " + result + " centimeters"
    CASE "cm-to-inch":
      result = input_value / 2.54
      output = input_value + " centimeters is " + result + " inches"
    CASE "foot-to-m":
      result = input_value * 0.3048
      output = input_value + " feet is " + result + " meters"
    CASE "m-to-foot":
      result = input_value / 0.3048
      output = input_value + " meters is " + result + " feet"
    CASE "yard-to-m":
      result = input_value * 0.9144
      output = input_value + " yards is " + result + " meters"
    CASE "m-to-yard":
      result = input_value / 0.9144
      output = input_value + " meters is " + result + " yards"
    CASE "mile-to-km":
      result = input_value * 1.60934
      output = input_value + " miles is " + result + " kilometers"
    CASE "km-to-mile":
      result = input_value / 1.60934
      output = input_value + " kilometers is " + result + " miles"
  ENDSWITCH

  WRITE output to result area
END