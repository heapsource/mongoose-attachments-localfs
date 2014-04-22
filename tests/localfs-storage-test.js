var assert = require('assert');
var mockery = require('mockery');

describe('localfs-storage', function() {

  beforeEach(function() {
    this.moduleUnderTest = '../lib/localfs-storage.js';
    mockery.registerAllowable(this.moduleUnderTest);
    mockery.enable({ useCleanCache: true });
    mockery.warnOnUnregistered(false);
    this.attachment = {
      path: 'a/b',
      style: {
        name: 'name'
      },
      model: {
        extension: 'jpg'
      }
    };
    this.fake = {
      existsSync: function() { return false; },
      mkdirSync: function(path) {},
      rename: function(filename, path, cb) { cb(); }
    };
  });

  it('does not fail if directory exist', function(done) {
    this.fake.mkdirSync = function(path) {
        var error = new Error();
        error.errno = 47;
        error.code = 'EEXIST';
        error.path = path;
        error.syscall = 'mkdir';
        throw error;
    };

    mockery.registerMock('fs', this.fake);
    var storage = require(this.moduleUnderTest);

    storage.createOrReplace(this.attachment , done);
  });

  it('fails if permission creation error', function() {
    this.fake.mkdirSync = function(path) {
      var error = new Error();
      error.errno = 3;
      error.code = 'EACCES';
      error.path = path;
      error.syscall = 'mkdir';
      throw error;
    };
    mockery.registerMock('fs', this.fake);
    var storage = require(this.moduleUnderTest);
    try {
      storage.createOrReplace(this.attachment);
    } catch(e) {
      assert(e.code === 'EACCES');
    }
  });

  afterEach(function() {
    mockery.disable();
    mockery.deregisterAll();
  });
});
