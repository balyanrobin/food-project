
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = function(app){
    
    app.post('/login', urlencodedParser, function (req, res) {
        if (!req.body) return res.sendStatus(400)
        res.send('welcome, ' + req.body.mail);
        //res.send('welcome, ' + req.body.pass);
        console.log('email, ' + req.body.mail);
        console.log('password, ' + req.body.pass);
    });
    
    app.post('/signup', urlencodedParser, function (req, res) {
        if (!req.body) return res.sendStatus(400)
        res.send('welcome, ' + req.body.mail);
        //res.send('welcome, ' + req.body.pass);
        console.log('user Name, ' + req.body.username);
        console.log('email, ' + req.body.mail);
        console.log('password signup, ' + req.body.inputpassword);
    })
}

