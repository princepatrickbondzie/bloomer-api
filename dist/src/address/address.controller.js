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
exports.AddressController = void 0;
const common_1 = require("@nestjs/common");
const address_service_1 = require("./address.service");
const create_address_dto_1 = require("./dto/create-address.dto");
const update_address_dto_1 = require("./dto/update-address.dto");
const auth_user_guard_1 = require("../guards/auth-user.guard");
const swagger_1 = require("@nestjs/swagger");
let AddressController = class AddressController {
    constructor(addressService) {
        this.addressService = addressService;
    }
    async createUserAddress(createAddressDto, req) {
        const user = req.user;
        return await this.addressService.createUserAddress(createAddressDto, user);
    }
    async getAllUserAddress(req) {
        const user = req.user;
        return await this.addressService.getAllUserAddress(user);
    }
    async getSingleUserAddress(id, req) {
        const user = req.user;
        return await this.addressService.getSingleUserAddress(id, user);
    }
    async updateUserAddress(id, updateAddressDto, req) {
        const user = req.user;
        return await this.addressService.updateUserAddress(id, user, updateAddressDto);
    }
    async deleteUserAddress(id, req) {
        const user = req.user;
        return await this.addressService.deleteUserAddress(id, user);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'create new user address' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_address_dto_1.CreateAddressDto, Object]),
    __metadata("design:returntype", Promise)
], AddressController.prototype, "createUserAddress", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'get all user addresses' }),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AddressController.prototype, "getAllUserAddress", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'get one user address' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], AddressController.prototype, "getSingleUserAddress", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'update one user address' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_address_dto_1.UpdateAddressDto, Object]),
    __metadata("design:returntype", Promise)
], AddressController.prototype, "updateUserAddress", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'delete one user address' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], AddressController.prototype, "deleteUserAddress", null);
AddressController = __decorate([
    (0, common_1.Controller)('address'),
    (0, swagger_1.ApiTags)('Address'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(auth_user_guard_1.UserAuthGuard),
    __metadata("design:paramtypes", [address_service_1.AddressService])
], AddressController);
exports.AddressController = AddressController;
//# sourceMappingURL=address.controller.js.map