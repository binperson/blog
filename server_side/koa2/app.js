const log = require('./utils/log')
const Koa = require('koa')
let router = require('koa-router')()

const koa2RestMongoose = require('./mongo_rest/index')
let models = require('./model/mongo')


const app = new Koa()

app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// response
app.use(ctx => {
  ctx.body = 'Hello Koa'
})

Object.keys(models).forEach(value=>{
  if(value != 'db'){
    koa2RestMongoose(app, router, models[value],'/api');
  }
})

app.listen(3000)

log.debug(`koa2 is running at 3000`)