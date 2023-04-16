"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const mongoose_1 = require("@nestjs/mongoose");
const business_service_1 = require("./business.service");
const app_1 = require("../shared/schema/app");
const user_1 = require("../shared/schema/user");
const address_1 = require("../shared/schema/address");
const business_controller_1 = require("./business.controller");
const business_1 = require("../shared/schema/business");
const category_1 = require("../shared/schema/category");
let BusinessModule = class BusinessModule {
};
BusinessModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: app_1.App.name, schema: app_1.AppSchema },
                { name: user_1.User.name, schema: user_1.UserSchema },
                { name: address_1.Address.name, schema: address_1.AddressSchema },
                { name: business_1.Business.name, schema: business_1.BusinessSchema },
                { name: category_1.Category.name, schema: category_1.CategorySchema },
            ]),
        ],
        controllers: [business_controller_1.BusinessController],
        providers: [business_service_1.BusinessService, jwt_1.JwtService],
    })
], BusinessModule);
exports.BusinessModule = BusinessModule;
//# sourceMappingURL=business.module.js.map