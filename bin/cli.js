#! /usr/bin/env node
const { program } = require('commander')
const myHelp = require('../libs/core/myhelp')
const myCommander = require('../libs/core/mycommander')

myHelp(program)
myCommander(program)
program.parse(process.argv)