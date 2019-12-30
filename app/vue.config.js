const path = require("path");
let configureAPI;
const devserver = process.env.BUILD==="devserver" || false;

if (devserver) {
   configureAPI = require("./dist/api.js").default;
}

module.exports = {  
  lintOnSave: true,
  outputDir: "./dist/ui",
  configureWebpack: config => {
    if (devserver) {
      config.devServer = {
        before: configureAPI
      }
    }
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
