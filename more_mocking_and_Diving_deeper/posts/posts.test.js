import { beforeEach, describe, expect, it } from 'vitest'
import { extractPostData } from './posts';

const testTitle = "Test title";
const testContent = "Test content";
let testFormData;

describe('extractPostData()', () => {
    beforeEach(() => {
        testFormData = {
            title : testTitle,
            content : testContent,
            get(indentifier){
                return this[indentifier];
            },
        };
    });

    it('should extract title and contact from the provided form data', () => {
        const data = extractPostData(testFormData);

        expect(data.title).toBe(testTitle);
        expect(data.content).toBe(testContent);
    });
});