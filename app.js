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
  [express.static(join(__dirname, '/public'))],
  [function (req, res, next) {
    var test = req.query.test
    if (test) {
      res.locals.showTests = true
    }
    next()
  }]
)

app.get('/', (req, res) => {
  res.render('home')
})

app.get('/about', (req, res) => {
  res.render('about', {
    fortune: fortunes(),
    pageTestScript: '/qa/test-about.js'
  })
})

app.get('/tours/hood-river', (req, res) => {
  res.render('tours/hood-river')
})
app.get('/tours/request-group-rate', (req, res) => {
  res.render('tours/request-group-rate')
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
