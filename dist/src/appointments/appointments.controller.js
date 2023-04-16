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
exports.AppointmentsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const auth_user_guard_1 = require("../guards/auth-user.guard");
const methods_1 = require("../shared/utility/methods");
const appointments_service_1 = require("./appointments.service");
const create_appointment_dto_1 = require("./dto/create-appointment.dto");
const update_appointment_dto_1 = require("./dto/update-appointment.dto");
const types_1 = require("../shared/utility/types");
const type_guard_1 = require("../guards/type.guard");
let AppointmentsController = class AppointmentsController {
    constructor(appointmentsService) {
        this.appointmentsService = appointmentsService;
    }
    async createAppointment(businessId, req, createAppointmentDto) {
        const user = req.user;
        return await this.appointmentsService.createAppointment(user, businessId, createAppointmentDto);
    }
    async getAllAppointments() {
        return await this.appointmentsService.getAllAppointments();
    }
    async getAppointmentByUser(req) {
        const user = req.user;
        return await this.appointmentsService.getAppointmentByUser(user);
    }
    async getAppointmentByBusiness(businessId) {
        return await this.appointmentsService.getAppointmentByBusiness(businessId);
    }
    async getOneAppointment(id) {
        return await this.appointmentsService.getOneAppointment(id);
    }
    async updateAppointmentByUser(req, id, updateAppointmentDto) {
        const user = req.user;
        return await this.appointmentsService.updateAppointmentByUser(id, user, updateAppointmentDto);
    }
    async updateAppointmentByAdmin(id, updateAppointmentDto) {
        return await this.appointmentsService.updateAppointmentByAdmin(id, updateAppointmentDto);
    }
};
__decorate([
    (0, common_1.Post)(':businessId'),
    (0, common_1.UseGuards)(auth_user_guard_1.UserAuthGuard),
    (0, swagger_1.ApiOperation)({ summary: 'create new appointment' }),
    __param(0, (0, common_1.Param)('businessId')),
    __param(1, (0, common_1.Request)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, create_appointment_dto_1.CreateAppointmentDto]),
    __metadata("design:returntype", Promise)
], AppointmentsController.prototype, "createAppointment", null);
__decorate([
    (0, common_1.Get)(),
    (0, methods_1.Type)([types_1.userType.CustomerService, types_1.userType.SuperAdmin, types_1.userType.Admin]),
    (0, common_1.UseGuards)(auth_user_guard_1.UserAuthGuard, type_guard_1.TypeGuard),
    (0, swagger_1.ApiOperation)({ summary: 'get all appointments' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppointmentsController.prototype, "getAllAppointments", null);
__decorate([
    (0, common_1.Get)('me'),
    (0, methods_1.Type)([
        types_1.userType.Client,
        types_1.userType.CustomerService,
        types_1.userType.SuperAdmin,
        types_1.userType.Admin,
    ]),
    (0, common_1.UseGuards)(auth_user_guard_1.UserAuthGuard, type_guard_1.TypeGuard),
    (0, swagger_1.ApiOperation)({ summary: 'get all appointments by user' }),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppointmentsController.prototype, "getAppointmentByUser", null);
__decorate([
    (0, common_1.Get)('business/:businessId'),
    (0, methods_1.Type)([types_1.userType.Business]),
    (0, common_1.UseGuards)(auth_user_guard_1.UserAuthGuard, type_guard_1.TypeGuard),
    (0, swagger_1.ApiOperation)({ summary: 'get all appointments by business' }),
    __param(0, (0, common_1.Param)('businessId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AppointmentsController.prototype, "getAppointmentByBusiness", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, methods_1.Type)([types_1.userType.CustomerService, types_1.userType.SuperAdmin, types_1.userType.Admin]),
    (0, common_1.UseGuards)(auth_user_guard_1.UserAuthGuard, type_guard_1.TypeGuard),
    (0, swagger_1.ApiOperation)({ summary: 'get one appointment' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AppointmentsController.prototype, "getOneAppointment", null);
__decorate([
    (0, common_1.Patch)('me/:id'),
    (0, methods_1.Type)([types_1.userType.Client, types_1.userType.Business]),
    (0, common_1.UseGuards)(auth_user_guard_1.UserAuthGuard, type_guard_1.TypeGuard),
    (0, swagger_1.ApiOperation)({ summary: 'update appointment by user' }),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, update_appointment_dto_1.UpdateAppointmentDto]),
    __metadata("design:returntype", Promise)
], AppointmentsController.prototype, "updateAppointmentByUser", null);
__decorate([
    (0, common_1.Patch)('admin/:id'),
    (0, methods_1.Type)([types_1.userType.CustomerService, types_1.userType.SuperAdmin, types_1.userType.Admin]),
    (0, common_1.UseGuards)(auth_user_guard_1.UserAuthGuard, type_guard_1.TypeGuard),
    (0, swagger_1.ApiOperation)({ summary: 'update appointment by admin' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_appointment_dto_1.UpdateAppointmentDto]),
    __metadata("design:returntype", Promise)
], AppointmentsController.prototype, "updateAppointmentByAdmin", null);
AppointmentsController = __decorate([
    (0, common_1.Controller)('appointments'),
    (0, swagger_1.ApiTags)('Appointments'),
    (0, swagger_1.ApiBearerAuth)(),
    __metadata("design:paramtypes", [appointments_service_1.AppointmentsService])
], AppointmentsController);
exports.AppointmentsController = AppointmentsController;
//# sourceMappingURL=appointments.controller.js.map