const express = require('express');
const ExpressErr = require('./ExpressError');

const app = express();

// app.use
// intro to middleware
// runs on every single incoming request, but nothing else happens...
// call next(), now it moves on
app.use(express.json())
app.use(function(req, res, next) {
  console.log("new request!!!")
  next();
})

const DESSERT = [
  {name: 'chocolate', qty: 12, price: 1.25},
  {name: 'caramel', qty: 24, price: .25},
]

app.get('/candies', function(req, res, next) {
  try {
    const candy = DESSERT.find(u.name === req.params.name);
    if(!name) throw ExpressErr("Invalid name", 404);
    return res.send({user});
  } catch(e) {
    next(e) // the next app.use
  }
})

// no other request match
// generic
app.use(req, res, next) {
  const e = ExpressErr("no page found", 404);
  next(e)
}


// error handler, 4 params
// right before app.listen
app.use(function(error, req, res, next) {
  console.log(error.msg);
  res.status(error.status).send(error.msg);
})




// takes a port and then runs the function
// should be at the bottom of the file
app.listen(3000, function() {
  console.log('Server running on port 3000');
});
