const path = require('path')
const fs = require('fs')

// 读取目录内容
const dir = require('./dir')

// 读取文件内容
const file = require('./file')

async function content(ctx, fullStaticPath) {
  const realPath = path.join(fullStaticPath, ctx.url)

  const exist = fs.existsSync(realPath)

  let content = ''

  if (!exist) {
    content = '404 Not Found!'
  } else {
    const stat = fs.statSync(realPath)

    content = stat.isDirectory() ? dir(ctx.url, realPath) : file(realPath)
  }

  return content
}

module.exports = content
