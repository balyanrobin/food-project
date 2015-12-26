var loopback = require('loopback');
var boot = require('loopback-boot');
var path = require('path');


var app = module.exports = loopback();
var apiRoute = require('../client/public/controllers/apiRoute');


app.set('views', path.join(__dirname, '../client/views'));
app.engine('html', require('hogan-express'));
app.set('view engine', 'html');

// app.use('/webapp', loopback.static(path.join(__dirname + '../client/angular')));

app.use('/assets', loopback.static(path.join(__dirname, '../client/public')));

//console.log(path.join(__dirname, '../client/angular'));

// app.use('/', loopback.static(path.join(__dirname, '../client/views')));

app.get('/', function(req, res){
  //res.send('hello world');
  res.render('index');
});

apiRoute(app);




app.start = function() {
  // start the web server
  return app.listen(function() {
    app.emit('started');
    var baseUrl = app.get('url').replace(/\/$/, '');
    console.log('Web server listening at: %s', baseUrl);
    if (app.get('loopback-component-explorer')) {
      var explorerPath = app.get('loopback-component-explorer').mountPath;
      console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
    }
  });
};

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function(err) {
  if (err) throw err;

  // start the server if `$ node server.js`
  if (require.main === module)
    app.start();
});
