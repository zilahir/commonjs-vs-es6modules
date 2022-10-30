const expressrouter = require("express");

const router = expressrouter.Router;

router.get('/', (res: any) => {
    res.status(200).send({
        ok: true,
    })
})

module.exports = router;