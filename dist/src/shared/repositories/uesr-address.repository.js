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
exports.AddressRepository = void 0;
const mongoose_1 = require("mongoose");
const common_1 = require("@nestjs/common");
const mongoose_2 = require("@nestjs/mongoose");
const address_1 = require("../schema/address");
let AddressRepository = class AddressRepository {
    constructor(addressModel) {
        this.addressModel = addressModel;
    }
    async create(query) {
        return await this.addressModel.create(query);
    }
    async findOne(query) {
        return await this.addressModel.findOne(query);
    }
    async update(id, query) {
        return await this.addressModel.findByIdAndUpdate(id, query, {
            new: true,
        });
    }
};
AddressRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(address_1.Address.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], AddressRepository);
exports.AddressRepository = AddressRepository;
//# sourceMappingURL=uesr-address.repository.js.map