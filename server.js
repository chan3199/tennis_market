let http = require('http');
let url = require('url');

function start(route, handle) {
    function onRequest(request, response) {
        let pathname = url.parse(request.url).pathname;
        
        if (pathname === "/favicon.ico") {
            response.writeHead(204);
            response.end();
            return;
        }
        route(pathname, handle, response);
    }


    http.createServer(onRequest).listen(7777)
    // localhost:8888
}

exports.start = start;