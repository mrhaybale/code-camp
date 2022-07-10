import exp from 'constants';
import { createByeFunction, sayHi, sayHiMultipleTimes } from './+solution'

describe('001 hello world tests', () => {
    describe('sayHi:', function() {
        it('Says hello world when no name given', () => {
            const expected = 'Hello World';

            const actual = sayHi();

            console.log(actual);

            expect(actual).toBe(expected);
        }) 

        it('Says hello World when an empty string is provided', () => {
            const expected = `Hello World`;

            const actual = sayHi('');

            console.log(actual);
            
            expect(actual).toBe(expected);
        }) 

        it('Says hello <name> when a name is provided', () => {
            const expected = `Hello Bob`;

            const actual = sayHi('Bob');

            console.log(actual);
            
            expect(actual).toBe(expected);
        }) 
    })
    


    describe('sayHiMultipleTimes:', function() {
        it('returns empty string when count is zero', () => {
            const expected = ''

            const result = sayHiMultipleTimes(0);
            
            expect(result).toBe(expected);
        })

        it('returns "Hello World"" string when count is 1', () => {
            const expected = '1 Hello World';

            const result = sayHiMultipleTimes(1);

            expect(result).toBe(expected);
        })

        it('returns "Hello World"" string when count is 5', () => {
            const expected = ['1 Hello World','2 Hello World','3 Hello World','4 Hello World','5 Hello World'].join('\n')

            const result = sayHiMultipleTimes(5);
            
            expect(result).toBe(expected);
        })
    })

    describe('createByeFunction:', function() {
        it('returns function that returns "bye for now"', async function() {
            const expected = 'bye for now';
            const fn = createByeFunction();

            const actual = fn();

            expect(actual).toBe(expected);
        })
        
    })
    
})