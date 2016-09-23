#!/usr/bin/env node

var fs = require('fs')
var debug = require('debug')('weide')

var argv = process.argv;
argv.shift();

var file_path = __dirname;
var current_path = process.cwd();

var home = '/Applications/微信web开发者工具.app/'


if(undefined !== process.env.WECHAT_IDE) {
  home = process.env.WECHAT_IDE + '/'
}


function _cp (src, dest) {
  debug('FROM ' + src)
  debug('TO ' + dest)
  
  fs.createReadStream(src).pipe(fs.createWriteStream(dest))
}


var src =  __dirname + '/asset/package.json'
var dest =  home + 'Contents/Resources/app.nw/package.json'

_cp (src, dest)
