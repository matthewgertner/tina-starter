const withSvgr = require("next-svgr");

module.exports = withSvgr({
  target: 'serverless',
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/home",
      },
    ];
  },
});
