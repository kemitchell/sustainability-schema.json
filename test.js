var AJV = require('ajv')
var assert = require('assert')
var fs = require('fs')
var glob = require('glob')

var schema = require('./')
var ajv = new AJV()

glob.sync('examples/valid/*.json').forEach(function (file) {
  var data = JSON.parse(fs.readFileSync(file))
  ajv.validate(schema, data)
  assert.deepStrictEqual(ajv.errors, null)
})

glob.sync('examples/invalid/*.json').forEach(function (file) {
  var data = JSON.parse(fs.readFileSync(file))
  ajv.validate(schema, data)
  assert.notDeepStrictEqual(ajv.errors, null)
})
