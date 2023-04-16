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
exports.TierSchema = exports.Tier = void 0;
const mongoose_1 = require("mongoose");
const mongoose = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let Tier = class Tier extends mongoose_1.Document {
};
__decorate([
    (0, mongoose_2.Prop)({ type: mongoose.Schema.Types.String, required: true }),
    __metadata("design:type", String)
], Tier.prototype, "name", void 0);
__decorate([
    (0, mongoose_2.Prop)({ type: mongoose.Schema.Types.Number, required: true }),
    __metadata("design:type", Number)
], Tier.prototype, "duration", void 0);
Tier = __decorate([
    (0, mongoose_2.Schema)({ timestamps: true })
], Tier);
exports.Tier = Tier;
exports.TierSchema = mongoose_2.SchemaFactory.createForClass(Tier);
//# sourceMappingURL=tier.js.map