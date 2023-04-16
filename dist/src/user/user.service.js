"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const user_1 = require("../shared/schema/user");
const mongoose_1 = require("mongoose");
const types_1 = require("../shared/utility/types");
const common_1 = require("@nestjs/common");
const mongoose_2 = require("@nestjs/mongoose");
let UserService = class UserService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    async getOnlyUsers() {
        return await this.userModel.find({ type: types_1.userType.Client });
    }
    async getEveryUserType() {
        return await this.userModel.find();
    }
    async getSingleUser(id) {
        return await this.userModel.findById(id);
    }
    async updateUser(id, updateUserDto) {
        return await this.userModel.findByIdAndUpdate(id, updateUserDto, {
            new: true,
        });
    }
    async deleteUser(id) {
        return await this.userModel.findByIdAndDelete(id);
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(user_1.User.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map