import { it, expect, describe } from 'vitest';
import { transformToNumber, cleanNumbers } from './numbers';

describe('transformToNumber()', () =>
{
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
});

describe('cleanNumbers()', () =>
{
    it('should return an array of number values if an array of string number values is provided', () =>{
        const numberValuues = [ '1', '2' ];
    
        const cleanedNumbers = cleanNumbers(numberValuues);
    
        // expect(cleanedNumbers[0]).toBeTypeOf('number');
        expect(cleanedNumbers).toEqual([1,2]);
    });

    it('should throw an error if an array with at least one empty string is provided', () =>{
        const numberValuues = [ '', '1' ];
    
        const cleanedFn = () => cleanNumbers(numberValuues);
    
        expect(cleanedFn).toThrow();
    });
});
