var chai = require('chai');
var assert = chai.assert;
var Web3 = require('../index');
var web3 = new Web3();
var FakeHttpProvider = require('./helpers/FakeHttpProvider');

var method = 'peerCount';

var tests = [{
    result: '0xf',
    formattedResult: 15,
    call: 'net_'+ method
}];

describe('web3.net', () => {
    describe(method, () => {
        tests.forEach((test, index) => {
            it('property test: ' + index, () => {
                
                // given
                var provider = new FakeHttpProvider();
                web3.setProvider(provider);
                provider.injectResult(test.result);
                provider.injectValidation(payload => {
                    assert.equal(payload.jsonrpc, '2.0');
                    assert.equal(payload.method, test.call);
                    assert.deepEqual(payload.params, []);
                });

                // when 
                var result = web3.net[method];
                
                // then
                assert.deepEqual(test.formattedResult, result);
            });
        });
    });
});

