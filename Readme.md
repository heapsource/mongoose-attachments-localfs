NOTE: this is Letsface's fork of heapsource project with some customized changes

[![Build Status](http://letsface.dnsd.me:8080/buildStatus/icon?job=mongoose-attachments-localfs)](http://letsface.dnsd.me:8080/view/All/job/mongoose-attachments-localfs/)

## mongoose-attachments-localfs

Simple File System Storage Provider for [mongoose-attachments](https://github.com/firebaseco/mongoose-attachments).

### Installation

    $ npm install mongoose-attachments-localfs

### Usage

The library will register automatically with `mongoose-attachments` by performing `require` and
return a reference to the mongoose-attachments plugin:

    var attachments = require('mongoose-attachments-localfs');

For further instructions check [mongoose-attachments](https://github.com/firebaseco/mongoose-attachments).

### Provider Name

    localfs

### Example

The following snippet extends PhotoSchema to use mongoose-attachments and locate all the uploads in public directory, perfectly suited for [Express.js](http://expressjs.com) applications:

    var path = require('path');
    var attachments = require('mongoose-attachments-localfs');
    
    MySchema.plugin(attachments, {
        directory: '/absolute/path/to/public/images',
        storage : {
            providerName: 'localfs'
        },
        properties: {
            image: {
                styles: {
                    original: {
                        // keep the original file
                    },
                    thumb: {
                        thumbnail: '100x100^',
                        gravity: 'center',
                        extent: '100x100',
                        '$format': 'jpg'
                    },
                    detail: {
                        resize: '400x400>',
                        '$format': 'jpg'
                    }
                }
            }
        }
    });
    MySchema.virtual('detail_img').get(function() {
        return path.join('detail', path.basename(this.image.detail.path));
    });
    MySchema.virtual('thumb_img').get(function() {
        return path.join('thumb', path.basename(this.image.thumb.path));
    });

The URL to the images would then be `http://<your host>/<mount path>/images` prepended to the value of `MyModel.detail_img` and `MyModel.thumb_img`.

For other configurations check [mongoose-attachments](https://github.com/firebaseco/mongoose-attachments).

### More Details

If you define a style called `thumb` and `directory` points to `<web-app-dir>/public/images`
When storing data into the schema, the thumbnail created by mongoose-attachemnts is stored as `<web-app-dir>/public/images/thumb/<ObjectID>-thumb.<format>`.
The absolute path to the image is stored in `Model.image.<type>.path`.

### Contributors

* [Firebase.co](https://github.com/firebaseco)
* [Chantal Ackermann](https://github.com/nuarhu)

## License (MIT)

Copyright (c) 2012-2013 IT Agenten - http://www.it-agenten.com

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

