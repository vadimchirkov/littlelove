
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['thzyFRZZGzLjrFwNF9beRx'] // An array of project ids.
});
module.exports = withPlasmic({
  trailingSlash: true,
  // Your NextJS config.
});
  