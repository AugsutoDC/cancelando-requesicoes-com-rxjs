const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'access-control-allow-headers': '*'
    });

    const matchURL = /^\/response\/(.+)\/delay\/(\d+)\/?$/;
    //http://localhost:5200/response/{data: 'teste}/delay/3000

    if (!matchURL.test(req?.url)) return res.end();

    const [, response, delay] = matchURL.exec(req.url);
    const jsonResponse = decodeURIComponent(response);

    setTimeout(() => {
        res.write(jsonResponse);
        res.end();
    }, +delay);
}).listen(5200);