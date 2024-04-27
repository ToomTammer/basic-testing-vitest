import { expect, it } from "vitest";
import { add } from "./math";
// import { test } from 'vitest';

it("should summarize all number value in an array", () => {
  /// Arrange
  const numbers = [1, 2, 3];

  ///Act
  const result = add(numbers);

  ///Assert
  const expectedResult = numbers.reduce((prevVal, curVal) => 
    prevVal + curVal
  , 0);
  
  expect(result).toBe(expectedResult);
});

it('should yield NaN if a least one invalid is provided', () => {
    const input = ["invalid", 1];

    const result = add(input);

    expect(result).toBeNaN;
    
});

it('should yield a correct sum if an array of numeric string value is provided', () => {
    const numbers = ["1", "2"];

    const result = add(numbers);

    const expectedResult = numbers.reduce((prevVal, curVal) => 
    +prevVal + +curVal //add + front variable to a conversion to a real number.
  , 0);
    expect(result).toBe(expectedResult);
    
});

it('should yield 0 if an empty array is provided', () => {
    const numbers = [];

    const result = add(numbers);

    expect(result).toBe(0);
    // expect(result).not.toBe(0);
});

it('should throw an error if no value is passed into the function', () =>{
    const resultFn = () => {
        add();
    };

    expect(resultFn).toThrow(/is not iterable/);
    // expect(resultFn).not.toThrow();
});

it('should throw an error if provided with multiple arguments instead of an array', () => {
    const num1 = 1;
    const num2 = 2;

    const resultFn = () =>{
        add(num1, num2);
    };
    
    expect(resultFn).toThrow(/is not iterable/); // check make sure error is "is not iterable" 
});
