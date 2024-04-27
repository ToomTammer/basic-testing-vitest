import { describe, expect, it } from 'vitest'
import { HttpError, ValidationError } from './errors';

describe('class HttpError', () => {
    it('should contain the provided status code, message and data', () => {
        const testStatus = 1;
        const tetstMessage = 'Test';
        const testData = { key: 'test'};

        const testError = new HttpError(testStatus, tetstMessage, testData);

        expect(testError.statusCode).toBe(testStatus);
        expect(testError.message).toBe(tetstMessage);
        expect(testError.data).toBe(testData);
        
    });

   it('should contain undifined as data if no data is provided ', () => {
        const testStatus = 1;
        const tetstMessage = 'Test';

        const testError = new HttpError(testStatus, tetstMessage);

        expect(testError.statusCode).toBe(testStatus);
        expect(testError.message).toBe(tetstMessage);
        expect(testError.data).not.toBeDefined();
   });
   
})

describe('class ValidationError', () => {
    it('should contain the provided message', () => {
        const tetstMessage = 'test';

        const testError = new ValidationError(tetstMessage);

        expect(testError.message).toBe(tetstMessage);
    })
})