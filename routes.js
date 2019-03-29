const express = require('express')
const router = express.Router()
const data = require('./data.json')

router.use(express.static('public'))


router.get('/', (req,res) => {
    console.log(data);
    res.render('partials/home',data)
});

router.get('/distances', (req,res) => {
    
    res.render('partials/distances', data)
});


module.exports = router;