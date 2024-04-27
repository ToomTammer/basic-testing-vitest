import { it, expect, vi } from 'vitest';
import { promises as fs } from 'fs';

import writeData from './io';
import { join } from 'path';

//if we create __mocks__ file code will auto find out our file and work it like fs.js
vi.mock('fs');
///custom mocking Logic
vi.mock('path', () => {
    return {
        default : {
            join : (...args) =>{
                return args[args.length - 1];
            }
        }
    }
});

it('should execute the writeFile method', () =>{
    const testData = 'Test';
    const testFilename = 'test.txt';

    writeData(testData, testFilename);
    
    // return expect(writeData(testData, testFilename)).resolves.toBeUndefined();
    // expect(fs.writeFile).toBeCalled();
    expect(fs.writeFile).toBeCalledWith(testFilename, testData);
});

it('should return a promise that resolves to no value if called correctly', () =>{
    const testData = 'Test';
    const testFilename = 'test.txt';

    writeData(testData, testFilename);
    
    return expect(writeData(testData, testFilename)).resolves.toBeUndefined();
    ///toBeUndefined(); because we won't get any value
    // expect(fs.writeFile).toBeCalled();
    // expect(fs.writeFile).toBeCalledWith(testFilename, testData);
});
///it will not creat real file in data folder beause we mock module

