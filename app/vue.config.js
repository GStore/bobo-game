const path = require("path");

module.exports = {
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
    config.resolve.alias
        .set('@', path.join(__dirname, "ui/src"));
}
};
