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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAppointmentDto = void 0;
const appointment_1 = require("../../shared/schema/appointment");
const types_1 = require("../../shared/utility/types");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class UpdateAppointmentDto {
}
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], UpdateAppointmentDto.prototype, "clientComment", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], UpdateAppointmentDto.prototype, "businessComment", void 0);
__decorate([
    (0, class_validator_1.IsIn)([
        types_1.appointmentStatus.NotDue,
        types_1.appointmentStatus.Pending,
        types_1.appointmentStatus.Confirmed,
        types_1.appointmentStatus.Cancelled,
        types_1.appointmentStatus.Completed,
        types_1.appointmentStatus.AwaitingPayment,
    ]),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiPropertyOptional)({
        enum: [
            types_1.appointmentStatus.NotDue,
            types_1.appointmentStatus.Pending,
            types_1.appointmentStatus.Confirmed,
            types_1.appointmentStatus.Cancelled,
            types_1.appointmentStatus.Completed,
            types_1.appointmentStatus.AwaitingPayment,
        ],
    }),
    __metadata("design:type", String)
], UpdateAppointmentDto.prototype, "status", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiPropertyOptional)({ type: appointment_1.ScheduleData }),
    __metadata("design:type", appointment_1.ScheduleData)
], UpdateAppointmentDto.prototype, "schedule", void 0);
exports.UpdateAppointmentDto = UpdateAppointmentDto;
//# sourceMappingURL=update-appointment.dto.js.map