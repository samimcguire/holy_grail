const express = require('express');
const app     = express();

//serve static files from public directory
app.use(express.static('public'));

app.get('/', function(req, res) {
    res.json({message: "Hello from Express!"})
})

app.listen(3000, function(){
    console.log('Running on port: 3000')
})