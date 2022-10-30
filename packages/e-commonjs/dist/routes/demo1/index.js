const expressrouter = require("express");
const logger = require("../../lib/e-commonjs.js");
const router = expressrouter.Router();
router.get('/', (req, res) => {
    logger(`request: ${JSON.stringify(req)}`);
    res.status(200).send({
        ok: true,
    });
});
module.exports = router;
//# sourceMappingURL=index.js.map