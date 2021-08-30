const router = require('koa-router')()
const accessToken = require('../untils/getAccessToken.js')
const env = 'cloud1-7g8693yfd8aaf364'
const rp = require('request-promise')
const dayjs = require('dayjs')
const callCloudDB = require('../untils/callCloudDB')

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2~',
  })
})
// 获取函数
router.get('/list', async (ctx, next) => {
  const access_token = await accessToken()
  const url = `https://api.weixin.qq.com/tcb/invokecloudfunction?access_token=${access_token}&env=${env}&name=Jsreduce`
  const options = {
    method: 'POST',
    url: url,
    body: ctx.request.body,
    json: true,
  }

  const data = await rp(options).then((res) => {
    return JSON.parse(res.resp_data).data
  })

  ctx.body = {
    code: 20000,
    data,
    message: 'list',
  }
})
// 获取捐赠列表
router.get('/order', async (ctx, next) => {
  const access_token = await accessToken()
  const url = `https://api.weixin.qq.com/tcb/databasequery?access_token=${access_token}`
  const options = {
    method: 'POST',
    url: url,
    body: {
      env: env,
      query: `db.collection("order").where({
        mingcheng:'${ctx.request.query.mingcheng}'
      }).limit(200).orderBy("createTime","desc").get()`,
    },
    json: true,
  }

  const data = await rp(options).then((res) => {
    let result = []
    for (let index = 0; index < res.data.length; index++) {
      const element = res.data[index]
      result.push(JSON.parse(element))
    }
    return result
  })

  ctx.body = {
    code: 20000,
    data,
    message: 'order',
  }
})
// 删除捐赠信息
router.get('/del', async (ctx, next) => {
  const access_token = await accessToken()
  const url = `https://api.weixin.qq.com/tcb/databasedelete?access_token=${access_token}`
  const options = {
    method: 'POST',
    url: url,
    body: {
      env: env,
      query: `db.collection("order").doc("${ctx.request.query.id}").remove()`,
    },
    json: true,
  }

  const data = await rp(options).then((res) => {
    return res.data
  })

  ctx.body = {
    code: 20000,
    data,
    message: '删除成功',
  }
})

// 慈善项目添加
router.post('/add', async (ctx, next) => {
  const access_token = await accessToken()
  const url = `https://api.weixin.qq.com/tcb/databaseadd?access_token=${access_token}`
  const options = {
    method: 'POST',
    url: url,
    body: {
      env: env,
      query: `
      db.collection("cashproject").add({
        data:{
          title:'${ctx.request.body.title}',
          subtitle:'${ctx.request.body.subtitle}',
          status:${ctx.request.body.status},
          createTime:'${dayjs(ctx.request.body.date).format('YYYY-MM-DD')}',
          systemTime:'${dayjs(new Date()).format('YYYY-MM-DD HH:mm:ss')}',
          inprogress:${ctx.request.body.inprogress},
          bgImg:'${ctx.request.body.bgImg}',
          content:'${ctx.request.body.content}',
          cashFixed:''
        }
      })  
      `,
    },
    json: true,
  }

  const data = await rp(options).then((res) => {
    return res
  })
  ctx.body = {
    data,
    code: 20000,
    message: '新项目创建成功.',
  }
})
// 慈善项目获取列表
router.get('/json', async (ctx, next) => {
  const access_token = await accessToken()
  const url = `https://api.weixin.qq.com/tcb/databasequery?access_token=${access_token}`
  const options = {
    method: 'POST',
    url: url,
    body: {
      env: env,
      query: 'db.collection("cashproject").orderBy("createTime","desc").get()',
    },
    json: true,
  }

  const data = await rp(options).then((res) => {
    let result = []
    for (let index = 0; index < res.data.length; index++) {
      const element = res.data[index]
      result = result.concat(JSON.parse(element))
    }
    return result
  })
  ctx.body = {
    data,
    code: 20000,
    message: 1,
  }
})
// 慈善项目获取id
router.get('/getId', async (ctx, next) => {
  const access_token = await accessToken()
  const url = `https://api.weixin.qq.com/tcb/databasequery?access_token=${access_token}`
  const options = {
    method: 'POST',
    url: url,
    body: {
      env: env,
      query: `db.collection("cashproject").doc("${ctx.request.query.id}").get()`,
    },
    json: true,
  }

  const data = await rp(options).then((res) => {
    return res.data
  })
  ctx.body = {
    data,
    code: 20000,
    message: 1,
  }
})
// 编辑慈善项目
router.post('/update', async (ctx, next) => {
  const access_token = await accessToken()
  const url = `https://api.weixin.qq.com/tcb/databaseupdate?access_token=${access_token}`
  const options = {
    method: 'POST',
    url: url,
    body: {
      env: env,
      query: `db.collection("cashproject").doc("${ctx.request.body._id}")
      .update({
        data:{
          title:'${ctx.request.body.title}',
          subtitle:'${ctx.request.body.subtitle}',
          content:'${ctx.request.body.content}',
          cashFixed:'${ctx.request.body.cashFixed}',
          inprogress:${ctx.request.body.inprogress},
        }
      })`,
    },
    json: true,
  }

  const data = await rp(options).then((res) => {
    return res
  })
  ctx.body = {
    data,
    code: 20000,
    message: 'update',
  }
})
// 慈善项目删除
router.get('/deleted', async (ctx, next) => {
  const access_token = await accessToken()
  const url = `https://api.weixin.qq.com/tcb/databasedelete?access_token=${access_token}`
  const options = {
    method: 'POST',
    url: url,
    body: {
      env: env,
      query: `db.collection("cashproject").doc("${ctx.request.query.id}").remove()`,
    },
    json: true,
  }

  const data = await rp(options).then((res) => {
    return res.data
  })

  ctx.body = {
    code: 20000,
    data,
    message: '慈善项目删除成功',
  }
})

