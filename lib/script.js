/**
 * Created by WindomZ on 17-5-16.
 */
'use strict'

const script = require('./script.json')

function getContent (url) {
  return new Promise((resolve, reject) => {
    const lib = url.startsWith('https') ? require('https') : require('http')
    const request = lib.get(url, (response) => {
      if (response.statusCode < 200 || response.statusCode > 299) {
        reject(new Error('Failed to load page, status code: ' + response.statusCode))
      }
      const body = []
      response.on('data', (chunk) => body.push(chunk))
      response.on('end', () => resolve(body.join('')))
    })
    request.on('error', (err) => reject(err))
  })
}

function getScript () {
  return getContent(script.url)
}

module.exports = getScript

module.exports.get = getContent
