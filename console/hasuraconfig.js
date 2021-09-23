module.exports = {
  hmrPort: parseInt(process.env.PORT, 10) + 1 || 3001,
  hmrHost: process.env.HOST || 'localhost',
  appHost: 'localhost',
  port: { development: 3001, production: 3001 },
  assetsPrefix: '/rstatic',
  webpackPrefix: '/rstatic/dist/',
  appPrefix: '/rapp',
};
