const path = require("path");
const homepageJS = path.resolve(__dirname, "src/pages/homepage");
const stickynavpageJS = path.resolve(__dirname, "src/pages/stickynavpage");
const accordionpageJS = path.resolve(__dirname, "src/pages/accordionpage");
const nav2JS = path.resolve(__dirname, "src/pages/nav2");
const carouselJS =  path.resolve(__dirname, "src/pages/carousel");


module.exports = {
  entry: {
    homepage: homepageJS,
    stickynavpage: stickynavpageJS,
    accordionpage: accordionpageJS,
    nav2: nav2JS,
    carousel: carouselJS
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name]/[name].js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      }
    ]
  }
};
