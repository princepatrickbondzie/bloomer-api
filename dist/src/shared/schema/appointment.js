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
exports.AppointmentSchema = exports.Appointment = exports.ScheduleData = void 0;
const mongoose_1 = require("mongoose");
const mongoose = require("mongoose");
const user_1 = require("./user");
const mongoose_2 = require("@nestjs/mongoose");
const business_1 = require("./business");
const types_1 = require("../utility/types");
class ScheduleData {
}
exports.ScheduleData = ScheduleData;
class Appointment extends mongoose_1.Document {
}
__decorate([
    (0, mongoose_2.Prop)({
        type: [
            { type: mongoose.Schema.Types.ObjectId, ref: 'Service', required: true },
        ],
    }),
    __metadata("design:type", Array)
], Appointment.prototype, "services", void 0);
__decorate([
    (0, mongoose_2.Prop)({ type: mongoose.Schema.Types.Number, required: true }),
    __metadata("design:type", Number)
], Appointment.prototype, "serviceCost", void 0);
__decorate([
    (0, mongoose_2.Prop)({ type: mongoose.Schema.Types.Number, required: true }),
    __metadata("design:type", Number)
], Appointment.prototype, "totalDuration", void 0);
__decorate([
    (0, mongoose_2.Prop)({
        type: mongoose.Schema.Types.String,
        enum: [types_1.appointmentTypes.InPerson, types_1.appointmentTypes.Visit],
        required: true,
    }),
    __metadata("design:type", String)
], Appointment.prototype, "type", void 0);
__decorate([
    (0, mongoose_2.Prop)({ type: mongoose.Schema.Types.Number, default: 0 }),
    __metadata("design:type", Number)
], Appointment.prototype, "visitCharge", void 0);
__decorate([
    (0, mongoose_2.Prop)({ type: mongoose.Schema.Types.Number, default: 0 }),
    __metadata("design:type", Number)
], Appointment.prototype, "discount", void 0);
__decorate([
    (0, mongoose_2.Prop)({ type: mongoose.Schema.Types.Number, required: true }),
    __metadata("design:type", Number)
], Appointment.prototype, "amountToPay", void 0);
__decorate([
    (0, mongoose_2.Prop)({ type: Object, required: true }),
    __metadata("design:type", ScheduleData)
], Appointment.prototype, "schedule", void 0);
__decorate([
    (0, mongoose_2.Prop)({
        type: mongoose.Schema.Types.String,
        enum: [
            types_1.appointmentStatus.NotDue,
            types_1.appointmentStatus.Pending,
            types_1.appointmentStatus.Confirmed,
            types_1.appointmentStatus.Cancelled,
            types_1.appointmentStatus.Completed,
            types_1.appointmentStatus.AwaitingPayment,
        ],
        default: types_1.appointmentStatus.AwaitingPayment,
    }),
    __metadata("design:type", String)
], Appointment.prototype, "status", void 0);
__decorate([
    (0, mongoose_2.Prop)({ type: mongoose.Schema.Types.String }),
    __metadata("design:type", String)
], Appointment.prototype, "clientComment", void 0);
__decorate([
    (0, mongoose_2.Prop)({ type: mongoose.Schema.Types.String }),
    __metadata("design:type", String)
], Appointment.prototype, "businessComment", void 0);
__decorate([
    (0, mongoose_2.Prop)({ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }),
    __metadata("design:type", user_1.User)
], Appointment.prototype, "user", void 0);
__decorate([
    (0, mongoose_2.Prop)({
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Business',
        required: true,
    }),
    __metadata("design:type", business_1.Business)
], Appointment.prototype, "business", void 0);
exports.Appointment = Appointment;
exports.AppointmentSchema = mongoose_2.SchemaFactory.createForClass(Appointment);
//# sourceMappingURL=appointment.js.map