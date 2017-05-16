#!/usr/bin/env node
/**
 * Created by WindomZ on 17-4-22.
 */
'use strict'

const os = require('os')

require('colors')
const program = require('commander')

const pkg = require('../package.json')
const gitdate = require('../lib/gitdate')

let noArgs = true

program
  .version(pkg.version)
  .description('git commit date trick.')
  .usage('[options] <date>')
  .option('-m --minute <minutes>', 'date offset +/-number of minutes', /^[-0-9]+$/, 0)
  .option('-H --hour <hours>', 'date offset +/-number of hours', /^[-0-9]+$/, 0)
  .option('-d --day <days>', 'date offset +/-number of days', /^[-0-9]+$/, 0)
  .option('-M --month <months>', 'date offset +/-number of months', /^[-0-9]+$/, 0)
  .option('-y --year <years>', 'date offset +/-number of years', /^[-0-9]+$/, 0)
  .option('--debug', 'debug mode, such as print error tracks', null, null)
  .action((date, options) => {
    noArgs = false

    gitdate({
      date: date,
      year: options.year,
      month: options.month,
      day: options.day,
      hour: options.hour,
      minute: options.minute
    }).then(r => process.stdout.write((r ? 'Success!'.green : 'Fail!'.red) + os.EOL))
      .catch(e => console.error(options.debug ? e : e.message))
  })

program.parse(process.argv)

if (noArgs) {
  program.outputHelp()
}
