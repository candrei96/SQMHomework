const assert = require('assert');
const {  sumOfTwoNumbers } = require('./func.js');

describe('sumOfTwoNumbers', function () {
    it('should return four', function () {
        assert.equal(sumOfTwoNumbers(2,2), 4);
    });
});
