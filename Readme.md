## mongoose-attachments-knox

S3 Storage Provider for [mongoose-attachments](https://github.com/firebaseco/mongoose-attachments) backed by [Knox](https://github.com/LearnBoost/knox).

### Installation

    $ npm install mongoose-attachments-knox

### Usage

The library will register automatically with `mongoose-attachments` by performing `require`:

    require('mongoose-attachments-knox')

For further instructions check [mongoose-attachments](https://github.com/firebaseco/mongoose-attachments).

### Provider Configuration
#### Provider Name:

    knox-s3

> Note: This module was the original Amazon S3 provider in `mongoose-attachments`, back then the provider name was just `s3`, it was now renamed to `knox-s3`.

#### Configuration properties

    providerName: 'knox-s3',
    options: {
      key: '<key>',
      secret: '<secret>',
      bucket: '<bucket>'
    }

For other configurations check [mongoose-attachments](https://github.com/firebaseco/mongoose-attachments).

### Contributors

* [Johan Hernandez](https://github.com/thepumpkin1979)
* [Chantal Ackermann](https://github.com/nuarhu)

## License (MIT)

Copyright (c) 2011-2012 Firebase.co - http://firebase.co

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

