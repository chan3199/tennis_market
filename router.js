function route(pathname, handle, response, productId) {
    console.log(`pathname: ${pathname}`);
  
    if (typeof handle[pathname] === "function") {
      handle[pathname](response,productId);
    } else {
      response.writeHead(404, { "Content-Type": "text/plain" });
      response.write("not found !");
      response.end();
    }
  }
  
  exports.route = route;