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
exports.AppsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const types_1 = require("../shared/utility/types");
const create_app_dto_1 = require("./dtos/create-app.dto");
const update_app_dto_1 = require("./dtos/update-app.dto");
const apps_service_1 = require("./apps.service");
const auth_user_guard_1 = require("../guards/auth-user.guard");
const methods_1 = require("../shared/utility/methods");
const type_guard_1 = require("../guards/type.guard");
let AppsController = class AppsController {
    constructor(appsService) {
        this.appsService = appsService;
    }
    async createApp(appDto) {
        return await this.appsService.createThirdPartyApp(appDto);
    }
    async getApps() {
        return await this.appsService.getApps();
    }
    async deactivateApp(id) {
        return await this.appsService.toggleApp(id);
    }
    async updateThirdPartyApp(id, updateAppDto) {
        return await this.appsService.updateApp(id, updateAppDto);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, methods_1.Type)([types_1.userType.SuperAdmin]),
    (0, common_1.UseGuards)(auth_user_guard_1.UserAuthGuard, type_guard_1.TypeGuard),
    (0, swagger_1.ApiOperation)({
        summary: 'Create a third party application',
    }),
    __param(0, (0, common_1.Body)(common_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_app_dto_1.CreateAppDto]),
    __metadata("design:returntype", Promise)
], AppsController.prototype, "createApp", null);
__decorate([
    (0, common_1.Get)(),
    (0, methods_1.Type)([types_1.userType.SuperAdmin]),
    (0, common_1.UseGuards)(auth_user_guard_1.UserAuthGuard, type_guard_1.TypeGuard),
    (0, swagger_1.ApiOperation)({
        summary: 'Get all registered third party applications',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppsController.prototype, "getApps", null);
__decorate([
    (0, common_1.Patch)('toggle/:id'),
    (0, methods_1.Type)([types_1.userType.SuperAdmin]),
    (0, common_1.UseGuards)(auth_user_guard_1.UserAuthGuard, type_guard_1.TypeGuard),
    (0, swagger_1.ApiOperation)({
        summary: 'Deactive a single third party application',
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AppsController.prototype, "deactivateApp", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, methods_1.Type)([types_1.userType.SuperAdmin]),
    (0, common_1.UseGuards)(auth_user_guard_1.UserAuthGuard, type_guard_1.TypeGuard),
    (0, swagger_1.ApiParam)({ name: 'id', required: true }),
    (0, swagger_1.ApiOperation)({
        summary: 'Deactive a single third party application',
    }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_app_dto_1.UpdateAppDto]),
    __metadata("design:returntype", Promise)
], AppsController.prototype, "updateThirdPartyApp", null);
AppsController = __decorate([
    (0, common_1.Controller)('apps'),
    (0, swagger_1.ApiTags)('Apps'),
    (0, swagger_1.ApiBearerAuth)(),
    __metadata("design:paramtypes", [apps_service_1.AppsService])
], AppsController);
exports.AppsController = AppsController;
//# sourceMappingURL=apps.controller.js.map