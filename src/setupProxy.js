const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    // 代理可以配置多个
    app.use(
        '/ajax',
        createProxyMiddleware({
            target: 'https://i.maoyan.com',
            changeOrigin: true,
        })
    );
};