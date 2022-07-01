/*
 * @,@Author: ,: along
 * @,@Version: ,:
 * @,@Description: ,:
 * @,@Date: ,: 2022-03-11 16:04:10
 * @,@LastEditors: ,: along
 * @,@LastEditTime: ,: 2022-03-11 17:10:08
 */
const Koa = require('koa');
const fs = require('fs');
const path = require('path');
const router = require('koa-router')();
const koaBody = require('koa-body');
const static = require('koa-static');

const app = new Koa();

/**
 * @description 默认页面
 */
router.get('/', (ctx, next) => {
  // 设置头类型, 如果不设置，会直接下载该页面
  ctx.type = 'html';
  // 读取文件
  const pathUrl = path.join(__dirname, '/static/index.html');

  ctx.body = fs.createReadStream(pathUrl);
  next();
});

app.use(static(path.join(__dirname)));
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3001, () => {
  console.log('server is listen in 3001');
});