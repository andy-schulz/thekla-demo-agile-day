Feature: As a Mathematician i want to use a calculator to calculate a large number of calculations,
  so that

  Scenario Outline: Do multiple calculations
    Given Steven is using a WebCalculator
    When He adds the numbers <firstNumber> and <secondNumber>
    Then He should get the result <result>
    Examples:
      | firstNumber | secondNumber | result |
      | 10          | 5            | 15     |
      | 10          | -5           | 5      |