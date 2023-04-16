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
exports.BusinessController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const methods_1 = require("../shared/utility/methods");
const types_1 = require("../shared/utility/types");
const app_guard_1 = require("../guards/app.guard");
const type_guard_1 = require("../guards/type.guard");
const auth_user_guard_1 = require("../guards/auth-user.guard");
const business_service_1 = require("./business.service");
const create_business_dto_1 = require("./dto/create-business.dto");
const update_business_dto_1 = require("./dto/update-business.dto");
const update_schedules_dto_1 = require("./dto/update-schedules.dto");
let BusinessController = class BusinessController {
    constructor(businessService) {
        this.businessService = businessService;
    }
    async createBusiness(createBusinessDto, req) {
        const user = req.user;
        return await this.businessService.createBusiness(user, createBusinessDto);
    }
    async getBusinessByUser(req, id) {
        const user = req.user;
        return await this.businessService.getBusinessByUser(id, user);
    }
    async getOneBusiness(id) {
        return await this.businessService.getOneBusiness(id);
    }
    async getAllBusinesses() {
        return await this.businessService.getAllBusinesses();
    }
    async getBusinessByCategory(category) {
        return await this.businessService.getBusinessByCategory(category);
    }
    async updateBusiness(id, updateBusinessDto, req) {
        const user = req.user;
        return await this.businessService.updateBusiness(id, user, updateBusinessDto);
    }
    async updateBusinessSchedules(id, req, updateSchedules) {
        const user = req.user;
        return await this.businessService.updateBusinessSchedules(id, user, updateSchedules);
    }
    async deleteBusiness(id) {
        return await this.businessService.deleteBusiness(id);
    }
    async deactivateBusiness(id) {
        return await this.businessService.deactivateBusiness(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, methods_1.Type)([
        types_1.userType.Client,
        types_1.userType.SuperAdmin,
        types_1.userType.Admin,
        types_1.userType.CustomerService,
    ]),
    (0, common_1.UseGuards)(auth_user_guard_1.UserAuthGuard),
    (0, swagger_1.ApiOperation)({ summary: 'create new Business' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_business_dto_1.CreateBusinessDto, Object]),
    __metadata("design:returntype", Promise)
], BusinessController.prototype, "createBusiness", null);
__decorate([
    (0, common_1.Get)('user/:id'),
    (0, common_1.UseGuards)(auth_user_guard_1.UserAuthGuard),
    (0, swagger_1.ApiOperation)({ summary: 'get business by user' }),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], BusinessController.prototype, "getBusinessByUser", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, common_1.UseGuards)(app_guard_1.AppGuard),
    (0, swagger_1.ApiOperation)({ summary: 'get single business' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BusinessController.prototype, "getOneBusiness", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)(app_guard_1.AppGuard),
    (0, swagger_1.ApiOperation)({ summary: 'get all businesses' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BusinessController.prototype, "getAllBusinesses", null);
__decorate([
    (0, common_1.Get)(':category'),
    (0, common_1.UseGuards)(app_guard_1.AppGuard),
    (0, swagger_1.ApiOperation)({ summary: 'get business by category' }),
    __param(0, (0, common_1.Param)('category')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BusinessController.prototype, "getBusinessByCategory", null);
__decorate([
    (0, common_1.Patch)('user/:id'),
    (0, common_1.UseGuards)(auth_user_guard_1.UserAuthGuard),
    (0, swagger_1.ApiOperation)({ summary: 'update business' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_business_dto_1.UpdateBusinessDto, Object]),
    __metadata("design:returntype", Promise)
], BusinessController.prototype, "updateBusiness", null);
__decorate([
    (0, common_1.Patch)('schedule/:id'),
    (0, common_1.UseGuards)(auth_user_guard_1.UserAuthGuard),
    (0, swagger_1.ApiOperation)({ summary: 'update business schedules' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Request)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, update_schedules_dto_1.UpdateSchedules]),
    __metadata("design:returntype", Promise)
], BusinessController.prototype, "updateBusinessSchedules", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, methods_1.Type)([types_1.userType.SuperAdmin, types_1.userType.Admin, types_1.userType.CustomerService]),
    (0, common_1.UseGuards)(auth_user_guard_1.UserAuthGuard, type_guard_1.TypeGuard),
    (0, swagger_1.ApiOperation)({ summary: 'delete business account' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BusinessController.prototype, "deleteBusiness", null);
__decorate([
    (0, common_1.Patch)('toggle/:id'),
    (0, methods_1.Type)([types_1.userType.SuperAdmin, types_1.userType.Admin, types_1.userType.CustomerService]),
    (0, common_1.UseGuards)(auth_user_guard_1.UserAuthGuard, type_guard_1.TypeGuard),
    (0, swagger_1.ApiOperation)({ summary: 'toggle business activation' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BusinessController.prototype, "deactivateBusiness", null);
BusinessController = __decorate([
    (0, common_1.Controller)('business'),
    (0, swagger_1.ApiTags)('Business'),
    (0, swagger_1.ApiBearerAuth)(),
    __metadata("design:paramtypes", [business_service_1.BusinessService])
], BusinessController);
exports.BusinessController = BusinessController;
//# sourceMappingURL=business.controller.js.map