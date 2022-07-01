/**
 * 用户登录之后，返回登录标识 cookie
 */
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

//设置路径
app.use(express.static(path.join(__dirname, 'src')));
app.use(express.static(path.join(__dirname, './')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());


let comments = [
    { username: 'jack', content: '大家好' },
    { username: 'jack', content: '欢迎来参加我的分享' },
]

/**
 * @description 获取评论
 */
app.get('/getComments', function (req, res) {
    res.json({ code: 0, comments });
});

/**
 * @description 编码转换
 * @param {String} str
 * @return String
 */
function encodeHtml(str) {
    return str.replace(/"/g, '&quot;')
        .replace(/'/g, '&apos;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}

/**
 * @description 添加评论
 */
app.post('/addComment', function (req, res) {
    // comments.push({ username: 'jack', content: req.body.comment });
    comments.push({ username: 'jack', content: encodeHtml(req.body.comment)  });
    res.json({ code: 0, comments });
});

app.listen(3000);