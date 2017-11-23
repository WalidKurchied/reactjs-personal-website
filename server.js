const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.static('./'));
app.use(express.static('src'));

// const indexPath = path.join(__dirname, 'public/index.html');

app.listen(PORT, function() {
    console.log("hello world");
});

// app.get('/', function(req, res) { 
//     res.sendFile(indexPath);
// });