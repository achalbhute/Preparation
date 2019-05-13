let idGenerator = require('../utils/utils').idGenerator;

class blog {
    constructor (title, content) {
        const {value} = idGenerator.next();
        this._id = value;
        this._title = title;
        this._content = content;
    }

    setTitle (title) {
        this._title = title;
    }

    setContent (content) {
        this._content = content;
    }

    get title () {
        return this._title;
    }
}

module.exports = blog;