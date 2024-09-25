const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://localhost:4000/api",
      changeOrigin: true,
      secure: false      
    })
  );
};


//Discuss
//This is useful in development to avoid issues related to CORS when the frontend and backend are running on different ports.
//Frontend: http://localhost:3000
//Backend: connected to db & listening on port 4000