const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const path = require('path')
const middlewares = jsonServer.defaults({
  static: path.join(__dirname, './build')
})

const PORT = process.env.PORT || 3001

server.use(middlewares)

server.get('/healthcheck', (req, res) => {
  res.send('ok')
})

server.use(jsonServer.bodyParser)
server.use(router)

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`server started on port ${PORT}`)
})