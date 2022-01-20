const Koa = require("koa")
const bodyParser = require("koa-bodyparser")
const Router = require("koa-router")

const todos = require("./todos")

const app = new Koa()
app.use(bodyParser())

const router = new Router()
router.get("/", async (ctx, next) => {
    ctx.body = { msg: "Hello World!" }
    await next()
})

app
    .use(router.routes())
    .use(todos.routes())

module.exports = app
