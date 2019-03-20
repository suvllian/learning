const path = require('path')
const Koa = require('koa')
const content = require('./utils/content')
const mimes = require('./utils/mimes')

const app = new Koa()

const staticRoot = './static'

// 解析资源类型
const parseMime = url => {
  let extname = path.extname(url)

  extname = extname ? extname.slice(1) : 'unknown'

  return mimes[extname]
}

app.use(async (ctx) => {
  // 静态资源根目录
  const fullStaticRoot = path.join(__dirname, staticRoot)
  
  // 获取静态资源
  const _content = await content(ctx, fullStaticRoot)

  // 解析请求内容的类型
  const _mime = parseMime(ctx.url)

  // 配置上下文类型
  if (_mime) {
    ctx.type = _mime
  }

  // 图片输出二进制，其他输出文本
  if (_mime && _mime.indexOf('image/') >= 0) {
    ctx.res.writeHead(200)
    ctx.res.write(_content, 'binary')
    ctx.res.end()
  } else {
    ctx.body = _content
  }
})


app.listen(3000, () => {
  console.log('static-server is starting at port 3000')
})