var express = require('express');
sinesp = require('sinesp-nodejs');

var app = express();

app.get('/:value', (req, res)=> {
    sinesp.consultaPlaca(req.params.value, (response)=>{
        res.send(response);
    })
})

app.listen(3000);