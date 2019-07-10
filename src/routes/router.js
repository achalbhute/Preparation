let express = require('express');
let db = require('./../db/blog_db');
let Blog = require('./../models/blog');
const router = express.Router();

router.put('/:id', (req, res) => {
    const {title, content} = req.body;
    const blog = new Blog(title, content);
    let id = req.params.id;
    db[id] = blog;
    res.json(db);
});



module.exports  = router;