const Mock = require('mockjs')

const user = Mock.mock({
  id: 1,
  name: '@cname'
});

module.exports = {
  [`GET /user/info`] (req, res) {
    res.json({status: 1, data: {user}})
  },
  [`POST /login`] (req, res) {
    res.json({status: 1, data: {token: '123123'}})
  }
}
