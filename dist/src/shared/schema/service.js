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
exports.ServiceSchema = exports.Service = void 0;
const mongoose_1 = require("mongoose");
const mongoose = require("mongoose");
const business_1 = require("./business");
const mongoose_2 = require("@nestjs/mongoose");
let Service = class Service extends mongoose_1.Document {
};
__decorate([
    (0, mongoose_2.Prop)({ type: mongoose.Schema.Types.String, required: true }),
    __metadata("design:type", String)
], Service.prototype, "name", void 0);
__decorate([
    (0, mongoose_2.Prop)({ type: mongoose.Schema.Types.Number, required: true }),
    __metadata("design:type", Number)
], Service.prototype, "price", void 0);
__decorate([
    (0, mongoose_2.Prop)({ type: mongoose.Schema.Types.Number, required: true }),
    __metadata("design:type", Number)
], Service.prototype, "duration", void 0);
__decorate([
    (0, mongoose_2.Prop)({
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Business',
        required: true,
    }),
    __metadata("design:type", business_1.Business)
], Service.prototype, "businessId", void 0);
Service = __decorate([
    (0, mongoose_2.Schema)({ timestamps: true })
], Service);
exports.Service = Service;
exports.ServiceSchema = mongoose_2.SchemaFactory.createForClass(Service);
//# sourceMappingURL=service.js.map