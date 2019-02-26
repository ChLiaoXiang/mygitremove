const express = require('express');
const path = require('path');
const app = express();
// body 中间件
const bodyParser = require('body-parser');
//使用body中间件
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded());

//引入路由配置文件
const routerFile = require('./router/ajaxRouter')

//布置静态文件托管
app.use(express.static(path.join(__dirname,'keniCode')));

app.get('/my/up', (req,res) => {    //无路由配置
    res.send(' I love uuuu');
    res.end();
})

//布置路由
app.use('/user',routerFile);



//布置设置本地服务端口
app.listen('8888', () => {
    console.log('服务器端口：http://127.0.0.1:8888');
})

