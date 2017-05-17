# gitdate.js

[![Greenkeeper badge](https://badges.greenkeeper.io/WindomZ/gitdate.js.svg)](https://greenkeeper.io/)

[![Build Status](https://travis-ci.org/WindomZ/gitdate.js.svg?branch=master)](https://travis-ci.org/WindomZ/gitdate.js)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![Dependency](https://david-dm.org/WindomZ/gitdate.js.svg)](https://david-dm.org/WindomZ/gitdate.js)
[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com/)

> After `commit` and before `push`, the last commit date is just a variable.

[![NPM](https://nodei.co/npm/gitdate.png)](https://nodei.co/npm/gitdate/)

[![gitdate](https://img.shields.io/npm/v/gitdate.svg)](https://www.npmjs.com/package/gitdate)
![status](https://img.shields.io/badge/status-stable-green.svg)

## Installation

```bash
npm install -g gitdate
```

## Usage
```bash
$ gitdate -h

  Usage: gitdate [options] <date>

  git commit date trick.

  Options:

    -h, --help             output usage information
    -V, --version          output the version number
    -m --minute <minutes>  date offset +/-number of minutes
    -H --hour <hours>      date offset +/-number of hours
    -d --day <days>        date offset +/-number of days
    -M --month <months>    date offset +/-number of months
    -y --year <years>      date offset +/-number of years
    --debug                debug mode, such as print error tracks

  Argument:
    <date>        two formats: '15:04' or 'now'
```

## Example
```bash
$ gitdate 8:22                       # 08:22 today
$ gitdate 13:45 -d -1                # 13:45 yesterday
$ gitdate now                        # now, current time
$ gitdate now -H -3 -m 5             # now, subtract 3 hours, and plus 5 minutes
$ gitdate now -M -1 -d -2 -H 3 -m 5  # now, subtract 1 month 2 days, and plus 3 hours 5 minutes
```

## Related

[WindomZ/gitdate](https://github.com/WindomZ/gitdate) - Written in Go

## License

The [MIT License](https://github.com/WindomZ/gitdate.js/blob/dev/LICENSE)
