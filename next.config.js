// const { PHASE_PRODUCTION_SERVER } =
//   process.env.NODE_ENV === 'development'
//     ? {}
//     : !process.env.NOW_REGION
//       ? require('next/constants')
//       : require('next-server/constants');

// module.exports = (phase, { defaultConfig }) => {
//   if (phase === PHASE_PRODUCTION_SERVER) {
//     // Config used to run in production.
//     return {};
//   }

//   // Put the require call here.
//   const withCSS = require('@zeit/next-css');

//   return withCSS();
// };

// next.config.js
const withCSS = require('@zeit/next-css');

module.exports = withCSS();