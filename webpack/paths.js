const path = require("path");

module.exports = {
  app: path.join(__dirname, "../src"),
  dist: path.join(__dirname, "../dist"),
  appHtml: path.join(__dirname, "../src/index.html"),
  root: path.join(__dirname, ".."),
  favicon: path.join(__dirname, "PATH"), // TODO: set it up.
  inlineIcons: path.join(__dirname, "PATH"),
};
