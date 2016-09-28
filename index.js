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

var config = {
  "asdebug.js" : "/Resources/app.nw/app/dist/weapp/appservice/asdebug.js",
  "createstep.js": "/Resources/app.nw/app/dist/components/create/createstep.js", 
  "projectStores.js":"/Resources/app.nw/app/dist/stroes/projectStores.js"
  // "windowStores.js": "/Resources/app.nw/app/dist/stroes/windowStores.js" 
}

function _cp (src, dest) {
  debug('FROM ' + src)
  debug('TO ' + dest)
  
  fs.createReadStream(src).pipe(fs.createWriteStream(dest))
}

function main () {
  for (var k in config) {
    var src = file_path  + '/vendor/' + k;
    var dest = home + 'Contents' + config[k]
  
    _cp (src, dest)
  }
  
  
  var src =  __dirname + '/asset/package.json'
  var dest =  home + 'Contents/Resources/app.nw/package.json'

  _cp (src, dest)

  console.log('complete!')
}

main()
