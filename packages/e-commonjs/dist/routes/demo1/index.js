const expressrouter = require("express");
const router = expressrouter.Router;
router.get('/', (res) => {
    res.status(200).send({
        ok: true,
    });
});
module.exports = router;
//# sourceMappingURL=index.js.map