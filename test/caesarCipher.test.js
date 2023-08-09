import caesarCipher from '../script/caesarCipher';

test('Wraps from z to a', () => {
  expect(caesarCipher('Z', 2)).toEqual('B');
});

test('Works with different cases', () => {
  expect(caesarCipher('mooniiDev', 5)).toEqual('rttsnnIja');
});

test('Works with punctuation', () => {
  expect(caesarCipher('Hello, World!', 5)).toEqual('Mjqqt, Btwqi!');
});