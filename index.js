const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('db.json')

const db = low(adapter)

db.defaults({ data: []}).write()
app.use(bodyParser);

app.listen(process.env.PORT || 3333, () => {
    
    app.get('/', function (req, res) {
        res.send('hello world')
    })
    app.post('/set', function (req, res) {
        db.get('data').push({header: req.headers, params: req.params, body: req.body}).write();
        res.send('ok').status(200);
    })
    app.get('/get', function (req, res) {
        res.send(db.get('data').value()).status(200);
    })
    

});
