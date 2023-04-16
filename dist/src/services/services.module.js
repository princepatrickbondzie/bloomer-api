"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServicesModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const mongoose_1 = require("@nestjs/mongoose");
const services_service_1 = require("./services.service");
const services_controller_1 = require("./services.controller");
const user_1 = require("../shared/schema/user");
const business_1 = require("../shared/schema/business");
const service_1 = require("../shared/schema/service");
let ServicesModule = class ServicesModule {
};
ServicesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: user_1.User.name, schema: user_1.UserSchema },
                { name: service_1.Service.name, schema: service_1.ServiceSchema },
                { name: business_1.Business.name, schema: business_1.BusinessSchema },
            ]),
        ],
        controllers: [services_controller_1.ServicesController],
        providers: [services_service_1.ServicesService, jwt_1.JwtService],
    })
], ServicesModule);
exports.ServicesModule = ServicesModule;
//# sourceMappingURL=services.module.js.map