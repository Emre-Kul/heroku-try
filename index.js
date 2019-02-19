const express = require('express');
const app = express();

app.listen(process.env.PORT | 3333, () => {
    
    app.get('/', function (req, res) {
        res.send('hello world')
      })

});
