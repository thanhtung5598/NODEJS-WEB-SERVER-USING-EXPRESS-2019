require('dotenv').config()

const express = require("express");
const cookieParser = require('cookie-parser')
const csurf = require('csurf')

const app = express();
const port = 3000;

const userRoutes = require('./routes/users.route');
const productRoute = require('./routes/product.route');
const cardRoute = require('./routes/card.router');
const transformRoute = require('./routes/transform.route')

const authenticate = require('./routes/auth.route');
const authMiddleware = require('./middleware/auth.middleware');
const sessionMiddleware = require('./middleware/session.middleware');



app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


app.set('view engine', 'pug')
app.set('views', './views') // Started with file views
app.use(cookieParser(process.env.SESSION_SECRET));
app.use(sessionMiddleware) // use for all program

app.use(csurf({cookie:true}));

app.get('/',(req, res) => {
    res.render('index');
})

app.use('/transform',authMiddleware.requireAuth,transformRoute);
app.use('/users',authMiddleware.requireAuth,userRoutes);
app.use('/auth',authenticate);
app.use('/products',productRoute);
app.use('/card',cardRoute);


app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});