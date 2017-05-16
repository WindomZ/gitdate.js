/**
 * Created by WindomZ on 17-5-16.
 */
'use strict'

const moment = require('moment')

function getDate (date, offsetYear = 0, offsetMonth = 0, offsetDay = 0, offsetHour = 0, offsetMinute = 0) {
  if (!date) { throw new TypeError('"date" argument must not be empty') }

  let results = date.match(/\d{1,2}:\d{1,2}/i)
  if (!results || !results.length) { throw new TypeError('"date" argument should be formatted like: "15:04" or "now".') }

  let m = moment(results[0], ['hh:mm', 'h:mm', 'hh:m', 'h:m'])
  if (offsetYear) m.add(offsetYear, 'years')
  if (offsetMonth) m.add(offsetMonth, 'months')
  if (offsetDay) m.add(offsetDay, 'days')
  if (offsetHour) m.add(offsetHour, 'hours')
  if (offsetMinute) m.add(offsetMinute, 'minutes')

  return m.unix()
}

module.exports = getDate
