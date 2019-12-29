const path = require("path");
const configureAPI = require("./dist/api.js").default;

console.log(configureAPI);

module.exports = {
  devServer: {
    before: configureAPI
  },
  lintOnSave: true,
  outputDir: "./dist/ui",
  configureWebpack: config => {
    Object.assign(config, {
      context: path.join(__dirname, "ui"),
      entry: {
        app: [path.join(__dirname, "ui/src/main.ts")]
      }
    });
  },
  chainWebpack: config => {
    config.resolve.alias.set("@", path.join(__dirname, "ui/src"));
  }
};
