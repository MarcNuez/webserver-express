const express = require('express');

const app = express();

const hbs = require('hbs');


const port = process.env.PORT || 3000;


//middleware
app.use(express.static(__dirname + '/public'));

hbs.registerPartials(__dirname +'/views/partials')
hbs.registerHelper('getYear',() => {
    return new Date().getFullYear();
})
app.set('view engine','hbs');


app.get('/', function(req,res) {
    res.render('home',{
        nombre: 'Marc'
    });
})
app.get('/about', function(req,res) {
    res.render('about');
})

app.listen(3000,() => {
    console.log(`escuchando en el puerto ${port}`);
});