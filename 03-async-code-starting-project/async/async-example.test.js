import { expect, it } from 'vitest'
import { generateToken, generateTokenPromise} from './async-example.js'

it('should generate  a token value', (done) =>{
    const testUseEmail = 'test@test.com';

    generateToken('test@test.com', (err, token) => {
        try{
            expect(token).toBeDefined();
            // expect(token).toBe(2); // incorrect
            done();
        }catch(err){
            done(err);
        }
        // expect(token).toBe(2);
    });


});

it('should generate  a token value', () =>{
    const testUseEmail = 'test@test.com';

    expect(generateTokenPromise(testUseEmail)).resolves.toBeDefined();

});

it('should generate  a token value', async () =>{
    const testUseEmail = 'test@test.com';

    const token = await generateTokenPromise(testUseEmail)

    expect(token).toBeDefined();

});