Feature: As a Mathematician I want to use a calculator to add and subtract numbers,
  so that I dont have to do it myself.

  The ADDITION is defined as:
  Other names for Addition are Sum, Plus, Increase, Total
  the numbers to be added together are called the "Addends":

  The SUBTRACTION is defined as:
  Minuend − Subtrahend = Difference.
  Minuend: The number that is to be subtracted from.
  Subtrahend: The number that is to be subtracted.
  Difference: The result of subtracting one number from another.


  ## My Scenarios

  Scenario: Add two positive numbers
    Given Steven is using a WebCalculator
    When He adds the numbers 123 and 345
    Then He should get the result 468

  Scenario: Subtract two numbers from each other
    Given Steven is using a WebCalculator
    When He subtracts number 3 from 6
    Then He should get the result 3