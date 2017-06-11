var parse = require('fast-json-parse')
var concat = require('concat-stream')
var isStream = require('is-stream')
var assert = require('assert')
var pump = require('pump')

module.exports = jsonStreamToObject

function jsonStreamToObject (source, cb) {
  assert.ok(isStream(source), 'json-stream-to-object: source should be an instance of Stream')
  assert.equal(typeof cb, 'function', 'json-stream-to-object: cb should be type function')

  var sink = concat({ encoding: 'string' }, function (str) {
    var res = parse(str)
    if (res.err) return cb(res.err)
    cb(null, res.value)
  })

  pump(source, sink, function (err) {
    if (err) return cb(err)
  })
}
