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
exports.AppsService = void 0;
const common_1 = require("@nestjs/common");
const uuid_1 = require("uuid");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const app_1 = require("../shared/schema/app");
let AppsService = class AppsService {
    constructor(appModel) {
        this.appModel = appModel;
    }
    async createThirdPartyApp(appDto) {
        try {
            const { name, supportMail } = appDto;
            return await this.appModel.create({ name, supportMail, apiKey: (0, uuid_1.v4)() });
        }
        catch (err) {
            if (err.code === '23505') {
                throw new common_1.ConflictException('app name is aleady taken');
            }
            throw new common_1.InternalServerErrorException();
        }
    }
    async getApps() {
        return await this.appModel.find();
    }
    async toggleApp(id) {
        console.log(id);
        const app = await this.appModel.findById(id);
        if (!app) {
            throw new common_1.NotFoundException('App not found');
        }
        app.active = !app.active;
        await app.save();
    }
    async updateApp(id, updateApp) {
        const app = await this.appModel.findById(id);
        if (!app) {
            throw new common_1.NotFoundException('App not found');
        }
        return await this.appModel.findByIdAndUpdate(id, updateApp, { new: true });
    }
};
AppsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(app_1.App.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], AppsService);
exports.AppsService = AppsService;
//# sourceMappingURL=apps.service.js.map