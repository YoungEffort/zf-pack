#! /usr/bin/env node

let path = require('path');

let config = require(path.resolve('webpack.config.js'));

let Compiler = require('../lib/Compiler.js');
let compiler = new Compiler(config)
compiler.hooks.entryOption.call()
compiler.run()