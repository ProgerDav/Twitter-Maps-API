const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const http = require('http').Server(app);
const twitter = require("./twitter");
const port = 3000;
const io = require('socket.io')(http);
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json

app.use(bodyParser.json());

app.use(express.static('public'));

app.use('/static', express.static('public'))

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', {});
});

app.post("/location", (req, res) => {
    const loc = req.body.loc;
    twitter.push_query(loc, () => {
        // 
    });
})
// io.on("connection", socket => {
//     console.log("new user connected");
// })


http.listen(port, () => console.log(`Example app listening on port ${port}!`));
