const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    createProxyMiddleware({
      target: "https://gh-trending-api.herokuapp.com",
      changeOrigin: true,
    })
  );
};
