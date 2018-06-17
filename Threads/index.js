const cluster = require('cluster');

// is the file being eecuted in master mode?
if (cluster.isMaster) {
    cluster.fork(); // causes index.js to be executed again but in child mode.
    cluster.fork();
    // cluster.fork();
    // cluster.fork();
} else {

    // child mode, excute like sever mode.
    const express = require('express');
    const app = express();
    const crypto = require('crypto');

    app.get('/', (req, res) => {
        crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
            res.send('Hi there!');
        });
    });

    app.get('/fast', (req, res) => {
        res.send('This was fast!.');
    });

    app.listen(3000);

}