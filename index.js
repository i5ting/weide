#!/usr/bin/env node

var fs = require('fs')

var argv = process.argv;
argv.shift();

var file_path = __dirname;
var current_path = process.cwd();

var d = '/Applications/微信web开发者工具0.9.app/'
var home = process.env.WECHAT || d;

var c = {
  "asdebug.js" : "/Resources/app.nw/app/dist/weapp/appservice/asdebug.js  "    ,
  "createstep.js": "/Resources/app.nw/app/dist/components/create/createstep.js"   , 
  "projectStores.js":"/Resources/app.nw/app/dist/stroes/projectStores.js",
  "windowStores.js": "/Resources/app.nw/app/dist/stroes/windowStores.js" 
}


function cp (src, dest) {
  fs.createReadStream(src).pipe(fs.createWriteStream(dest))
}


for (var k in c) {
  var src = file_path  + '/vendor/' + k;
  console.log(src)
  
  var dest = home + 'Contents' +c[k]
  
    console.log(dest)
}