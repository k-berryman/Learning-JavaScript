const express = require('express');
const app = express();
app.use(express.json())

const DESSERT = [
  {name: 'chocolate', qty: 12, price: 1.25},
  {name: 'pb', qty: 24, price: .25},
]

app.get('/candies', function(req, res) {
  // res.send determines content type based on what we pass, like JSON or html
  res.send(`${DESSERT}`)
  res.json(DESSERT) // is res.send but always json
})

app.post('/candies', function(req, res) {
  DESSERT.push(req.body);
  res.json(DESSERT)
})

// json not validated for now

// takes a port and then runs the function
// should be at the bottom of the file
app.listen(3000, function() {
  console.log('Server running on port 3000');
});
