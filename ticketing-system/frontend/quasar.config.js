/*
 * This file runs in a Node context (it's NOT transpiled by Babel), so use only
 * the ES6 features that are supported by your Node version.
 */

const { configure } = require("quasar/wrappers");

module.exports = configure(function (ctx) {
  return {
    // https://v2.quasar.dev/quasar-cli-webpack/boot-files
    boot: ["axios"],

    // https://v2.quasar.dev/quasar-cli-webpack/css
    css: ["app.css"],

    // https://github.com/quasarframework/quasar/tree/dev/extras
    extras: ["roboto-font", "material-icons"],

    // Full list of options: https://v2.quasar.dev/quasar-cli-webpack/quasar-conf-js#Property%3A-framework
    framework: {
      config: {
        notify: {},
        loading: {},
        loadingBar: {},
        dark: false,
      },
      plugins: ["Notify", "Loading", "LoadingBar"],
    },

    // https://v2.quasar.dev/quasar-cli-webpack/app-urls
    build: {
      vueRouterMode: "hash",
      env: {
        API_URL: ctx.dev ? "http://localhost:8000" : "https://api.example.com",
      },
    },

    devServer: {
      port: 3000,
      open: true,
    },
  };
});
