const app = require('./config/server');

require('./app/routes/form')(app);

// starting server
app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));    
});