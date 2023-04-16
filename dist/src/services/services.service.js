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
exports.ServicesService = void 0;
const mongoose_1 = require("mongoose");
const service_1 = require("../shared/schema/service");
const business_1 = require("../shared/schema/business");
const common_1 = require("@nestjs/common");
const mongoose_2 = require("@nestjs/mongoose");
let ServicesService = class ServicesService {
    constructor(serviceModel, businessModel) {
        this.serviceModel = serviceModel;
        this.businessModel = businessModel;
    }
    async createServiceByBusiness(businessId, createServiceDto) {
        const { duration, name, price } = createServiceDto;
        const business = await this.businessModel.findById(new mongoose_1.Types.ObjectId(businessId));
        if (!business)
            throw new common_1.NotFoundException('Invalid business');
        return await this.serviceModel.create({
            name,
            price,
            duration,
            businessId: new mongoose_1.Types.ObjectId(businessId),
        });
    }
    async getAllServicesByBusiness(businessId) {
        return await this.serviceModel.find({
            businessId: new mongoose_1.Types.ObjectId(businessId),
        });
    }
    async getSingleServiceByBusiness(id, businessId) {
        return await this.serviceModel.findOne({
            _id: id,
            businessId: new mongoose_1.Types.ObjectId(businessId),
        });
    }
    async updateServiceByBusiness(id, businessId, updateServiceDto) {
        return await this.serviceModel.findOneAndUpdate({
            _id: id,
            businessId: new mongoose_1.Types.ObjectId(businessId),
        }, updateServiceDto, { new: true });
    }
    async deleteServiceByBusiness(id, businessId) {
        return await this.serviceModel.findOneAndDelete({
            _id: id,
            businessId: new mongoose_1.Types.ObjectId(businessId),
        });
    }
};
ServicesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(service_1.Service.name)),
    __param(1, (0, mongoose_2.InjectModel)(business_1.Business.name)),
    __metadata("design:paramtypes", [mongoose_1.Model,
        mongoose_1.Model])
], ServicesService);
exports.ServicesService = ServicesService;
//# sourceMappingURL=services.service.js.map