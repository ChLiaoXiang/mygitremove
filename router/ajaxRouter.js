const express = require('express');
const router = express.Router();

let db = require('../db.json');

router.get('/getTran', (req,res) => {
    //获取前端传来的数据
    console.log(req.query.name);
    console.log(req.query.age);
    res.json({
        code: 1,
        msg:'请求成功',
        data:db.users
    })
})
router.post('/postPram', (req,res) => {
    console.log(req.body);
    res.json({
        code: 1,
        msg:'请求成功',
        title:'嘿嘿嘿嘿嘿'
    })
})

module.exports = router;