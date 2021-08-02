const express = require('express');

const app = express();

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

// takes a port and then runs the function
// should be at the bottom of the file
app.listen(3000, function() {
  console.log('Server running on port 3000');
});
