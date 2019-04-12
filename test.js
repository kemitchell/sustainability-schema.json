var assert = require('assert')
var fs = require('fs')
var glob = require('glob')
var tv4 = require('tv4')

var schema = require('./')

glob.sync('examples/valid/*.json').forEach(function (file) {
  var data = JSON.parse(fs.readFileSync(file))
  var result = tv4.validateMultiple(data, schema)
  assert.deepStrictEqual(result.errors, [])
})

glob.sync('examples/invalid/*.json').forEach(function (file) {
  var data = JSON.parse(fs.readFileSync(file))
  var result = tv4.validateMultiple(data, schema)
  assert.notDeepStrictEqual(result.errors, [])
})
