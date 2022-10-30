const expressrouter = require("express");
const logger = require("../../lib/e-commonjs.js");

const router = expressrouter.Router();

router.get('/', (req: any, res: any) => {
    logger(`request sent: ${new Date().getTime()}`)
    res.status(200).send({
        ok: true,
    })
})

module.exports = router;