// 慈善超市
router.get('/supermarket', async (ctx, next) => {
  const access_token = await accessToken()
  const url = `https://api.weixin.qq.com/tcb/databasequery?access_token=${access_token}`
  const options = {
    method: 'POST',
    url: url,
    body: {
      env: env,
      query:
        'db.collection("super_mark").orderBy("createTime","desc").limit(20).get()',
    },
    json: true,
  }

  const data = await rp(options).then((res) => {
    return res.data
  })

  ctx.body = {
    data,
    code: 20000,
    message: 1,
  }
})
// 慈善超市内容获取
router.get('/marketId', async (ctx, next) => {
  const access_token = await accessToken()
  const url = `https://api.weixin.qq.com/tcb/databasequery?access_token=${access_token}`
  const options = {
    method: 'POST',
    url: url,
    body: {
      env: env,
      query: `db.collection("super_mark").doc("${ctx.request.query.id}").get()`,
    },
    json: true,
  }

  const data = await rp(options).then((res) => {
    return res.data
  })
  ctx.body = {
    data,
    code: 20000,
    message: 1,
  }
})
// 慈善超市获取内容后更新
router.post('/market', async (ctx, next) => {
  const access_token = await accessToken()
  const url = `https://api.weixin.qq.com/tcb/databaseupdate?access_token=${access_token}`
  const options = {
    method: 'POST',
    url: url,
    body: {
      env: env,
      query: `db.collection("super_mark").doc('${ctx.request.body._id}')
      .update({
        data:{
          add:'${ctx.request.body.add}',
          title:'${ctx.request.body.title}',
          user:'${ctx.request.body.user}',
          tel:'${ctx.request.body.tel}',
          img:'${ctx.request.body.img}',
          createTime:'${ctx.request.body.createTime}'
        }
      })`,
    },
    json: true,
  }

  const data = await rp(options).then((res) => {
    return res
  })
  ctx.body = {
    data,
    code: 20000,
    message: 'supermarket',
  }
})
// 慈善超市删除
router.get('/marketDel', async (ctx, next) => {
  const access_token = await accessToken()
  const url = `https://api.weixin.qq.com/tcb/databasedelete?access_token=${access_token}`
  const options = {
    method: 'POST',
    url: url,
    body: {
      env: env,
      query: `db.collection("super_mark").doc("${ctx.request.query.id}").remove()`,
    },
    json: true,
  }

  const data = await rp(options).then((res) => {
    return res.data
  })

  ctx.body = {
    code: 20000,
    data,
    message: '慈善超市删除成功',
  }
})
// 慈善超市添加
router.post('/mkupdate', async (ctx, next) => {
  const query = `db.collection('super_mark').add({
    data:{
      title:'${ctx.request.body.title}',
      createTime:'${ctx.request.body.createTime}',
      user:'${ctx.request.body.user}',
      tel:'${ctx.request.body.tel}',
      add:'${ctx.request.body.add}',
      img:'${ctx.request.body.img}',
      daohang:'${ctx.request.body.daohang}',
      bgImg:'${ctx.request.body.bgImg}',
      loaction:{
        address:'${ctx.request.body.address}',
        latitude:${ctx.request.body.latitude},
        longitude:${ctx.request.body.longitude},
        name:'${ctx.request.body.name}',
        sacle:18
      }
    }
  })`

  const res = await callCloudDB(ctx, 'databaseadd', query)
  ctx.body = {
    code: 20000,
    data: res,
    message: '新建慈善超市成功',
  }
})

