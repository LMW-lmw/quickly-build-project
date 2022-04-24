#!/usr/bin/env node
const program = require('commander')

const createCommands = require('./lib/core/create')
const helpOptions = require('./lib/core/help')
// 定义显示模块的版本号
program.version(require('./package.json').version)

// 给help增加其他选项
// 创建命令
createCommands()
helpOptions()
// 解析终端指令
program.parse(process.argv)
