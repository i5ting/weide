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


var exec = require('child_process').exec;
exec('open ' + home, function(error, stdout, stderr) {
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);
    if (error !== null) {
        console.log('exec error: ' + error);
    }
});