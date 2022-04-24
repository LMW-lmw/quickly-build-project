const program = require('commander')

const {
  createProject,
  addCpnAction,
  addPageAction,
  addStoreAction,
} = require('./actions')

const createCommands = () => {
  // 创建项目指令
  program
    .command('create <project> [otherArgs...]')
    .description('创建一个vue3项目')
    .action(createProject)
  program
    .command('addcpn <name>')
    .description('创建一个vue组件')
    .action((name) => {
      addCpnAction(name, program.dest || 'src/components')
    })
  program
    .command('addpage <page>')
    .description('创建一个vue页面')
    .action((page) => {
      addPageAction(page, program.dest || `src/views/${page}`)
    })
  program
    .command('addstore <store>')
    .description('创建一个vue页面')
    .action((store) => {
      addStoreAction(store, program.dest || `src/store/modules/${store}`)
    })
}

module.exports = createCommands
