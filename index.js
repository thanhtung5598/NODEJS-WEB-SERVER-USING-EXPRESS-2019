const express = require("express");
const cookieParser = require('cookie-parser')

const app = express();
const port = 3000;

const userRoutes = require('./routes/users.route')

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


app.set('view engine', 'pug')
app.set('views', './views') // Started with file views
app.use(cookieParser());

app.get('/', (req, res) => {
    res.render('index');
})

app.use('/users',userRoutes);
app.use(express.static('public'));



app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});