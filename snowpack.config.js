/** @type {import("snowpack").SnowpackUserConfig } */

const httpProxy = require('http-proxy');
const proxy = httpProxy.createServer({ target: 'http://h5.maocanhua.cn', changeOrigin: true, });

module.exports = {
  mount: {
    public: '/',
    src: '/dist',
  },
  alias: {
    "@/": "./src"
  },
  plugins: [
    '@snowpack/plugin-react-refresh',
    ['@snowpack/plugin-sass',
      {
        compilerOptions: {

        }
      }
    ],
    [
      '@snowpack/plugin-webpack',
      {
        extendConfig: (config) => {

          return config;
        },
      },
    ],
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    {
      src: '/api/.*',
      dest: (req, res) => proxy.web(req, res),
    },
  ],
  optimize: {
    /* Example: Bundle your final build: */
    // "bundle": true,
  },
  packageOptions: {

  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
};
