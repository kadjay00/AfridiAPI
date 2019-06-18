"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const express_1 = __importDefault(require("express"));
const utils_1 = require("./utils");
const middleware_1 = __importDefault(require("./middleware"));
const apiRouter_1 = __importDefault(require("./routes/apiRouter"));
const router = express_1.default();
utils_1.applyMiddleware(middleware_1.default, router);
// print url on every request
router.use((req, res, next) => {
    console.log(req.method, req.originalUrl);
    next();
});
router.use('/api', apiRouter_1.default);
const { PORT = 3000 } = process.env;
const server = http_1.default.createServer(router);
server.listen(PORT, () => console.log(`Server is running http://localhost:${PORT}...`));
//# sourceMappingURL=server.js.map