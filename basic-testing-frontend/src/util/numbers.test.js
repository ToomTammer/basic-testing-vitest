import { it, expect } from 'vitest';
import { transformToNumber } from './numbers';

it('should transform a string number to a number of type nymber', () =>{
    const input = "1";

    const result = transformToNumber(input);

    expect(result).toBe(1).toBeTypeOf('number');
});

it('should yield NaN for non-transformable value', () =>{
    const input = "invalid";

    const result = transformToNumber(input);

    expect(result).toBeNaN();
});