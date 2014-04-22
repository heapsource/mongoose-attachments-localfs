var attachments = require('../lib/localfs-provider.js');

var os     = require('os');
var path   = require('path');
var should = require('should');

var Bar = require(path.resolve(__dirname, './fixtures/StubSchemaWithOverriddenDirectory'));
var Foo = require(path.resolve(__dirname, './fixtures/StubSchema'));

describe('testing localfs-provider', function() {
  it('should move an attachment to a specified directory', function (done) {
    var foo = new Foo();
    foo.attach('image', {
      path: path.resolve(__dirname, './fixtures/node_js_logo.png')
    }, function(error) {
      if(error) throw error;

      foo.image.image.path.should.startWith(os.tmpdir());

      done();
    });
  });

  it('should use a separate directory for temporary files', function (done) {
    var bar = new Bar();
    bar.attach('image', {
      path: path.resolve(__dirname, './fixtures/node_js_logo.png')
    }, function(error) {
      if(error) throw error;

      // the Bar schema uses os.tmpdir() for imagemagick temporary files and
      // os.tmpdir() + '/localfs-test' for the output directory
      path.dirname(bar.image.image.path).should.not.equal(os.tmpdir());

      done();
    });
  });
});
