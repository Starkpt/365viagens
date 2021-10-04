const path = require('path')

module.exports = {
  reactStrictMode: true,
  basePath:'/public',
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}