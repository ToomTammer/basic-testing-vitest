import fs from 'fs';
import path from 'path';

import { it, expect, vi, beforeEach } from 'vitest';
import { Window } from 'happy-dom';

import { showError } from './dom';

const htmlDocPath = path.join(process.cwd(), 'index.html');
//process.cwd() is being used to get the current working directory.
//path.join() is then used to create a file path by joining the current working directory with the filename

///Reading HTML content from a file
const htmlDocumentContent = fs.readFileSync(htmlDocPath).toString();

///Creating a virtual DOM environment
const window = new Window();
const document = window.document;

///Stubbing the global document object:
//Stubbing is a technique used in software testing to replace parts of the system 
//with simulated objects, often referred to as "stubs" or "mocks".
vi.stubGlobal('document', document);

beforeEach(() =>{
    //for reseting virtual Dom for reset document when next any test.
    document.body.innerHTML ='';
    ///Writing HTML content to the virtual document
    document.write(htmlDocumentContent); 
});

it('should add an error paragraph to the id="errors element', () => {
    showError('Test');

    const errorsEl = document.getElementById('errors');
    const errorParagraph = errorsEl.firstElementChild;

    expect(errorParagraph).not.toBeNull();
});

it('should not contain an error paragraph initially', () => {
    const errorsEl = document.getElementById('errors');
    const errorParagraph = errorsEl.firstElementChild;

    expect(errorParagraph).toBeNull();
});

it('should output the provided message in error paragraph', () => {
    const testErrorMessage = "Test";

    showError(testErrorMessage);

    const errorsEl = document.getElementById('errors');
    const errorParagraph = errorsEl.firstElementChild;

    expect(errorParagraph.textContent).toBe(testErrorMessage);
})