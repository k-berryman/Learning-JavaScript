const express = require('express');

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}));

app.get('/', function(request, response) {
  response.send('homepage')
})

// if multiple of same route, it choses the first
app.get('/dogs', function(request, response) {
  response.send('dogs go bark')
})

app.get('/cats', function(request, response) {
  response.send('')
})

app.post('/cats', function(request, response) {
  response.send('you made a cat')
})

const team = {
  boss: "Brian",
  intern: "Kaitlin",
  pm: "Judy",
  se: "Bryan"
}

// params is an object on req
// all parameters become keys
// values are always strings
// '/team/:position/:favecolor' has multiple params
app.get('/team/:position', function(req, res) {
  console.log(req.params)
  const pos = req.params.position;
  const teammember = team[pos];
  res.send(teammember);
})

// '/search?term=slow&type=rabbit'
// { term: 'slow', type: 'rabbit' }
// search page. term is slow and type is rabbit
app.get('/search', function(req, res) {
  console.log(req.query)
  const {term = 'adjective', type = 'noun'} = req.query;
  res.send(`search page. term is ${term} and type is ${type}`)
})

// headers constructs an obj
app.get('/headersss', function(req, res) {
  console.log(req.rawHeaders)
  console.log(req.headers)
  res.send(req.headers)
})

// figuring out user language
app.get('/show-lang', function(req, res) {
  const lang = req.headers['accept-language']
  res.send(`Your language preference is ${lang}`)
})

app.post('/register', function(req, res) {
  // fills req.body with sent JSON or urlencoded (see top)
  res.send(req.body)
  // res.send(`Welcome, ${req.body.username}`)
})


// takes a port and then runs the function
// should be at the bottom of the file
app.listen(3000, function() {
  console.log('Server running on port 3000');
});