// 用户信息
router.get('/users', async (ctx, next) => {
  const query = `
  db.collection('users').aggregate()
  .lookup({
    from: 'order',
    localField: '_openid',
    foreignField: '_openid',
    as: 'nlist',
  })

  .sort({
    createTime: -1,
  })
    .end()
  `
  const res = await callCloudDB(ctx, 'databaseaggregate', query)
  let result = []
  for (let index = 0; index < res.data.length; index++) {
    const element = res.data[index]
    result.push(JSON.parse(element))
  }
  ctx.body = {
    code: 20000,
    data: result,
    message: 'userInfo',
  }
})

// 慈善捐物
router.get('/dgoods', async (ctx, next) => {
  const query = `
  db.collection("new-list").where({
    status:${ctx.request.query.status}
  }).orderBy("createTime","desc").limit(20).get()
  `
  const res = await callCloudDB(ctx, 'databasequery', query)
  let result = []
  for (let index = 0; index < res.data.length; index++) {
    const element = res.data[index]
    result.push(JSON.parse(element))
  }
  ctx.body = {
    code: 20000,
    data: result,
    message: '慈善捐物list',
  }
})

router.get('/goodId', async (ctx, next) => {
  const query = `db.collection("new-list").doc('${ctx.request.query.id}').get()`
  const res = await callCloudDB(ctx, 'databasequery', query)
  let result = []
  for (let index = 0; index < res.data.length; index++) {
    const element = res.data[index]
    result.push(JSON.parse(element))
  }
  ctx.body = {
    code: 20000,
    data: result,
    message: '慈善捐物类id',
  }
})

router.post('/goodUpdate', async (ctx, next) => {
  const query = `
  db.collection("new-list").doc('${ctx.request.body._id}').update({
    data:{
      title:'${ctx.request.body.title}',
      subtitle:'${ctx.request.body.subtitle}',
      img:'${ctx.request.body.img}',
      subImg:'${ctx.request.body.subImg}',
      content:'${ctx.request.body.content}',
      createTime:'${ctx.request.body.createTime}',
      auth:${ctx.request.body.auth},
      article:{
        ar_name:'${ctx.request.body.article.ar_name}',
        ar_math:'${ctx.request.body.article.ar_math}',
        ar_obtain:${ctx.request.body.article.ar_obtain},
        ar_lack:${ctx.request.body.article.ar_lack}
      }
    }
  })
  `
  const res = await callCloudDB(ctx, 'databaseupdate', query)

  ctx.body = {
    code: 20000,
    data: res,
    message: '慈善捐物更新',
  }
})

router.post('/newsUpdate', async (ctx, next) => {
  const query = `
  db.collection("new-list").doc('${ctx.request.body._id}').update({
    data:{
      title:'${ctx.request.body.title}',
      subtitle:'${ctx.request.body.subtitle}',
      img:'${ctx.request.body.img}',
      content:'${ctx.request.body.content}',
      createTime:'${dayjs(ctx.request.body.createTime).format('YYYY-MM-DD')}',
    }
  })
  `
  const res = await callCloudDB(ctx, 'databaseupdate', query)

  ctx.body = {
    code: 20000,
    data: res,
    message: '慈善捐物更新',
  }
})

router.get('/goodel', async (ctx, next) => {
  const query = `db.collection("new-list").doc('${ctx.request.query.id}').remove()`
  const res = await callCloudDB(ctx, 'databasedelete', query)

  ctx.body = {
    code: 20000,
    data: res,
    message: '删除成功！',
  }
})

