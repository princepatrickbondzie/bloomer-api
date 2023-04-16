import { User } from '../shared/schema/user';
import { Model } from 'mongoose';
import { Response } from '../shared/utility/types';
import { JwtService } from '@nestjs/jwt';
import { VerifyOTPDto } from './dto/verify-otp.dto';
import { AuthByAdminDto } from './dto/auth-by-admin';
import { AuthCredentialDto } from './dto/auth-credential.dto';
import { SigninCredentialDto } from './dto/signin-auth.dto';
import { ToggleUserActivationDto } from './dto/toggle-user-activate.dto';
export declare class AuthService {
    private readonly userModel;
    private readonly jwtService;
    constructor(userModel: Model<User>, jwtService: JwtService);
    Signup(authCredentialDto: AuthCredentialDto): Promise<Response>;
    Signin(signinCredentialDto: SigninCredentialDto): Promise<Response>;
    registerUserByAdmin(authByAdminDto: AuthByAdminDto): Promise<Response>;
    verifyOTP(verifyotp: VerifyOTPDto, user: User): Promise<Response>;
    private createToken;
    deactivateUser(deactivateDetails: ToggleUserActivationDto): Promise<User>;
}
