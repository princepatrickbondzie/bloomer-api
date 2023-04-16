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
exports.ServicesController = void 0;
const common_1 = require("@nestjs/common");
const services_service_1 = require("./services.service");
const create_service_dto_1 = require("./dto/create-service.dto");
const update_service_dto_1 = require("./dto/update-service.dto");
const swagger_1 = require("@nestjs/swagger");
const auth_user_guard_1 = require("../guards/auth-user.guard");
let ServicesController = class ServicesController {
    constructor(servicesService) {
        this.servicesService = servicesService;
    }
    async createServiceByBusiness(createServiceDto, businessId) {
        return this.servicesService.createServiceByBusiness(businessId, createServiceDto);
    }
    async getAllServicesByBusiness(businessId) {
        return await this.servicesService.getAllServicesByBusiness(businessId);
    }
    async getSingleServiceByBusiness(id, businessId) {
        return await this.servicesService.getSingleServiceByBusiness(id, businessId);
    }
    async updateServiceByBusiness(id, businessId, updateServiceDto) {
        return await this.servicesService.updateServiceByBusiness(id, businessId, updateServiceDto);
    }
    async deleteServiceByBusiness(id, businessId) {
        return await this.servicesService.deleteServiceByBusiness(id, businessId);
    }
};
__decorate([
    (0, common_1.Post)(':businessId'),
    (0, common_1.UseGuards)(auth_user_guard_1.UserAuthGuard),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('businessId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_service_dto_1.CreateServiceDto, String]),
    __metadata("design:returntype", Promise)
], ServicesController.prototype, "createServiceByBusiness", null);
__decorate([
    (0, common_1.Get)(':businessId'),
    (0, common_1.UseGuards)(auth_user_guard_1.UserAuthGuard),
    __param(0, (0, common_1.Param)('businessId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ServicesController.prototype, "getAllServicesByBusiness", null);
__decorate([
    (0, common_1.Get)(':id/:businessId'),
    (0, common_1.UseGuards)(auth_user_guard_1.UserAuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('businessId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ServicesController.prototype, "getSingleServiceByBusiness", null);
__decorate([
    (0, common_1.Patch)(':id/:businessId'),
    (0, common_1.UseGuards)(auth_user_guard_1.UserAuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('businessId')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, update_service_dto_1.UpdateServiceDto]),
    __metadata("design:returntype", Promise)
], ServicesController.prototype, "updateServiceByBusiness", null);
__decorate([
    (0, common_1.Delete)(':id/:businessId'),
    (0, common_1.UseGuards)(auth_user_guard_1.UserAuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('businessId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ServicesController.prototype, "deleteServiceByBusiness", null);
ServicesController = __decorate([
    (0, common_1.Controller)('services'),
    (0, swagger_1.ApiTags)('Services'),
    (0, swagger_1.ApiBearerAuth)(),
    __metadata("design:paramtypes", [services_service_1.ServicesService])
], ServicesController);
exports.ServicesController = ServicesController;
//# sourceMappingURL=services.controller.js.map