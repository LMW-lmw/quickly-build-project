const path = require('path')
const fs = require('fs')
const ejs = require('ejs')
const compile = (template, data) => {
  const templatePath = `../template/${template}`
  const compilePath = path.resolve(__dirname, templatePath)
  return new Promise((resolve, reject) => {
    ejs.renderFile(compilePath, { data }, {}, (err, res) => {
      if (err) {
        console.log(err)
        reject(err)
        return
      } else {
        resolve(res)
      }
    })
  })
}
const writeFiles = (path, content) => {
  return fs.promises.writeFile(path, content)
}
const createDir = (createPath) => {
  if (fs.existsSync(createPath)) {
    return true
  } else {
    if (createDir(path.dirname(createPath))) {
      fs.mkdirSync(createPath)
      return true
    }
  }
}
module.exports = {
  compile,
  writeFiles,
  createDir,
}
