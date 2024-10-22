# String Calculator TDD Kata

## Overview

This project/assesment implements a String Calculator as part of a Test-Driven Development (TDD) Kata. The goal is to create a calculator that can add numbers provided as a string, following specific rules and requirements.

## Requirements

The String Calculator should:

1. Handle an empty string (return 0)
2. Handle a single number (return the number)
3. Handle two numbers (return their sum)
4. Handle multiple amount of numbers
5. Handle new lines between numbers (instead of commas)
6. Support different delimiters
7. Throw an exception for negative numbers
8. Throw an exception for multiple negative numbers
9. Ignore numbers bigger than 1000
10. Handle delimiters of any length
11. Allow multiple delimiters
12. Handle multiple delimiters with length longer than one character

## Implementation

The project is implemented in JavaScript. It consists of:

- `src/calculator/stringCalculator.js`: Contains the main `add` function that performs the calculation
- `src/calculator/stringCalculator.test.js`: Contains Jest test cases for all requirements
- `src/utils/index.js`: Contains utility methods used in the project

## Key Features

- TDD (Test-Driven Development) approach
- Dynamic delimiter handling
- Support for custom delimiters of any length
- Multiple delimiter support
- Negative number detection
- Ignoring numbers over 1000
- Comprehensive error handling

## Running the Project

To run the tests:

```bash
npm test