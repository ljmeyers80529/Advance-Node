const https = require('https');
const start = Date.now();

const page = 'https://www.google.com';

function doRequest() {
    https.request(page, res => {
        res.on('data', () => {});

        res.on('end', () => {
            console.log('1: ', Date.now() - start);
        });
    }).end();
};

doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();