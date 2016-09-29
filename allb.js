#!/usr/bin/env node

var beautify = require('js-beautify').js_beautify;
var fs = require('fs');
var path = require('path');
var dirw = require('dirw');

var home = '/Applications/微信web开发者工具.app/'

if(undefined !== process.env.WECHAT_IDE) {
  home = process.env.WECHAT_IDE + '/'
}

var dirw = require('dirw');

dirw.walk(home, 0, handleFile);

function handleFile(file_path, floor) {

  if (fs.statSync(file_path).isFile() && path.extname(file_path) =='.js') {
    _beautify(file_path);
  }
}



function _beautify(file_path) {
  // console.log('js file= ' + file_path)
  
  fs.readFile(file_path, 'utf8', function (err, data) {
    // console.log(data)
      if (err) {
        console.log('js file= ' + file_path)
        console.log('js file= ' + err)
          throw err;
      }
      if (/node_modules/.test(file_path)) {
        console.log('stringify')
        return
      }
      // console.log(beautify(data, { indent_size: 2 }));
    
      var new_data = beautify(data, { indent_size: 2 })
    
      fs.writeFileSync(file_path + '.old', data, 'utf8', function(){
      
      });
      
      fs.writeFileSync(file_path, new_data, 'utf8', function(){
      
      });

  });
}

// _beautify('./leftviewActions.js')
