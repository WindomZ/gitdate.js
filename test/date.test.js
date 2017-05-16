/**
 * Created by WindomZ on 17-5-1.
 */
const test = require('ava')

const date = require('../lib/date')

test('date pass', t => {
  t.true(date('08:08') > 0)
  t.true(date('8:08') > 0)
  t.true(date('08:8') > 0)
  t.true(date('8:8') > 0)
  t.true(date('now') > 0)
  t.true(date('Now') > 0)
  t.true(date('NOW') > 0)
  t.true(date('now', 1) > 0)
  t.true(date('now', 1, -1) > 0)
  t.true(date('now', 1, -1, 1) > 0)
  t.true(date('now', 1, -1, 1, -1) > 0)
  t.true(date('now', 1, -1, 1, -1, 1) > 0)
  t.pass()
})

test('date fail', t => {
  try {
    date()
    t.fail('Should not be pass')
  } catch (e) {
    t.pass()
  }
  try {
    date('')
    t.fail('Should not be pass')
  } catch (e) {
    t.pass()
  }
  try {
    date('0808')
    t.fail('Should not be pass')
  } catch (e) {
    t.pass()
  }
  try {
    date('808')
    t.fail('Should not be pass')
  } catch (e) {
    t.pass()
  }
  try {
    date('088')
    t.fail('Should not be pass')
  } catch (e) {
    t.pass()
  }
  try {
    date('88')
    t.fail('Should not be pass')
  } catch (e) {
    t.pass()
  }
})
