var assert = require('assert');
var utils = require('../lib/utils/utils.js');

describe('lib/utils/utils', () => {
    describe('toDecimal', () => {
        it('should return the correct value', () => {
            
            assert.equal(utils.toDecimal("0x3e8"), '1000');
            // allow compatiblity
            assert.equal(utils.toDecimal(100000), '100000');
            assert.equal(utils.toDecimal('100000'), '100000');
        });
    });
});
