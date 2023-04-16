"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppsModule = void 0;
const common_1 = require("@nestjs/common");
const apps_service_1 = require("./apps.service");
const mongoose_1 = require("@nestjs/mongoose");
const apps_controller_1 = require("./apps.controller");
const app_1 = require("../shared/schema/app");
const user_1 = require("../shared/schema/user");
const jwt_1 = require("@nestjs/jwt");
let AppsModule = class AppsModule {
};
AppsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: app_1.App.name, schema: app_1.AppSchema },
                { name: user_1.User.name, schema: user_1.UserSchema },
            ]),
        ],
        controllers: [apps_controller_1.AppsController],
        providers: [apps_service_1.AppsService, jwt_1.JwtService],
    })
], AppsModule);
exports.AppsModule = AppsModule;
//# sourceMappingURL=apps.module.js.map