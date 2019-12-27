const express = require("express");
const app = express();

const port = 3000;

app.set('view engine', 'pug')
app.set('views', './views') // Started with file views

app.get('/', (req, res) => {
    res.render('index');
})

app.get('/user', (req, res) => {
    res.render('users/user', {
        users: [
            { id: 1, name: 'thanh' },
            { id: 2, name: 'Linh' }
        ]
    })
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});