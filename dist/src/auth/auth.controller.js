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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const methods_1 = require("../shared/utility/methods");
const types_1 = require("../shared/utility/types");
const type_guard_1 = require("../guards/type.guard");
const auth_service_1 = require("./auth.service");
const verify_otp_dto_1 = require("./dto/verify-otp.dto");
const auth_user_guard_1 = require("../guards/auth-user.guard");
const auth_by_admin_1 = require("./dto/auth-by-admin");
const auth_credential_dto_1 = require("./dto/auth-credential.dto");
const signin_auth_dto_1 = require("./dto/signin-auth.dto");
const swagger_1 = require("@nestjs/swagger");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    async signup(authCredentialDto) {
        return await this.authService.Signup(authCredentialDto);
    }
    async signin(signinCredentialDto) {
        return await this.authService.Signin(signinCredentialDto);
    }
    async registerUserByAdmin(authByAdminDto) {
        return await this.authService.registerUserByAdmin(authByAdminDto);
    }
    async verifyOTP(verifyotp, req) {
        const user = req.user;
        return await this.authService.verifyOTP(verifyotp, user);
    }
};
__decorate([
    (0, common_1.Post)('signup'),
    (0, swagger_1.ApiOperation)({ summary: 'signup new user' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_credential_dto_1.AuthCredentialDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "signup", null);
__decorate([
    (0, common_1.Post)('signin'),
    (0, swagger_1.ApiOperation)({ summary: 'signin user' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [signin_auth_dto_1.SigninCredentialDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "signin", null);
__decorate([
    (0, common_1.Post)('admin'),
    (0, methods_1.Type)([types_1.userType.SuperAdmin, types_1.userType.Admin]),
    (0, common_1.UseGuards)(auth_user_guard_1.UserAuthGuard, type_guard_1.TypeGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'create new user' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_by_admin_1.AuthByAdminDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "registerUserByAdmin", null);
__decorate([
    (0, common_1.Post)('verify-otp'),
    (0, common_1.UseGuards)(auth_user_guard_1.UserAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'verify user account' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [verify_otp_dto_1.VerifyOTPDto, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "verifyOTP", null);
AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    (0, swagger_1.ApiTags)('Auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map