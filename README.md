# Interactive Productivity Dashboard

This project is a web-based dashboard built for WEB-115 to demonstrate interactive JavaScript features.

## TODO: Future Enhancements

- [x] Add a metric conversion tool.
- [ ] Integrate a task list with array storage.
- [ ] Add JavaScript logic for a live clock.
- [x] Add a weekly task goal calculator

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
