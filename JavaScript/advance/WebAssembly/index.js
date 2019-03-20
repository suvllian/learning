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

  // 允许来自所有域名请求
  ctx.set("Access-Control-Allow-Origin", "*");

  // 设置所允许的HTTP请求方法
  ctx.set("Access-Control-Allow-Methods", "OPTIONS, GET, PUT, POST, DELETE");

  // 字段是必需的。它也是一个逗号分隔的字符串，表明服务器支持的所有头信息字段.
  ctx.set("Access-Control-Allow-Headers", "x-requested-with, accept, origin, content-type");
  // 服务器收到请求以后，检查了Origin、Access-Control-Request-Method和Access-Control-Request-Headers字段以后，确认允许跨源请求，就可以做出回应。


  // 该字段可选。它的值是一个布尔值，表示是否允许发送Cookie。默认情况下，Cookie不包括在CORS请求之中。
  // 当设置成允许请求携带cookie时，需要保证"Access-Control-Allow-Origin"是服务器有的域名，而不能是"*";
  ctx.set("Access-Control-Allow-Credentials", true);


  // 配置上下文类型
  if (_mime) {
    ctx.type = _mime
  }

  // 图片输出二进制，其他输出文本
  if (_mime && (_mime.includes('image/') || _mime.includes('wasm'))) {
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