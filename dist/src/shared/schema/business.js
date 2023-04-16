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
exports.BusinessSchema = exports.Business = exports.PrimaryImage = exports.Schedules = void 0;
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const mongoose = require("mongoose");
const user_1 = require("./user");
const address_1 = require("./address");
class Schedules {
}
exports.Schedules = Schedules;
class PrimaryImage {
}
exports.PrimaryImage = PrimaryImage;
let Business = class Business extends mongoose_1.Document {
};
__decorate([
    (0, mongoose_2.Prop)({ type: mongoose.Schema.Types.String, unique: true, required: true }),
    __metadata("design:type", String)
], Business.prototype, "name", void 0);
__decorate([
    (0, mongoose_2.Prop)({ type: mongoose.Schema.Types.String, unique: true, required: true }),
    __metadata("design:type", String)
], Business.prototype, "supportEmail", void 0);
__decorate([
    (0, mongoose_2.Prop)({ type: mongoose.Schema.Types.String, unique: true, required: true }),
    __metadata("design:type", String)
], Business.prototype, "contact", void 0);
__decorate([
    (0, mongoose_2.Prop)({ type: PrimaryImage, required: true }),
    __metadata("design:type", PrimaryImage)
], Business.prototype, "primaryImage", void 0);
__decorate([
    (0, mongoose_2.Prop)({ type: [{ type: Object }], default: [] }),
    __metadata("design:type", Array)
], Business.prototype, "otherImages", void 0);
__decorate([
    (0, mongoose_2.Prop)({ type: mongoose.Schema.Types.String, required: true }),
    __metadata("design:type", String)
], Business.prototype, "city", void 0);
__decorate([
    (0, mongoose_2.Prop)({ type: mongoose.Schema.Types.String, required: true }),
    __metadata("design:type", String)
], Business.prototype, "region", void 0);
__decorate([
    (0, mongoose_2.Prop)({ type: mongoose.Schema.Types.Boolean, default: true }),
    __metadata("design:type", Boolean)
], Business.prototype, "active", void 0);
__decorate([
    (0, mongoose_2.Prop)({ type: mongoose.Schema.Types.Boolean, default: false }),
    __metadata("design:type", Boolean)
], Business.prototype, "approved", void 0);
__decorate([
    (0, mongoose_2.Prop)({
        type: [{ type: Object }],
        default: [],
    }),
    __metadata("design:type", Array)
], Business.prototype, "schedules", void 0);
__decorate([
    (0, mongoose_2.Prop)({
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Service' }],
        default: [],
    }),
    __metadata("design:type", Array)
], Business.prototype, "services", void 0);
__decorate([
    (0, mongoose_2.Prop)({ type: mongoose.Schema.Types.ObjectId, ref: 'Address' }),
    __metadata("design:type", address_1.Address)
], Business.prototype, "address", void 0);
__decorate([
    (0, mongoose_2.Prop)({ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }),
    __metadata("design:type", user_1.User)
], Business.prototype, "user", void 0);
__decorate([
    (0, mongoose_2.Prop)({
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category' }],
        default: [],
    }),
    __metadata("design:type", Array)
], Business.prototype, "categories", void 0);
__decorate([
    (0, mongoose_2.Prop)({
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Appointment' }],
        default: [],
    }),
    __metadata("design:type", Array)
], Business.prototype, "appointments", void 0);
Business = __decorate([
    (0, mongoose_2.Schema)({ timestamps: true })
], Business);
exports.Business = Business;
exports.BusinessSchema = mongoose_2.SchemaFactory.createForClass(Business);
//# sourceMappingURL=business.js.map