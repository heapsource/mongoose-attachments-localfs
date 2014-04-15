// Copyright (c) 2012 IT Agenten - http://www.it-agenten.com
// 
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
// 
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
// 
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

var util = require('util');
var LocalfsStorage = require('./localfs-storage');
var attachments = require('mongoose-attachments');
var assert = require('assert');

// create constructor and inherit
function LocalfsStorageAttachments(options) {
  if(options.removePrefix) {
    this.prefix = options.removePrefix;
  }
  attachments.StorageProvider.call(this, options);
}
util.inherits(LocalfsStorageAttachments, attachments.StorageProvider);

LocalfsStorageAttachments.prototype.getUrl = LocalfsStorage.getUrl;
LocalfsStorageAttachments.prototype.createOrReplace = LocalfsStorage.createOrReplace;

// register the File System Storage Provider into the registry
attachments.registerStorageProvider('localfs', LocalfsStorageAttachments);

// export attachments so there is no need for an explicit require of it
module.exports = attachments;
