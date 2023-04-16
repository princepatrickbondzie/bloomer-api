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
exports.AuthService = void 0;
const user_1 = require("../shared/schema/user");
const mongoose_1 = require("mongoose");
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const mongoose_2 = require("@nestjs/mongoose");
const password_manager_1 = require("../shared/utility/password-manager");
const common_2 = require("@nestjs/common");
let AuthService = class AuthService {
    constructor(userModel, jwtService) {
        this.userModel = userModel;
        this.jwtService = jwtService;
    }
    async Signup(authCredentialDto) {
        const { email, contact } = authCredentialDto;
        try {
            const user = await this.userModel.findOne({ email });
            if (user) {
                throw new common_2.BadRequestException('Email already registered');
            }
            authCredentialDto.password = await (0, password_manager_1.generateHashPassword)(authCredentialDto.password);
            const otp = Math.random().toString().substr(2, 4);
            const otpEpiryTime = new Date();
            otpEpiryTime.setMinutes(otpEpiryTime.getMinutes() + 10);
            const newUser = await this.userModel.create(Object.assign(Object.assign({}, authCredentialDto), { otp,
                otpEpiryTime }));
            const payload = {
                email,
            };
            const token = this.createToken(payload);
            return {
                success: true,
                message: 'User created successfully',
                status: 201,
                data: {
                    id: newUser._id,
                    firstname: newUser.firstname,
                    lastname: newUser.lastname,
                    email: newUser.email,
                    contact: newUser.contact,
                    dob: newUser.dob,
                    type: newUser.type,
                    token,
                },
            };
        }
        catch (err) {
            throw err;
        }
    }
    async Signin(signinCredentialDto) {
        const { email, password } = signinCredentialDto;
        try {
            const user = await this.userModel.findOne({ email });
            if (!user) {
                return {
                    success: false,
                    message: 'Invalid email/password',
                    status: 404,
                    data: null,
                };
            }
            const isValid = await (0, password_manager_1.comparePassword)(password, user.password);
            if (!isValid) {
                return {
                    success: false,
                    message: 'Invalid email/password',
                    status: 404,
                    data: null,
                };
            }
            const payload = {
                email,
            };
            const token = this.createToken(payload);
            if (!user.isVerified) {
                const otp = Math.random().toString().substr(2, 4);
                const otpEpiryTime = new Date();
                otpEpiryTime.setMinutes(otpEpiryTime.getMinutes() + 10);
                await this.userModel.findByIdAndUpdate(user._id, { otp: otp, otpEpiryTime: otpEpiryTime }, { new: true });
                return {
                    success: true,
                    message: 'Signed in successfully',
                    status: 200,
                    data: {
                        message: 'User account not verified, otp sent',
                        id: user._id,
                        firstname: user.firstname,
                        lastname: user.lastname,
                        email: user.email,
                        contact: user.contact,
                        dob: user.dob,
                        type: user.type,
                        token,
                    },
                };
            }
            return {
                success: true,
                message: 'Signed in successfully',
                status: 200,
                data: {
                    id: user._id,
                    firstname: user.firstname,
                    lastname: user.lastname,
                    email: user.email,
                    contact: user.contact,
                    dob: user.dob,
                    type: user.type,
                    token,
                },
            };
        }
        catch (err) {
            throw err;
        }
    }
    async registerUserByAdmin(authByAdminDto) {
        const { email, contact } = authByAdminDto;
        try {
            const user = await this.userModel.findOne({ email: email });
            if (user) {
                return {
                    success: false,
                    message: 'Email already registered',
                    status: 400,
                    data: null,
                };
            }
            const exist = await this.userModel.findOne({ contact: contact });
            if (exist) {
                return {
                    success: false,
                    message: 'Phone number already registered',
                    status: 400,
                    data: null,
                };
            }
            authByAdminDto.password = await (0, password_manager_1.generateHashPassword)(authByAdminDto.password);
            const otp = Math.floor(Math.random() + 900000) + 100000;
            const otpEpiryTime = new Date();
            otpEpiryTime.setMinutes(otpEpiryTime.getMinutes() + 10);
            const newUser = await this.userModel.create(Object.assign(Object.assign({}, authByAdminDto), { otp,
                otpEpiryTime }));
            const payload = {
                email,
            };
            const token = this.createToken(payload);
            return {
                success: true,
                message: 'User created successfully',
                status: 201,
                data: {
                    id: newUser._id,
                    firstname: newUser.firstname,
                    lastname: newUser.lastname,
                    email: newUser.email,
                    contact: newUser.contact,
                    dob: newUser.dob,
                    type: newUser.type,
                    token,
                },
            };
        }
        catch (err) {
            throw err;
        }
    }
    async verifyOTP(verifyotp, user) {
        const data = await this.userModel.findOne({ _id: user._id });
        if (data.isVerified) {
            return {
                success: false,
                message: 'User account already verified',
                status: 400,
            };
        }
        if (data.otp === verifyotp.otp) {
            await this.userModel.findByIdAndUpdate(user._id, { isVerified: true }, { new: true });
            return {
                success: true,
                message: 'User account verified',
                status: 200,
            };
        }
        else {
            return {
                success: false,
                message: 'OTP is invalid',
                status: 400,
            };
        }
    }
    createToken(payload) {
        return this.jwtService.sign(payload);
    }
    async deactivateUser(deactivateDetails) {
        const { email } = deactivateDetails;
        let user = await this.userModel.findOne({ email });
        if (!user) {
            throw new common_1.NotFoundException();
        }
        user.active = !user.active;
        user = await user.save();
        delete user.password;
        return user;
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(user_1.User.name)),
    __metadata("design:paramtypes", [mongoose_1.Model,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map