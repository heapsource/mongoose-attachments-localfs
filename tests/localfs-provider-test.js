var attachments = require('../lib/localfs-provider.js');

var mockery = require('mockery');
var assert =  require('assert');


var path = require('path');
var temp = require('temp');
var fs = require('fs');

temp.track();

describe('testing localfs-provider', function() {
  beforeEach(function(done) {    
    var self = this;
    temp.mkdir('output', function(err, dir) {
      self.dir = dir;
      self.source = path.join(__dirname, '1x1-pixel.png');
      self.test_file_path = path.join(self.dir, '1x1-pixel.png');
      fs.createReadStream(self.source).pipe(fs.createWriteStream(self.test_file_path)).on('close', done);
    });
  })

	it('path', function(done) {
    var self = this;
    var imageProperty = {};
    var obj = { 
      image: imageProperty,
      add: function(op) {
        imageProperty[op] = op;
        obj[op] = op;
      }, 
      methods: {}
    }

    var a = new attachments(obj, {
        directory: self.dir,
        storage : {
            providerName: 'localfs'
        },
        properties: {
            image: {
                styles: {
                    original: {
                        // keep the original file
                    }
                }
            }
        }
    });
    obj.methods.attach.call(obj, 'image', {path: self.test_file_path}, done);
	});

  afterEach(function() {
    temp.cleanup();
  });
});
