"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.comparePassword = exports.generateHashPassword = void 0;
const bcrypt = require("bcryptjs");
const generateHashPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
};
exports.generateHashPassword = generateHashPassword;
const comparePassword = async (password, hashPassword) => {
    return await bcrypt.compare(password, hashPassword);
};
exports.comparePassword = comparePassword;
//# sourceMappingURL=password-manager.js.map