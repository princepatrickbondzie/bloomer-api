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
exports.AddressService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const address_1 = require("../shared/schema/address");
const user_1 = require("../shared/schema/user");
let AddressService = class AddressService {
    constructor(addressModel, userModel) {
        this.addressModel = addressModel;
        this.userModel = userModel;
    }
    async createUserAddress(createAddressDto, user) {
        const { fullname, geoCode, landmark, mobile } = createAddressDto;
        const address = await this.addressModel.create({
            fullname,
            geoCode,
            landmark,
            mobile,
            user: new mongoose_1.Types.ObjectId(user._id),
        });
        user.address.push(address._id);
        await this.userModel.updateOne({ _id: new mongoose_1.Types.ObjectId(user._id) }, { $set: Object.assign({}, user) });
        return address;
    }
    async getAllUserAddress(user) {
        return await this.addressModel.find({ user });
    }
    async getSingleUserAddress(id, user) {
        return await this.addressModel.findOne({ _id: id, user });
    }
    async updateUserAddress(id, user, updateAddressDto) {
        const { fullname, geoCode, landmark, mobile } = updateAddressDto;
        return await this.addressModel.findOneAndUpdate({ id, user }, { fullname, geoCode, landmark, mobile }, { new: true });
    }
    async deleteUserAddress(id, user) {
        return await this.addressModel.findOneAndDelete({ id, user });
    }
};
AddressService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(address_1.Address.name)),
    __param(1, (0, mongoose_2.InjectModel)(user_1.User.name)),
    __metadata("design:paramtypes", [mongoose_1.Model,
        mongoose_1.Model])
], AddressService);
exports.AddressService = AddressService;
//# sourceMappingURL=address.service.js.map