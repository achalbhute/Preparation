let express = require('express');
let db = require('./db/blog_db');
let bodyParser = require('body-parser');
let mid = require('./middleware/cons-mid');
let Blog = require('./models/blog');

const app = express();
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());
// app.use(mid);

const PORT = 8000 ;

app.get('/', (req, res) =>{
    res.json(db);
});

app.get('/:id', (req, res) => {
    let id = req.params.id;
    res.json(db[id]);
});

app.post('/', mid, (req, res) => {
    const {title , content } = req.body;
    const blog = new Blog(title, content);
    db[blog._id] = blog;
    res.json({
        success : true,
        msg : 'succuessfully added'
    })
});

app.delete('/', (req, res) => {
    const id = req.body.id;
    delete db[id];
    res.json(db);
});

app.patch('/:id', (req, res) => {
    let content = req.body.content;
    let id = req.params.id;
    db[id].content = content;
    res.json(db);
});

app.listen(PORT, () =>{
    console.log(`Server started on ${PORT}`);
});