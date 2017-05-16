/**
 * Created by WindomZ on 17-5-16.
 */
const test = require('ava')

const script = require('../lib/script')
const get = require('../lib/script').get

test('script pass', async (t) => {
  await get('http://xx/xxx')
    .then(r => {
      t.false(r || r.length > 0)
      t.fail('Should not be pass')
    })
    .catch(err => {
      t.true(err !== null)
      t.pass()
    })

  await get('https://www.baidu.com/xxx')
    .then(r => {
      t.false(r || r.length > 0)
      t.fail('Should not be pass')
    })
    .catch(err => {
      t.true(err !== null)
      t.pass()
    })

  await script()
    .then(r => {
      t.true(r && r.length > 0)
      t.pass()
    })
    .catch(err => t.fail(err))
})
