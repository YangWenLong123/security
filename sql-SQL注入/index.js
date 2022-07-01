/*
 * @,@Author: ,: along
 * @,@Version: ,:
 * @,@Description: ,:
 * @,@Date: ,: 2022-03-11 17:19:10
 * @,@LastEditors: ,: along
 * @,@LastEditTime: ,: 2022-03-14 17:13:07
 */
const express = require('express');
const app = express();
const mysql = require('mysql');

const db = mysql.createConnection({
    host:'localhost',//默认主机名localhost
    user:'root',
    password:'66666666',
    port:3306,
    database:'al'//需要打开的库名
});
db.connect();

// var sql = 'SELECT * FROM al';
// var sql = "SELECT username, password FROM al where username='al' and password='1234'";

// {
//     username: 'al';#
//     password: '任意密码'
// }

var sql = "SELECT username, password FROM al where username='al';# and password='jjjjjj'"; //注入语句

db.query(sql,function (err, result) {
    if(err){
        console.log('[SELECT ERROR] - ',err);
        return;
    }
    console.log('--------------------------SELECT----------------------------');
    console.log(result);
    console.log('------------------------------------------------------------\n\n');
});
db.end();

app.listen('3000',function () {
    console.log('app is listening at port 3000');
})