http = require 'http'
fs = require 'fs'
url = require 'url'

renderHTML = (req, res) ->
  path = req.path
  if path = '/'
    path = '/index.html'
  fs.readFile "./views#{path}", 'utf8', (err, data) ->
    if err
      res.writeHead '500'
      res.end()
    else
      res.writeHead '200', 'Content-Type': 'text/html'
      res.write data
      res.end()

renderJS = (req, res) ->
  path = req.path
  fs.readFile "./assets/javascripts#{path}", 'utf8', (err, data) ->
    if err
      res.writeHead '500'
      res.end()
    else
      res.writeHead '200', 'Content-Type': 'text/javascript'
      res.write data
      res.end()

renderCSS = (req, res) ->
  path = req.path
  fs.readFile "./assets/css#{path}", 'utf8', (err, data) ->
    if err
      res.writeHead '500'
      res.end()
    else
      res.writeHead '200', 'Content-Type': 'text/css'
      res.write data
      res.end()

onRequest = (req, res) ->
  res.setHeader 'Access-Control-Allow-Origin', '*'
  url_parts = url.parse(req.url)
  path = url_parts.pathname
  path = '/index.html' if path is '/'
  req.path = path
  router req, res

handler =

router = (req, res) ->
  path = req.path
  type = /\.(html|js|css)$/.exec path
  if type
    switch type[1]
      when 'html'
        renderHTML req, res
      when 'js'
        renderJS req, res
      when 'css'
        renderCSS req, res
      else
        res.writeHead '500'
        res.end()
  else if typeof handler[path] is 'function'
    handler[path] req, res
  else
    res.writeHead '500'
    res.end()

http.createServer(onRequest).listen 9999
