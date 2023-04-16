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
exports.CreateAppointmentDto = void 0;
const class_validator_1 = require("class-validator");
const service_1 = require("../../shared/schema/service");
const appointment_1 = require("../../shared/schema/appointment");
const types_1 = require("../../shared/utility/types");
const swagger_1 = require("@nestjs/swagger");
class CreateAppointmentDto {
}
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        isArray: true,
        type: service_1.Service,
    }),
    __metadata("design:type", Array)
], CreateAppointmentDto.prototype, "services", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], CreateAppointmentDto.prototype, "serviceCost", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], CreateAppointmentDto.prototype, "totalDuration", void 0);
__decorate([
    (0, class_validator_1.IsIn)([types_1.appointmentTypes.InPerson, types_1.appointmentTypes.Visit]),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ enum: [types_1.appointmentTypes.InPerson, types_1.appointmentTypes.Visit] }),
    __metadata("design:type", String)
], CreateAppointmentDto.prototype, "type", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", Number)
], CreateAppointmentDto.prototype, "visitCharge", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", Number)
], CreateAppointmentDto.prototype, "discount", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], CreateAppointmentDto.prototype, "amountToPay", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: appointment_1.ScheduleData }),
    __metadata("design:type", appointment_1.ScheduleData)
], CreateAppointmentDto.prototype, "schedule", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], CreateAppointmentDto.prototype, "clientComment", void 0);
exports.CreateAppointmentDto = CreateAppointmentDto;
//# sourceMappingURL=create-appointment.dto.js.map