var attachments = require(__dirname + '/../../lib/localfs-provider');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var os = require("os");

var StubSchema = new Schema({
	name: {
		type: String,
		required: true
	}
});

StubSchema.plugin(attachments, {
	directory: os.tmpdir(),
	storage: {
		providerName: 'localfs',
		options: {
			directory: os.tmpdir() + '/localfs-test'
		}
	},
	properties: {
		image: {
			styles: {
				image: {
					'$format': 'jpg'
				}
			}
		}
	}
});

module.exports = mongoose.model('Bar', StubSchema);
