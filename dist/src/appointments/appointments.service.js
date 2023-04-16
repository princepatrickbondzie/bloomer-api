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
exports.AppointmentsService = void 0;
const mongoose_1 = require("mongoose");
const common_1 = require("@nestjs/common");
const appointment_1 = require("../shared/schema/appointment");
const mongoose_2 = require("@nestjs/mongoose");
let AppointmentsService = class AppointmentsService {
    constructor(appointmentModel) {
        this.appointmentModel = appointmentModel;
    }
    async createAppointment(user, businessId, createAppointmentDto) {
        const { amountToPay, schedule, serviceCost, services, totalDuration, type, clientComment, discount, visitCharge, } = createAppointmentDto;
        return await this.appointmentModel.create({
            amountToPay,
            schedule,
            serviceCost,
            services,
            totalDuration,
            type,
            clientComment,
            discount,
            visitCharge,
            user: new mongoose_1.Types.ObjectId(user._id),
            business: new mongoose_1.Types.ObjectId(businessId),
        });
    }
    async getAllAppointments() {
        return await this.appointmentModel.find();
    }
    async getAppointmentByUser(user) {
        return await this.appointmentModel.find({
            user: new mongoose_1.Types.ObjectId(user._id),
        });
    }
    async getAppointmentByBusiness(businessId) {
        return await this.appointmentModel.find({
            business: new mongoose_1.Types.ObjectId(businessId),
        });
    }
    async getOneAppointment(id) {
        return await this.appointmentModel.findById(id);
    }
    async updateAppointmentByUser(id, user, updateAppointmentDto) {
        const { clientComment, schedule } = updateAppointmentDto;
        return await this.appointmentModel.findOneAndUpdate({
            id,
            user: new mongoose_1.Types.ObjectId(user._id),
        }, { clientComment: clientComment, schedule: schedule }, {
            new: true,
        });
    }
    async updateAppointmentByAdmin(id, updateAppointmentDto) {
        const { status, schedule } = updateAppointmentDto;
        return await this.appointmentModel.findByIdAndUpdate(id, { status: status, schedule: schedule }, {
            new: true,
        });
    }
};
AppointmentsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(appointment_1.Appointment.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], AppointmentsService);
exports.AppointmentsService = AppointmentsService;
//# sourceMappingURL=appointments.service.js.map