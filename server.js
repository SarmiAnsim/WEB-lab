const express = require('express')

const app = express();
app.use('/public', express.static('public'))

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/HTML/card.html');
});
let port = 8080;
app.listen(port);
console.log('Сервер стартовал!(http://localhost:' + port + ")");