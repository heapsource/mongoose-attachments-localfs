var mockery = require('mockery');
var assert =  require('assert');

describe('localfs-provider', function() {
  it('require works', function() {
    var provider = require('../lib/localfs-provider.js');
    assert(provider);
  });
});