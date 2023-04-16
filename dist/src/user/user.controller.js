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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const methods_1 = require("../shared/utility/methods");
const types_1 = require("../shared/utility/types");
const type_guard_1 = require("../guards/type.guard");
const user_service_1 = require("./user.service");
const update_user_dto_1 = require("./dto/update-user.dto");
const auth_user_guard_1 = require("../guards/auth-user.guard");
const swagger_1 = require("@nestjs/swagger");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    async getAllUserAccounts() {
        return await this.userService.getOnlyUsers();
    }
    async getAllAccounts() {
        return await this.userService.getEveryUserType();
    }
    async getSingleUser(id) {
        return await this.userService.getSingleUser(id);
    }
    async updateUser(id, updateUserDto) {
        return await this.userService.updateUser(id, updateUserDto);
    }
    async deleteUser(id) {
        return await this.userService.deleteUser(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, methods_1.Type)([types_1.userType.SuperAdmin, types_1.userType.Admin, types_1.userType.CustomerService]),
    (0, common_1.UseGuards)(auth_user_guard_1.UserAuthGuard, type_guard_1.TypeGuard),
    (0, swagger_1.ApiOperation)({ summary: 'get all user accounts (as type)' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getAllUserAccounts", null);
__decorate([
    (0, common_1.Get)('accounts'),
    (0, methods_1.Type)([types_1.userType.SuperAdmin, types_1.userType.Admin]),
    (0, common_1.UseGuards)(auth_user_guard_1.UserAuthGuard, type_guard_1.TypeGuard),
    (0, swagger_1.ApiOperation)({ summary: 'get all accounts' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getAllAccounts", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, common_1.UseGuards)(auth_user_guard_1.UserAuthGuard),
    (0, swagger_1.ApiOperation)({ summary: 'get single user account' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getSingleUser", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, common_1.UseGuards)(auth_user_guard_1.UserAuthGuard),
    (0, swagger_1.ApiOperation)({ summary: 'update a single user account' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_user_dto_1.UpdateUserDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updateUser", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'delete a single user account' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "deleteUser", null);
UserController = __decorate([
    (0, common_1.Controller)('users'),
    (0, swagger_1.ApiTags)('Users'),
    (0, swagger_1.ApiBearerAuth)(),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map