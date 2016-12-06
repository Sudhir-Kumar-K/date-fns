// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var startOfISOYear = require('./')

suite('startOfISOYear', function () {
  benchmark('date-fns', function () {
    return startOfISOYear(this.date)
  })
}, {
  setup: function () {
    this.date = new Date()
  }
})