router.post('/goodAdd', async (ctx, next) => {
  const query = `
  db.collection("new-list").add({
    data:{
      title:'${ctx.request.body.title}',
      subtitle:'${ctx.request.body.subtitle}',
      img:'${ctx.request.body.img}',
      subImg:'${ctx.request.body.subImg}',
      content:'${ctx.request.body.content}',
      createTime:'${dayjs(ctx.request.body.createTime).format('YYYY-MM-DD')}',
      systemTime:'${dayjs(new Date()).format('YYYY-MM-DD HH:mm:ss')}',
      auth:${ctx.request.body.auth},
      article:{
        ar_name:'${ctx.request.body.article.ar_name}',
        ar_math:'${ctx.request.body.article.ar_math}',
        ar_obtain:${ctx.request.body.article.ar_obtain},
        ar_lack:${ctx.request.body.article.ar_lack}
      },
      status:0,
      url:'${ctx.request.body.url}',
    }
  })
  `
  const res = await callCloudDB(ctx, 'databaseadd', query)

  ctx.body = {
    code: 20000,
    data: res,
    message: '新建慈善捐物活动成功',
  }
})

router.post('/newsAdd', async (ctx, next) => {
  const query = `
  db.collection("new-list").add({
    data:{
      title:'${ctx.request.body.title}',
      subtitle:'${ctx.request.body.subtitle}',
      img:'${ctx.request.body.img}',
      content:'${ctx.request.body.content}',
      createTime:'${dayjs(ctx.request.body.createTime).format('YYYY-MM-DD')}',
      systemTime:'${dayjs(new Date()).format('YYYY-MM-DD HH:mm:ss')}',
      status:1
    }
  })
  `
  const res = await callCloudDB(ctx, 'databaseadd', query)

  ctx.body = {
    code: 20000,
    data: res,
    message: '新建慈善捐物活动成功',
  }
})

// 求助信息
router.get('/helps', async (ctx, next) => {
  const query = `
  db.collection("helps")
  .orderBy("createTime","desc").limit(20).get()
  `
  const res = await callCloudDB(ctx, 'databasequery', query)
  let result = []
  for (let index = 0; index < res.data.length; index++) {
    const element = res.data[index]
    result.push(JSON.parse(element))
  }
  ctx.body = {
    code: 20000,
    data: result,
    message: 'helps',
  }
})

router.get('/helpid', async (ctx, next) => {
  const query = `
  db.collection("helps").doc('${ctx.request.query.id}').get()
  `
  const res = await callCloudDB(ctx, 'databasequery', query)
  let result = []
  for (let index = 0; index < res.data.length; index++) {
    const element = res.data[index]
    result.push(JSON.parse(element))
  }
  ctx.body = {
    code: 20000,
    data: result,
    message: 'helps',
  }
})

// 接收信息
router.get('/obtain', async (ctx, next) => {
  const query = `
  db.collection("obtain")
  .orderBy("createTime","desc").limit(20).get()
  `
  const res = await callCloudDB(ctx, 'databasequery', query)
  let result = []
  for (let index = 0; index < res.data.length; index++) {
    const element = res.data[index]
    result.push(JSON.parse(element))
  }
  ctx.body = {
    code: 20000,
    data: result,
    message: 'obtain',
  }
})

// 发放信息
router.get('/grant', async (ctx, next) => {
  const query = `
  db.collection("grant")
  .orderBy("createTime","desc").limit(20).get()
  `
  const res = await callCloudDB(ctx, 'databasequery', query)
  let result = []
  for (let index = 0; index < res.data.length; index++) {
    const element = res.data[index]
    result.push(JSON.parse(element))
  }
  ctx.body = {
    code: 20000,
    data: result,
    message: 'grant',
  }
})

router.post('/user/login', async (ctx, next) => {
  const token = require('../untils/access_token.json')
  const query = `
  db.collection('admin').where({
    username:'${ctx.request.body.username}',
    password:'${ctx.request.body.password}'
  }).get()
 `
  const res = await callCloudDB(ctx, 'databasequery', query)
  ctx.body = {
    code: 20000,
    data: res,
    message: 'login',
    token: token,
  }
})
module.exports = router
