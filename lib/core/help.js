const program = require('commander')

const helpOptions = () => {
  program.option('-d, --dest <dest>', '获取目标文件夹, 示例: lmw -d /src/view')
}

module.exports = helpOptions
