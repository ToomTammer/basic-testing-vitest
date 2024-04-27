Even though the test worked as expected in the previous lecture, you should actually return the promise assertion in your tests:

it('should generate a token value', () => {
  const testUserEmail = 'test@test.com';
 
  return expect(generateTokenPromise(testUserEmail)).resolves.toBeDefined();
});

This guarantees that Vitest / Jest wait for the promise to be resolved.

You don't need to return when using async / await (since a function annotated with async returns a promise implicitly).
---------------------
