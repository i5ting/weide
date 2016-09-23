var beautify = require('js-beautify').js_beautify;
var fs = require('fs');
var path = require('path');
var dirw = require('dirw');


var src = './Contents'

var dirw = require('dirw');

dirw.walk(src, 0, handleFile);

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
      console.log(beautify(data, { indent_size: 2 }));
    
      var new_data = beautify(data, { indent_size: 2 })
    
      fs.writeFileSync(file_path + '.old', data, 'utf8', function(){
      
      });
      
      fs.writeFileSync(file_path, new_data, 'utf8', function(){
      
      });

  });
}

// _beautify('./leftviewActions.js')
