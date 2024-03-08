const router = require('express').Router()

router.get('/usuarios', (req,res) => {

    res.send({
        ok:123
    })

})

module.exports = router