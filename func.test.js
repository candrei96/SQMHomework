const assert = require('assert');
const { isInputString, sumOfTwoNumbers } = require('./func.js');

describe('isInputString', function () {
    it('should return true for strings', function () {
        assert.equal(isInputString('aaa'), true);
    });

    it('should return false for numbers', function () {
        assert.equal(isInputString(23), false);
    });
});

describe('sumOfTwoNumbers', function () {
    it('should return four', function () {
        assert.equal(sumOfTwoNumbers(2,2), 4);
    });
});