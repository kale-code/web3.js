var chai = require('chai');
var utils = require('../lib/utils/utils.js');
var assert = chai.assert;

var tests = [
    { func: () => {}, is: true},
    { func: new Function(), is: true},
    { func: 'function', is: false},
    { func: {}, is: false}
];

describe('lib/utils/utils', () => {
    describe('isFunction', () => {
        tests.forEach(test => {
            it('shoud test if value ' + test.func + ' is function: ' + test.is, () => {
                assert.equal(utils.isFunction(test.func), test.is);
            });
        });   
    });
});

