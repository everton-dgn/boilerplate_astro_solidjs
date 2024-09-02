const idObj = new Proxy(
  {},
  {
    get: function getter(_target, key) {
      return key === '__esModule' ? false : key
    }
  }
)

module.exports = idObj
