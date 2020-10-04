const path = require("path");

const withPlugins = require("next-compose-plugins");

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});

module.exports = withPlugins([
  [
    withMDX,
    {
      pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
    },
  ],
]);
