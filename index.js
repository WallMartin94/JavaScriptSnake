const port = process.env.PORT || 3000;

// Import the express module
const express = require('express');

// Create a web server (app) using express 
const app = express();

app.use(express.static('frontend'));


// express.json is built in Express middleware
// needed to be able to read a request body 
// (for POST / PUT / PATCH - request)
app.use(express.json({ limit: '100MB' }));

// Start the web server at port 3000
app.listen(port, () =>
  console.log('Listening on http://localhost:' + port));


const fs = require('fs')
app.post("/api/writeScore",(req,res)=>{

 fs.writeFileSync('./frontend/score.json',JSON.stringify(req.body,null,"  "),"utf-8")

 res.json({OK:true})
})