const { promisify } = require('util')
const path = require('path')
const fs = require('fs')
const downloadRepo = promisify(require('download-git-repo'))

const repoConfig = require('../config/repo_config')
const { hint, success, warn } = require('../utils/log')
const { spawn } = require('../utils/terminal')
const { compile, writeFiles, createDir } = require('../utils/util')
const createProject = async (project, otherArg) => {
  // 1.提示信息
  hint('创建项目中')
  // 2.clone项目从仓库
  await downloadRepo(repoConfig.vueRepo, project, { clone: true })
  // 执行npm install
  const command = process.platform === 'win32' ? 'npm.cmd' : 'npm'
  await spawn(command, ['install'], { cwd: `./${project}` })
  await spawn(command, ['run', 'serve'], { cwd: `./${project}` })
  success('创建成功')
}

const addCpnAction = async (name, dest) => {
  const writePath = path.resolve(dest, `${name}.vue`)
  fs.promises.stat(writePath).then(
    () => {
      warn('该组件已存在')
    },
    async () => {
      let res = await compile('vue-template.ejs', {
        name: name,
        lowerName: name.toLowerCase(),
      })

      await writeFiles(writePath, res)
      success('创建成功')
    }
  )
}

const addPageAction = async (page, dest) => {
  const writePagePath = path.resolve(dest, `${page}.vue`)
  const writeRoutePath = path.resolve(dest, 'router.js')
  const dirPath = path.resolve(dest)
  fs.promises.stat(writePagePath).then(
    () => {
      warn('页面已存在无需创建')
    },
    async () => {
      let pageRes = await compile('vue-template.ejs', {
        name: page,
        lowerName: page.toLowerCase(),
      })
      const dir = createDir(dirPath)
      if (dir) {
        await writeFiles(writePagePath, pageRes)
        success('页面创建成功')
      }
    }
  )
  fs.promises.stat(writeRoutePath).then(
    () => {
      warn('页面路由已存在无需创建')
    },
    async () => {
      let routerRes = await compile('vue-router.ejs', {
        name: page,
        lowerName: page.toLowerCase(),
      })
      const dir = createDir(dirPath)
      if (dir) {
        await writeFiles(writeRoutePath, routerRes)
        success('路由创建成功')
      }
    }
  )
}

const addStoreAction = async (store, dest) => {
  let storeTemplate = await compile('vue-store.ejs')
  const dirPath = path.resolve(dest)
  const writeStorePath = path.resolve(dest, `index.js`)
  fs.promises.stat(writeStorePath).then(
    () => {
      warn('文件已存在，请删除文件重试')
    },
    async () => {
      const dir = createDir(dirPath)
      if (dir) {
        await writeFiles(writeStorePath, storeTemplate)
        success('创建成功')
      }
    }
  )
}
module.exports = {
  createProject,
  addCpnAction,
  addPageAction,
  addStoreAction,
}
