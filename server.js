let http = require('http');
let url = require('url');

function start(route, handle) {
    function onRequest(request, response) {
        let pathname = url.parse(request.url).pathname;
        let queryData = url.parse(request.url, true).query;
        // if (pathname === "/favicon.ico") {
        //     response.writeHead(204);
        //     response.end();
        //     return;
        // }

        route(pathname, handle, response, queryData.productId);
    }


    http.createServer(onRequest).listen(7777)
    // localhost:7777
}

exports.start = start;