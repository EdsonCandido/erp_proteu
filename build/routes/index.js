"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routers = void 0;
const express_1 = require("express");
const users_1 = __importDefault(require("./users"));
const routers = (0, express_1.Router)();
exports.routers = routers;
/* GET home page. */
routers.get('/', function (req, res, next) {
    // res.render('index', { title: 'Express' });
    res.status(200).json({ data: null, message: 'API ERP' });
});
routers.use('/users/', users_1.default);
//# sourceMappingURL=index.js.map