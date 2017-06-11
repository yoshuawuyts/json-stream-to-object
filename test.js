var getPort = require('get-server-port')
var http = require('http')
var spok = require('spok')
var tape = require('tape')
var url = require('url')

var toObject = require('./')

tape('parse json', function (assert) {
  assert.plan(3)
  var server = http.createServer(function (req, res) {
    toObject(req, function (err, obj) {
      assert.ifError(err, 'no err parsing')
      spok(assert, obj, {
        foo: 'bar'
      })
      res.end()
    })
  })

  server.listen(function () {
    var port = getPort(server)
    var opts = url.parse('http://localhost:' + port)
    opts.method = 'POST'
    var req = http.request(opts, function (res) {
      assert.equal(res.statusCode, 200, 'status OK')
      server.close()
    })
    req.end(JSON.stringify({ foo: 'bar' }))
  })
})
