http = require 'http'
fs = require 'fs'

server = http.createServer (req, res) ->
  res.setHeader 'Access-Control-Allow-Origin', '*'
  url_parts = url.parse(req.url)
  path = url_parts.pathname
  fs.readFile './index.html', 'utf8', (err, data) ->
    if err
      res.writeHead '500'
    else
      res.writeHead '200', 'Content-Type': 'text/html'
      res.write data
      res.end()

server.listen 9999
