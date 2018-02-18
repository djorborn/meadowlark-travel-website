var express = require('express')
var app = express()
var join = require('path').join
var handlebars = require('express-handlebars')
  .create({defaultLayout: 'main'})

var fortunes = require('./modules/fortunes')

app.engine('handlebars', handlebars.engine)
app.set('view engine', 'handlebars')
app.set('port', 3000)

app.use(
  [express.static(join(__dirname, '/public'))]
)

app.get('/', (req, res) => {
  res.render('home')
})

app.get('/about', (req, res) => {
  res.render('about', { fortune: fortunes() })
})

app.use(function (req, res) {
  res.type('text/plain')
  res.status(404)
  res.render('404')
})
app.use(function (req, res) {
  res.type('text/plain')
  res.status(500)
  res.render('500')
})

app.listen(app.get('port'), function () {
  console.log('Server Running @ http://localhost:' + app.get('port'))
})
