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
exports.AppGuard = void 0;
const app_1 = require("../shared/schema/app");
const mongoose_1 = require("mongoose");
const core_1 = require("@nestjs/core");
const mongoose_2 = require("@nestjs/mongoose");
const common_1 = require("@nestjs/common");
let AppGuard = class AppGuard {
    constructor(reflector, appModel) {
        this.reflector = reflector;
        this.appModel = appModel;
    }
    async canActivate(context) {
        try {
            const request = context.switchToHttp().getRequest();
            const appToken = request.headers['x-authorization'];
            if (!appToken) {
                return false;
            }
            const app = await this.appModel.findOne({ apiKey: appToken });
            if (!app) {
                return false;
            }
            request.app = app;
            return app.active === true && app.apiKey === appToken;
        }
        catch (err) {
            throw new common_1.UnauthorizedException();
        }
    }
};
AppGuard = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, mongoose_2.InjectModel)(app_1.App.name)),
    __metadata("design:paramtypes", [core_1.Reflector,
        mongoose_1.Model])
], AppGuard);
exports.AppGuard = AppGuard;
//# sourceMappingURL=app.guard.js.map