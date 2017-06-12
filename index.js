var requestPayload = require('request-payload')
var parse = require('fast-json-parse')
var isStream = require('is-stream')
var eos = require('end-of-stream')
var assert = require('assert')

module.exports = jsonStreamToObject

function jsonStreamToObject (source, opts, cb) {
  if (!cb) {
    cb = opts
    opts = {}
  }

  assert.ok(isStream(source), 'json-stream-to-object: source should be an instance of Stream')
  assert.equal(typeof opts, 'object', 'json-stream-to-object: opts should be type object')
  assert.equal(typeof cb, 'function', 'json-stream-to-object: cb should be type function')

  eos(source, function (err) {
    if (err) return cb(err)   // size limit was probably reached
  })

  requestPayload(source, opts, function (buf) {
    var res = parse(buf)
    if (res.err) return cb(res.err)
    cb(null, res.value)
  })
}
