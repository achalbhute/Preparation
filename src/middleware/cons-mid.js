const mid = function (req, res, next) {
    console.log('middleware ');
    if(req && req.body) {
        console.log('req : ', req.body);
    }
    next();
};

module.exports = mid;