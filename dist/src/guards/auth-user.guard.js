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
exports.UserAuthGuard = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const mongoose_1 = require("mongoose");
const passport_1 = require("@nestjs/passport");
const user_1 = require("../shared/schema/user");
const mongoose_2 = require("@nestjs/mongoose");
const Config_1 = require("../config/Config");
let UserAuthGuard = class UserAuthGuard extends (0, passport_1.AuthGuard)('jwt') {
    constructor(userModel, jwtService) {
        super();
        this.userModel = userModel;
        this.jwtService = jwtService;
    }
    async canActivate(context) {
        try {
            const request = context.switchToHttp().getRequest();
            let accessToken = request.headers['authorization'];
            accessToken = accessToken.split(' ')[1];
            const decodeToken = this.jwtService.verify(accessToken, {
                secret: Config_1.Config.JWT_SECRET,
            });
            const { email } = decodeToken;
            let user = await this.getUser(email);
            if (!user)
                return false;
            request.user = user;
            return true;
        }
        catch (err) {
            console.log(err);
            throw new common_1.UnauthorizedException();
        }
    }
    async getUser(email) {
        return await this.userModel.findOne({ email });
    }
};
UserAuthGuard = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(user_1.User.name)),
    __metadata("design:paramtypes", [mongoose_1.Model,
        jwt_1.JwtService])
], UserAuthGuard);
exports.UserAuthGuard = UserAuthGuard;
//# sourceMappingURL=auth-user.guard.js.map