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
exports.UserSchema = exports.User = void 0;
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const business_1 = require("./business");
const mongoose = require("mongoose");
const types_1 = require("../utility/types");
const appointment_1 = require("./appointment");
let User = class User extends mongoose_1.Document {
};
__decorate([
    (0, mongoose_2.Prop)({ type: mongoose.Schema.Types.String, required: true }),
    __metadata("design:type", String)
], User.prototype, "firstname", void 0);
__decorate([
    (0, mongoose_2.Prop)({ type: mongoose.Schema.Types.String, required: true }),
    __metadata("design:type", String)
], User.prototype, "lastname", void 0);
__decorate([
    (0, mongoose_2.Prop)({ type: mongoose.Schema.Types.String, required: true }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, mongoose_2.Prop)({ type: mongoose.Schema.Types.String, required: true }),
    __metadata("design:type", String)
], User.prototype, "contact", void 0);
__decorate([
    (0, mongoose_2.Prop)({ type: mongoose.Schema.Types.Date, required: true }),
    __metadata("design:type", Date)
], User.prototype, "dob", void 0);
__decorate([
    (0, mongoose_2.Prop)({ type: mongoose.Schema.Types.String, required: true }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, mongoose_2.Prop)({
        type: mongoose.Schema.Types.String,
        enum: [
            types_1.userType.Admin,
            types_1.userType.Client,
            types_1.userType.SuperAdmin,
            types_1.userType.CustomerService,
        ],
        default: types_1.userType.Client,
        required: true,
    }),
    __metadata("design:type", String)
], User.prototype, "type", void 0);
__decorate([
    (0, mongoose_2.Prop)({ type: mongoose.Schema.Types.Boolean, default: true }),
    __metadata("design:type", Boolean)
], User.prototype, "active", void 0);
__decorate([
    (0, mongoose_2.Prop)({ type: mongoose.Schema.Types.Boolean, default: false }),
    __metadata("design:type", Boolean)
], User.prototype, "isVerified", void 0);
__decorate([
    (0, mongoose_2.Prop)({
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Address' }],
        default: [],
    }),
    __metadata("design:type", Array)
], User.prototype, "address", void 0);
__decorate([
    (0, mongoose_2.Prop)({ type: mongoose.Schema.Types.String, default: null }),
    __metadata("design:type", String)
], User.prototype, "otp", void 0);
__decorate([
    (0, mongoose_2.Prop)({ type: mongoose.Schema.Types.Date, default: null }),
    __metadata("design:type", Date)
], User.prototype, "otpExpiryTime", void 0);
__decorate([
    (0, mongoose_2.Prop)({
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Appointment' }],
        default: [],
    }),
    __metadata("design:type", appointment_1.Appointment)
], User.prototype, "appointments", void 0);
__decorate([
    (0, mongoose_2.Prop)({
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Business',
    }),
    __metadata("design:type", business_1.Business)
], User.prototype, "business", void 0);
User = __decorate([
    (0, mongoose_2.Schema)({ timestamps: true })
], User);
exports.User = User;
exports.UserSchema = mongoose_2.SchemaFactory.createForClass(User);
//# sourceMappingURL=user.js.map