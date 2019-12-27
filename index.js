const express = require("express");
const shortid = require('shortid');
// Lowdb Start
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('db.json');
const db = low(adapter);
// Lowdb End

const app = express();

const port = 3000;

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.set('view engine', 'pug')
app.set('views', './views') // Started with file views

// Set some defaults (required if your JSON file is empty)
db.defaults({ users: [] })
    .write();

app.get('/', (req, res) => {
    res.render('index');
})

app.get('/users', (req, res) => {
    res.render('users/user', {
        users: db.get('users').value()
    })
})

app.get('/users/search', (req, res) => {
    let name = req.query.name;
    let matchName = db.get('users').value().filter((user) => {
        return user.name.indexOf(name) !== -1;
    })
    res.render('users/user', {
        users: matchName
    })
})

app.get('/users/create', (req, res) => {
    res.render('users/create');
})

app.get('/users/:id', (req, res) => {
    let id = req.params.id;
    let user = db.get('users').find({ id: id }).value();
    res.render('users/view', {
        user: user
    })
})

app.post('/users/create', (req, res) => {
    req.body.id=shortid.generate()
    db.get('users').push(req.body).write();
    res.redirect('/users');
})



app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});