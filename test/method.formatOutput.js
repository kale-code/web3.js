var chai = require('chai');
var assert = chai.assert;
var Method = require('../lib/web3/method');

describe('lib/web3/method', () => {
    describe('formatOutput', () => {
        it('should format plain output', () => {
            
            // given
            var formatter = args => args.map(arg => arg + '*');
            
            var method = new Method({
                outputFormatter: formatter
            });
            var args = ['1','2','3'];
            var expectedArgs = ['1*', '2*', '3*'];

            // when
            var result = method.formatOutput(args);

            // then
            assert.deepEqual(result, expectedArgs);
        });
        
        it('should do nothing if there is no formatter', () => {

            // given
            var method = new Method({});
            var args = [1,2,3];

            // when
            var result = method.formatOutput(args);
            
            // then
            assert.deepEqual(result, args);
        });
    });
});

