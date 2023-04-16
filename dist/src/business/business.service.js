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
exports.BusinessService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const business_1 = require("../shared/schema/business");
const user_1 = require("../shared/schema/user");
let BusinessService = class BusinessService {
    constructor(businessModel, userModel) {
        this.businessModel = businessModel;
        this.userModel = userModel;
    }
    async createBusiness(user, createBusinessDto) {
        try {
            const { supportEmail, city, contact, name, region, categories } = createBusinessDto;
            const exist = await this.businessModel.findOne({ supportEmail });
            if (exist)
                throw new common_1.BadRequestException('Business email already registered.');
            const newBusiness = await this.businessModel.create({
                supportEmail,
                city,
                contact,
                name,
                region,
                user: new mongoose_2.Types.ObjectId(user._id),
                categories,
            });
            await this.userModel.findByIdAndUpdate({ _id: new mongoose_2.Types.ObjectId(user._id) }, { business: new mongoose_2.Types.ObjectId(newBusiness._id) }, { new: true });
            return {
                success: true,
                message: 'Business created successfully',
                status: 201,
                data: {
                    id: newBusiness._id,
                    name: newBusiness.name,
                    supportEmail: newBusiness.supportEmail,
                    contact: newBusiness.contact,
                    city: newBusiness.city,
                    region: newBusiness.region,
                    active: newBusiness.active,
                    approved: newBusiness.approved,
                },
            };
        }
        catch (err) {
            throw err;
        }
    }
    async getBusinessByUser(id, user) {
        return await this.businessModel
            .findOne({ _id: id, user })
            .populate({ path: 'user' })
            .populate({ path: 'categories' });
    }
    async getBusinessByCategory(category) {
        const business = await this.businessModel
            .find()
            .populate({ path: 'user' })
            .populate({ path: 'categories' });
        return business.filter((b) => b.categories.some((c) => c.name === category));
    }
    async getAllBusinesses() {
        return await this.businessModel
            .find()
            .populate({ path: 'user' })
            .populate({ path: 'categories' });
    }
    async getOneBusiness(id) {
        return await this.businessModel
            .findById(id)
            .populate({ path: 'user' })
            .populate({ path: 'categories' });
    }
    async updateBusiness(id, user, updateBusinessDto) {
        const { city, contact, name, region, supportEmail, categories } = updateBusinessDto;
        const business = this.businessModel.findOne({
            id,
            user: new mongoose_2.Types.ObjectId(user._id),
        });
        if (!business)
            throw new common_1.NotFoundException('Business not found');
        return await this.businessModel.findByIdAndUpdate(id, { city, contact, name, region, supportEmail, categories }, {
            new: true,
        });
    }
    async updateBusinessSchedules(id, user, updateSchedules) {
        try {
            const business = await this.businessModel.findOneAndUpdate({ _id: id, user: new mongoose_2.Types.ObjectId(user._id) }, { $addToSet: { schedules: updateSchedules } }, { new: true });
            return business;
        }
        catch (err) {
            throw new common_1.BadRequestException();
        }
    }
    async deleteBusiness(id) {
        return await this.businessModel.findByIdAndDelete(id);
    }
    async deactivateBusiness(id) {
        let business = await this.businessModel.findById(id);
        if (!business) {
            throw new common_1.NotFoundException('Business not found');
        }
        business.active = !business.active;
        business = await business.save();
        return business;
    }
};
BusinessService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(business_1.Business.name)),
    __param(1, (0, mongoose_1.InjectModel)(user_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], BusinessService);
exports.BusinessService = BusinessService;
//# sourceMappingURL=business.service.js.map