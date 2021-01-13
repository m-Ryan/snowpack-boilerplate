/** @type {import("snowpack").SnowpackUserConfig } */
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
        /* see "Plugin Options" below */
      },
    ],
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    // {"match": "routes", "src": ".*", "dest": "/index.html"},
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
