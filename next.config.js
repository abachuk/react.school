const fetch = require('isomorphic-fetch')

module.exports = {
  async exportPathMap () {
    // combine the map of post pages with the home
    return Object.assign({}, [], {
      '/': { page: '/' }
    })
  }
}
