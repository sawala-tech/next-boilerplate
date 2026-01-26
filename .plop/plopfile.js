const { component, restapi } = require('./settings')

module.exports = function (plop) {
  plop.setGenerator('component', component),
  plop.setGenerator('restapi', restapi)
}
