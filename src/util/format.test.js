import { assert } from 'chai';
import { isValidNorwegianAccountNumber, accountFormatter, isEmpty } from './format';

const validNorwegianAccountNumber = '42000231376';
const inValidNorwegianAccountNumber = '42000231377';

describe('accountFormatter', () => {
  it('should return unformatted int for int value', () => {
    assert.strictEqual(accountFormatter(12345678912), 12345678912);
  });
  it('should return empty string for empty string', () => {
    assert.strictEqual(accountFormatter(''), '');
  });
  it('should return formatted norwegian account number', () => {
    assert.strictEqual(accountFormatter(validNorwegianAccountNumber), '4200 02 31376');
  });
});

describe('valid norwegian account number', () => {
  it('should return false for empty string', () => {
    assert.isFalse(isValidNorwegianAccountNumber(''));
  });
  it('should return false for value with less than 11 chars', () => {
    assert.isFalse(isValidNorwegianAccountNumber('123456789'));
  });
  it('should return formatted account number', () => {
    assert.strictEqual(accountFormatter(validNorwegianAccountNumber), '4200 02 31376');
  });
  it('should return false for invalid norwegian account number', () => {
    assert.isFalse(isValidNorwegianAccountNumber(inValidNorwegianAccountNumber));
  });
});

describe('test amount is empty', () => {
  it('should test that amount is empty', () => {
    assert.isTrue(isEmpty(undefined));
    assert.isTrue(isEmpty(null));
    assert.isFalse(isEmpty(0));
    assert.isFalse(isEmpty(123));
  });
});
