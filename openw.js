#!/usr/bin/env node

var fs = require('fs')
var debug = require('debug')('weide')
var exec = require('child_process').exec;

var argv = process.argv;
argv.shift();

var file_path = __dirname;
var current_path = process.cwd();

var home = '/Applications/微信web开发者工具.app/'

if(undefined !== process.env.WECHAT_IDE) {
  home = process.env.WECHAT_IDE + '/'
}

exec('open ' + home, function(error, stdout, stderr) {
    if (error !== null) {
        console.log('exec error: ' + error);
    }
});
