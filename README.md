# json-stream-to-object [![stability][0]][1]
[![npm version][2]][3] [![build status][4]][5]
[![downloads][8]][9] [![js-standard-style][10]][11]

Parse a JSON stream into an object.

## Usage
```js
var toObject = require('json-stream-to-object')
var http = require('http')

http.createServer(function (req, res) {
  toObject(req, function (err, obj) {
    if (err) throw err
    console.log('json parsed', obj)
  })
}).listen(8080)
```

## API
### `toObject(stream, cb(err, object))`
Parse a stream of JSON to an object.

## License
[MIT](https://tldrlegal.com/license/mit-license)

[0]: https://img.shields.io/badge/stability-experimental-orange.svg?style=flat-square
[1]: https://nodejs.org/api/documentation.html#documentation_stability_index
[2]: https://img.shields.io/npm/v/json-stream-to-object.svg?style=flat-square
[3]: https://npmjs.org/package/json-stream-to-object
[4]: https://img.shields.io/travis/yoshuawuyts/json-stream-to-object/master.svg?style=flat-square
[5]: https://travis-ci.org/yoshuawuyts/json-stream-to-object
[6]: https://img.shields.io/codecov/c/github/yoshuawuyts/json-stream-to-object/master.svg?style=flat-square
[7]: https://codecov.io/github/yoshuawuyts/json-stream-to-object
[8]: http://img.shields.io/npm/dm/json-stream-to-object.svg?style=flat-square
[9]: https://npmjs.org/package/json-stream-to-object
[10]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[11]: https://github.com/feross/standard
