"use strict";
const express = require('express');
const demo1Routes = require('./routes/demo1');
const app = express();
const port = 3001;
app.get('/', (req, res) => {
    res.status(200).send({
        running: true,
        timestamp: new Date().getTime
    });
});
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
app.use('/demo1', [demo1Routes]);
const expressrouter = require("express");
const router = expressrouter.Router;
router.get('/', (res) => {
    res.status(200).send({
        ok: true,
    });
});
module.exports = router;
