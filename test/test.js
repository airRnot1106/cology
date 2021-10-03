"use strict";
exports.__esModule = true;
var index_1 = require("../dist/index");
//Normal Test
index_1["default"].log('debug', 'debug test');
index_1["default"].log('info', 'info test');
index_1["default"].log('success', 'success test');
index_1["default"].log('warn', 'warn test');
index_1["default"].log('error', 'error test');
index_1["default"].log('fatal', 'fatal test');
//Border Test
index_1["default"].setBorder('--------');
index_1["default"].log('info', 'Test:\nGlobal Border Test In Progress');
index_1["default"].push();
index_1["default"].setBorder('<><><><>');
index_1["default"].log('info', 'Test:\nTemporary Border Test In Progress');
index_1["default"].pop();
index_1["default"].log('info', 'Test:\nGlobal Border Test In Progress Again');
index_1["default"].setBorder('');
index_1["default"].log('success', 'Test Completed');
process.exit(0);
