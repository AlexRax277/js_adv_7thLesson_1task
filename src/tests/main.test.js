import Validator from '../index';

test.each([
  ['Abrikos_papiros-24b', true],
  ['Abrikos_papiros-2441b', false],
  ['Abrikos__papiros-24b', false],
  ['Abrikos_papiros--24b', false],
  ['-abrikos_papiros-24b', false],
  ['Abrikos_papiros-24', false],
  ['Abriкos_papiros-24b', false],
  ['A-b', false],
])('basic test', (inputName, expectedResult) => {
  const name = new Validator(inputName);
  expect(name.validateUsername()).toBe(expectedResult);
});
