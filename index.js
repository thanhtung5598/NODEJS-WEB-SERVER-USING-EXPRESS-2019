const express = require("express");
const app = express();

const port = 3000;

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.set('view engine', 'pug')
app.set('views', './views') // Started with file views

users =  [
    { id: 1, name: 'thanh' },
    { id: 2, name: 'Linh' }
]

app.get('/', (req, res) => {
    res.render('index');
})

app.get('/users', (req, res) => {
    res.render('users/user', {
        users
    })
})

app.get('/users/search',(req,res)=>{
    let name = req.query.name;
    let matchName = users.filter((user)=>{
        return user.name.indexOf(name) !== -1;
    })
    res.render('users/user', {
        users:matchName
    })
})

app.get('/users/create',(req,res)=>{
    res.render('users/create');
})

app.post('/users/create',(req,res)=>{
    users.push(req.body)
    res.redirect('/users')
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});