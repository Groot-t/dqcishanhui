/*
 * @Descripttion:
 * @Author: fml-frank
 * @Date: 2021-08-25 09:39:13
 * @LastEditors: fml-frank
 * @LastEditTime: 2021-08-25 09:39:59
 */
const getAccessToken = require('./getAccessToken.js')
const rp = require('request-promise')
const env = 'cloud1-7g8693yfd8aaf364'
const callCloudDB = async (ctx, fnName, query = {}) => {
  const ACCESS_TOKEN = await getAccessToken()
  const options = {
    method: 'POST',
    uri: `https://api.weixin.qq.com/tcb/${fnName}?access_token=${ACCESS_TOKEN}`,
    body: {
      query,
      env,
    },
    json: true, // Automatically stringifies the body to JSON
  }

  return await rp(options)
    .then((res) => {
      return res
    })
    .catch(function (err) {
      console.log(err)
    })
}

module.exports = callCloudDB
