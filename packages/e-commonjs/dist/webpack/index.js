/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 492:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const express = __webpack_require__(860);
const demo1Routes = __webpack_require__(865);
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
module.exports = app;


/***/ }),

/***/ 865:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const expressrouter = __webpack_require__(860);
const logger = __webpack_require__(601);
const router = expressrouter.Router();
router.get('/', (req, res) => {
    logger(`request sent: ${new Date().getTime()}`);
    res.status(200).send({
        ok: true,
    });
});
module.exports = router;


/***/ }),

/***/ 860:
/***/ ((module) => {

"use strict";
module.exports = require("express");

/***/ }),

/***/ 601:
/***/ ((module) => {

function logger(logMessage) {
    console.log(`this is a log message: ${logMessage}`)
}

module.exports = logger;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(492);
/******/ 	
/******/ })()
;