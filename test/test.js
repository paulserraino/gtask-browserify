var assert = require('assert');
var fs = require('fs');

describe('Task', function () {
    it('should build source', function (done) {
        fs.readdir('./test', function (error, files) {
            assert(!error);
            assert(files.indexOf('bundle.js') > -1, ' create bundle.js')
            assert(files.indexOf('bundle.js.map') > -1, ' create bundle.js.map')
            done();
        })
    });
});
