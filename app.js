var express = require('express')
var app = express()

app.set('port', 3000)

app.use(function (req, res) {
  res.type('text/plain')
  res.status(404)
  res.send('404 | Not Found')
})
app.use(function (req, res) {
  res.type('text/plain')
  res.status(500)
  res.send('500 | Server Error')
})

app.listen(app.get('port'), function () {
  console.log('Server Running @ http://localhost:' + app.get('port'))
})
