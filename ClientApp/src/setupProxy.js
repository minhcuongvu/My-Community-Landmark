const { createProxyMiddleware } = require('http-proxy-middleware');
const { env } = require('process');

/* eslint-disable no-nested-ternary */
const target = env.ASPNETCORE_HTTPS_PORT ? `https://localhost:${env.ASPNETCORE_HTTPS_PORT}`
  : env.ASPNETCORE_URLS ? env.ASPNETCORE_URLS.split(';')[0] : 'http://localhost:7456';
/* eslint-enable no-param-reassign */

const context = [
  '/weatherforecast',
];

module.exports = function (app) {
  const appProxy = createProxyMiddleware(context, {
    target,
    secure: false,
    headers: {
      Connection: 'Keep-Alive',
    },
  });

  app.use(appProxy);
};
