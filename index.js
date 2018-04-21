const express = require('express');
const expressNunjucks = require('express-nunjucks');
const app = express();
const isDev = app.get('env') === 'development';

app.set('views', __dirname + '');

app.use(express.static('static'))

const njk = expressNunjucks(app, {
    watch: isDev,
    noCache: isDev 
});

app.get('/static/*', function(request, response) {
     response.sendFile( __dirname + '/static/' + request.params[0]);
});

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(3636);

