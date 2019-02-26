const fs = require('fs');
const path = require('path');
const Mock = require('mockjs');

let dbjson = {
    "users":[{
        "id":100,
        "name":"liaoxiang",
        "age": 18,
        "email":"512153241@qq.com",
        "phone":"18523320148"
    },{
        "id":101,
        "name":"希望是妳",
        "age": 18,
        "email":"myDear@163.com",
        "phone":"13588888888"
    }]
}

dbjson.users || (dbjson.users=[]);

let data = Mock.mock({
    "users|30":[{
        "id|+1":1000,
        "name":"@cname",
        "age":"@natural(18,30)",
        "email":"@email",
        "phone":"@natural(18000000000,18800000000)"
    }]
})

dbjson.users.push(...data.users);

fs.writeFileSync(path.join(__dirname,'../db.json'), JSON.stringify(dbjson), err => {
    if(err) throw err;
})