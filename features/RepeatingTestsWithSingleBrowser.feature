Feature: As a Mathematician i want to use a calculator to calculate a large number of calculations,
  so that

  Background:
    Given Steven is using a WebCalculator

  @Focus
  Scenario Outline: Do multiple calculations
    When He adds the numbers <firstNumber> and <secondNumber>
    Then He should get the result <result>
    Examples:
      | firstNumber | secondNumber | result |
      | 11          | 5            | 16     |
      | 11          | -5           | 6      |