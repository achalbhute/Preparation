function *idGenerate() {
    let i = 0;
    while(true) {
        yield i;
        i++;
    }
}

module.exports.idGenerator = idGenerate();