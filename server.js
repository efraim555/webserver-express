const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers/helpers');

//Port of heroku
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

hbs.registerPartials(__dirname + '/views/partials');
//Express HBS
app.set('view engine', 'hbs');

app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'efraIm'
    });

});

app.get('/about', (req, res) => {
    res.render('about', {
        anio: new Date().getFullYear()
    });
});

app.get('/data', (req, res) => {
    res.send('Hola data ;v');
});

app.listen(port, () => console.log(`Funcionando en el puerto: ${port}`));