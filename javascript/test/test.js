var assert = require('assert');
describe('Array', function ()
{
    describe('#indexOf()', function () 
    {
        it('should return -1 when the value is not present', function()
        {
            assert.equal([1,2,3].indexOf(4), -1);
        });
        it('should otherwise return the index where the value is stored', function()
        {
            assert.equal([33,22,88,23].indexOf(22), 1);
            assert.equal([33,22,88,23].indexOf(33), 0);
            assert.equal([33,22,88,23].indexOf(88), 2);
            assert.equal([33,22,88,23].indexOf(23), 3);
        });
    });
});
