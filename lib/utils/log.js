const chalk = require('chalk')

const hint = (...info) => {
  console.log(chalk.cyan(info))
}
const success = (...info) => {
  console.log(chalk.green(info))
}
const error = (...info) => {
  console.log(chalk.red(info))
}
const warn = (...info) => {
  console.log(chalk.yellow(info))
}
const clear = () => {
  console.clear()
}

module.exports = {
  hint,
  error,
  clear,
  success,
  warn,
}
